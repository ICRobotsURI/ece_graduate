import { marked } from './vendor/marked.esm.js';

const markdownContainers = document.querySelectorAll('[data-markdown-source]');

function safeRenderedFragment(markdownText) {
  const renderer = new marked.Renderer();

  // The requirements documents do not need embedded HTML. Ignoring it keeps
  // source files from introducing scripts, event handlers, or hidden content.
  renderer.html = () => '';

  const template = document.createElement('template');
  template.innerHTML = marked.parse(markdownText, { gfm: true, renderer });

  template.content.querySelectorAll('*').forEach((element) => {
    [...element.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      if (name.startsWith('on') || name === 'style' || name === 'srcdoc') {
        element.removeAttribute(attribute.name);
      }
    });
  });

  template.content.querySelectorAll('a[href]').forEach((link) => {
    const value = link.getAttribute('href');
    try {
      const target = new URL(value, window.location.href);
      if (!['http:', 'https:', 'mailto:'].includes(target.protocol)) {
        link.removeAttribute('href');
      }
    } catch {
      link.removeAttribute('href');
    }
  });

  return template.content;
}

markdownContainers.forEach(async (container) => {
  const source = container.dataset.markdownSource;

  try {
    const response = await fetch(source, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const markdownText = await response.text();
    container.replaceChildren(safeRenderedFragment(markdownText));
    container.removeAttribute('aria-busy');
  } catch (error) {
    container.removeAttribute('aria-busy');
    container.innerHTML = '';

    const message = document.createElement('div');
    message.className = 'callout';
    message.append('The requirements document could not be loaded. ');

    const link = document.createElement('a');
    link.href = source;
    link.textContent = 'Open the Markdown source directly.';
    message.append(link);
    container.append(message);

    console.error(`Could not render ${source}:`, error);
  }
});
