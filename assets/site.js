const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (window.location.protocol === 'file:') {
  document.querySelectorAll('[data-markdown-source]').forEach((container) => {
    const source = container.dataset.markdownSource;
    container.removeAttribute('aria-busy');
    container.innerHTML = `<div class="callout"><strong>Local server required:</strong> browsers do not allow a file opened with <code>file://</code> to read a separate Markdown document. Preview this site through a local web server. <a href="${source}">You can also open the Markdown source directly.</a></div>`;
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const faqSearch = document.querySelector('[data-faq-search]');

if (faqSearch) {
  const questions = [...document.querySelectorAll('[data-faq-item]')];
  const groups = [...document.querySelectorAll('[data-faq-group]')];
  const noResults = document.querySelector('[data-no-results]');

  faqSearch.addEventListener('input', () => {
    const query = faqSearch.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    questions.forEach((item) => {
      const visible = item.textContent.toLocaleLowerCase().includes(query);
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    groups.forEach((group) => {
      const hasVisibleQuestion = [...group.querySelectorAll('[data-faq-item]')]
        .some((item) => !item.hidden);
      group.hidden = !hasVisibleQuestion;
    });

    if (noResults) noResults.style.display = visibleCount ? 'none' : 'block';
  });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
