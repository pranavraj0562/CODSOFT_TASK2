(() => {
  // Smooth-scroll for anchor links (keeps HTML unchanged)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;

    const href = a.getAttribute('href');
    if (!href) return;

    // Only handle real fragment links; your nav uses href="#" so we keep default.
    if (href.startsWith('#') && href.length > 1) {
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Light UX: add subtle hover cursor to hero "View Details" lines if present
  const hero = document.querySelector('.hero');
  if (hero) {
    const lines = hero.querySelectorAll('p');
    lines.forEach((p) => {
      if ((p.textContent || '').trim().toLowerCase() === 'view details') {
        p.style.cursor = 'pointer';
      }
    });
  }
})();

