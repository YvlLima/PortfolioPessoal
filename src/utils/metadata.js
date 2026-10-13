export function pageMetadata({ lang = 'pt', seo = {}, privacy = false, project = null, projectList = false, post = null }) {
  const pt = lang === 'pt';
  let title = seo.title || 'Gonçalo Lima';
  let description = seo.description || '';
  let path = '/';
  if (privacy) { title = `${pt ? 'Política de Privacidade' : 'Privacy Policy'} | Gonçalo Lima`; path = '/privacidade'; }
  else if (project) { title = `${project.title} | Gonçalo Lima`; description = project.summary[lang]; path = `/projetos/${project.slug}`; }
  else if (projectList) { title = `${pt ? 'Projetos' : 'Projects'} | Gonçalo Lima`; path = '/projetos'; }
  else if (post) { title = `${post.title || post.slug} | Gonçalo Lima`; description = post.excerpt || description; path = `/blog/${post.slug}`; }
  return { title, description, path };
}
