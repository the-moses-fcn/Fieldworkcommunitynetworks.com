(async function () {
  const slots = [
    ['nav-mount',            'components/nav.html'],
    ['mobile-menu-mount',    'components/mobile-menu.html'],
    ['hero-mount',           'components/hero.html'],
    ['problem-mount',        'components/problem.html'],
    ['infrastructure-mount', 'components/infrastructure.html'],
    ['partners-mount',       'components/partners.html'],
    ['status-mount',         'components/status.html'],
    ['supply-chain-mount',   'components/supply-chain.html'],
    ['vision-mount',         'components/vision.html'],
    ['contact-mount',        'components/contact.html'],
    ['footer-mount',         'components/footer.html'],
  ];

  await Promise.all(slots.map(async ([id, src]) => {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const r = await fetch(src);
      if (!r.ok) throw new Error(`${r.status} ${src}`);
      el.outerHTML = await r.text();
    } catch (e) {
      console.warn('Component load failed:', e.message);
      el.remove();
    }
  }));

  window.App.init();
}());
