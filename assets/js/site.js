// ISN revamp concept – small, dependency-free interactions
(function () {
  // FAQ accordions: one open at a time per list
  document.querySelectorAll('[data-faq]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var list = btn.closest('div').parentElement;
      var willOpen = btn.getAttribute('aria-expanded') !== 'true';
      list.querySelectorAll('[data-faq]').forEach(function (b) {
        var p = document.getElementById(b.getAttribute('aria-controls'));
        var open = willOpen && b === btn;
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (p) p.hidden = !open;
        var icon = b.querySelector('span:last-child'); if (icon) icon.textContent = open ? '\u2212' : '+';
      });
    });
  });
  // Tabs (who-we-help, service categories)
  var S = {"base": "min-height:48px;padding:0 22px;border-radius:999px;font-family:Raleway,sans-serif;font-weight:700;font-size:15px;cursor:pointer;", "on": "background:#FACE47;color:#050B2D;border:1px solid #FACE47;", "off": "background:transparent;color:#FFFFFF;border:1px solid rgba(255,255,255,0.28);", "audBase": "display:flex;align-items:center;gap:16px;width:100%;min-height:72px;padding:0 22px;border-radius:18px;font-family:Raleway,sans-serif;font-weight:700;font-size:18px;text-align:left;cursor:pointer;", "audOn": "background:#FACE47;color:#050B2D;border:1px solid #FACE47;", "audOff": "background:rgba(255,255,255,0.04);color:#FFFFFF;border:1px solid rgba(255,255,255,0.16);"};
  document.querySelectorAll('[data-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parts = btn.getAttribute('data-tab').split(':'), grp = parts[0];
      var base = grp === 'aud' ? S.audBase : S.base, on = grp === 'aud' ? S.audOn : S.on, off = grp === 'aud' ? S.audOff : S.off;
      document.querySelectorAll('[data-tab^="' + grp + ':"]').forEach(function (b) {
        var active = b === btn; b.setAttribute('aria-selected', active ? 'true' : 'false'); b.style.cssText = base + (active ? on : off);
      });
      document.querySelectorAll('[data-panel^="' + grp + ':"]').forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== btn.getAttribute('data-tab'); });
    });
  });
  // Mobile menu
  var menu = document.getElementById('mobile-menu');
  var opener = document.querySelector('[data-menu-open]');
  function setMenu(open) {
    if (!menu) return; menu.hidden = !open; document.body.style.overflow = open ? 'hidden' : '';
    if (opener) opener.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var c = menu.querySelector('[data-menu-close]'); if (c) c.focus(); } else if (opener) { opener.focus(); }
  }
  if (opener) opener.addEventListener('click', function () { setMenu(true); });
  document.querySelectorAll('[data-menu-close]').forEach(function (b) { b.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu && !menu.hidden) setMenu(false); });
})();
// v2: scroll reveals, glance timeline and floating booking button
(function () {
  var root = document.documentElement;
  if (!('IntersectionObserver' in window)) return;
  root.classList.add('io');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-l').forEach(function (el) { io.observe(el); });
  var tlo = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); tlo.unobserve(e.target); } });
  }, { threshold: 0.25 });
  document.querySelectorAll('.tl').forEach(function (el) { tlo.observe(el); });
  var fab = document.querySelector('.fab');
  if (fab) {
    root.classList.add('js-fab');
    var onScroll = function () { fab.classList.toggle('show', window.scrollY > window.innerHeight * 0.6); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();
