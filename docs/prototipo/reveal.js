(function () {
  if (window.__revealInit) return; window.__revealInit = true;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      el.style.opacity = '1';
      el.style.transform = 'none';
      io.unobserve(el);
      setTimeout(function () { el.style.transition = ''; el.style.willChange = ''; }, 1200);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  function prep(el, delay) {
    if (seen.has(el)) return; seen.add(el);
    var cs = getComputedStyle(el);
    if (cs.position === 'absolute' || cs.position === 'fixed' || (el.style.transform && el.style.transform !== 'none')) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.willChange = 'opacity, transform';
    el.style.transition = 'opacity .8s cubic-bezier(.2,.7,.2,1) ' + delay + 'ms, transform .9s cubic-bezier(.2,.7,.2,1) ' + delay + 'ms';
    io.observe(el);
  }

  function scan() {
    document.querySelectorAll('section > div:not([style*="absolute"]) > *').forEach(function (el) {
      if (seen.has(el)) return;
      var cs = getComputedStyle(el);
      var kids = el.children;
      if (cs.display === 'grid' && kids.length > 1 && kids.length <= 8) {
        seen.add(el);
        Array.prototype.forEach.call(kids, function (k, i) { prep(k, Math.min(i, 5) * 90); });
      } else {
        prep(el, 0);
      }
    });
  }

  var t;
  function schedule() { clearTimeout(t); t = setTimeout(scan, 120); }
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  schedule();
})();
