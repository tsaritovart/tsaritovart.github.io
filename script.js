document.documentElement.classList.add('is-loading');
requestAnimationFrame(() => requestAnimationFrame(() => {
  document.documentElement.classList.remove('is-loading');
  document.documentElement.classList.add('is-ready');
}));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
