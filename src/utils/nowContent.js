export const nowIconNames = ['Code2', 'Gamepad2', 'GraduationCap', 'Shield', 'Bot', 'Rocket', 'Cpu'];

const text = (value, maximum, required = false) => {
  if (typeof value !== 'string' || value.length > maximum || (required && !value.trim())) {
    throw new Error('Preenche os campos obrigatórios e respeita os limites de texto.');
  }
  return value.trim();
};
const translated = (value, maximum, required = false) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Texto bilingue inválido.');
  const pt = text(value.pt, maximum, required);
  return { pt, en: text(value.en ?? '', maximum) || pt };
};
export function safeProjectLink(value) {
  if (!value) return '';
  const link = text(value, 500);
  if (/[\\\s\u0000-\u001f\u007f]/u.test(link)) throw new Error('O endereço do projeto é inválido.');
  if (/^#[a-zA-Z0-9_-]+$/.test(link) || /^\/(?!\/)[a-zA-Z0-9/_-]*$/.test(link)) return link;
  let url;
  try { url = new URL(link); } catch { throw new Error('Usa um endereço HTTPS ou uma ligação interna.'); }
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Usa um endereço HTTPS sem credenciais.');
  return url.href;
}
export function validateNowContent(input) {
  if (!input || !Array.isArray(input.projects) || input.projects.length > 24) throw new Error('Podes publicar até 24 projetos.');
  const ids = new Set();
  const projects = input.projects.map(project => {
    if (!project || typeof project !== 'object') throw new Error('Projeto inválido.');
    const id = text(project.id, 80, true);
    if (!/^[a-zA-Z0-9_-]+$/.test(id) || ids.has(id)) throw new Error('Identificador de projeto inválido ou repetido.');
    ids.add(id);
    if (typeof project.visible !== 'boolean') throw new Error('Define a visibilidade do projeto.');
    if (!nowIconNames.includes(project.iconName)) throw new Error('Escolhe um ícone disponível.');
    const slug = text(project.slug ?? '', 80);
    if (slug && !/^[a-z0-9_-]+$/.test(slug)) throw new Error('Referência de projeto inválida.');
    return {
      id, visible: project.visible, iconName: project.iconName,
      title: translated(project.title, 100, true),
      status: translated(project.status, 80, true),
      badge: translated(project.badge, 100),
      shortDesc: translated(project.shortDesc, 1800, true),
      linkText: translated(project.linkText, 80),
      slug, link: safeProjectLink(project.link),
    };
  });
  return { subtitle: translated(input.subtitle, 240, true), projects };
}
export function publicNowContent(content) {
  return { subtitle: content.subtitle, projects: content.projects.filter(project => project.visible).map(({ visible: _visible, ...project }) => project) };
}
