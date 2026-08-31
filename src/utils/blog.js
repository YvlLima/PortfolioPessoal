/**
 * Utility to load and parse markdown blog posts at build-time using Vite import.meta.glob
 */

export function parseMarkdownPost(filepath, rawContent) {
  // Extract clean slug from filepath (e.g. /src/content/blog/post-slug.md)
  const slug = filepath.split('/').pop().replace(/\.md$/, '');

  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return {
      slug,
      title: slug,
      date: '',
      excerpt: '',
      tags: [],
      readTime: '3',
      author: 'Gonçalo Lima',
      content: rawContent
    };
  }

  const yamlStr = match[1];
  const content = match[2].trim();
  const data = {};

  yamlStr.split(/\r?\n/).forEach((line) => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();

      // Parse YAML array syntax [a, b, c]
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean);
      } else if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }

      data[key] = val;
    }
  });

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: data.readTime || '3',
    author: data.author || 'Gonçalo Lima',
    content
  };
}

export function getAllPosts() {
  const postFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true });

  const posts = Object.entries(postFiles).map(([path, rawModule]) => {
    const raw = typeof rawModule === 'string' ? rawModule : rawModule?.default || '';
    return parseMarkdownPost(path, raw);
  });

  // Sort descending by date (newest first)
  return posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}
