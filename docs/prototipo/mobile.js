(function () {
  if (window.__mobileInit) return; window.__mobileInit = true;
  var BP = 767;
  var css = '@media (max-width:' + BP + 'px){' +
    'header nav > a{display:none!important}' +
    'header > div{padding:8px 8px 8px 16px!important;flex-wrap:nowrap!important}' +
    '.m-menu-btn{display:inline-flex!important}' +
    '[data-m="row"]{display:flex!important;grid-template-columns:none!important;flex-wrap:nowrap!important;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding-bottom:8px!important;scrollbar-width:none}' +
    '[data-m="row"]::-webkit-scrollbar{display:none}' +
    '[data-m="row"] > *{flex:0 0 72%!important;scroll-snap-align:start;min-width:0}' +
    '[role="tablist"]{flex-wrap:nowrap!important;overflow-x:auto;scrollbar-width:none;max-width:100%}' +
    '[role="tablist"]::-webkit-scrollbar{display:none}' +
    '[role="tablist"] > *{flex:0 0 auto}' +
    'aside[aria-label="Nesta publicação"]{position:static!important;flex:1 1 100%!important;min-width:0!important}' +
    'aside[aria-label="Nesta publicação"] nav{flex-direction:row!important;overflow-x:auto;border-left:0!important;gap:6px;scrollbar-width:none;padding-bottom:4px}' +
    'aside[aria-label="Nesta publicação"] nav::-webkit-scrollbar{display:none}' +
    'aside[aria-label="Nesta publicação"] nav a{flex:0 0 auto;white-space:nowrap;border:1px solid #e1e1e6!important;border-radius:999px;padding:8px 14px!important;margin:0!important;background:#fff}' +
    'button,[role="tab"]{min-height:40px}' +'[style*="sticky"]{position:static!important;top:auto!important}' +'#inicio{min-height:0!important}' +'#inicio > div:first-child{padding-top:108px!important}' +'#inicio > div:first-child > div:nth-child(2){padding-bottom:8px!important;gap:20px!important}' +'#inicio img[alt="Eric Luz"]{height:min(70vh,560px)!important;margin-top:-24px!important}' +
    '}' +
    '.m-menu-btn{display:none;align-items:center;gap:8px;height:44px;padding:0 18px;border:0;border-radius:999px;background:#101014;color:#fff;font:600 15px/1 inherit;cursor:pointer;flex-shrink:0}' +
    '.m-panel{position:fixed;z-index:60;left:12px;right:12px;top:84px;display:flex;flex-direction:column;padding:8px;border-radius:24px;background:#fff;box-shadow:0 24px 60px rgba(16,16,20,.18);border:1px solid rgba(16,16,20,.08);transform-origin:top center;animation:mIn .22s ease-out}' +
    '.m-panel a{display:flex;align-items:center;justify-content:space-between;padding:16px 16px;border-radius:16px;font-size:18px;font-weight:500;color:#101014;text-decoration:none;letter-spacing:-.01em}' +
    '.m-panel a:active,.m-panel a:hover{background:#eceaff;color:#2a1fb3}' +
    '.m-panel a.cta{margin-top:6px;background:#101014;color:#fff;justify-content:center}' +
    '.m-veil{position:fixed;inset:0;z-index:55;background:rgba(16,16,20,.28)}' +
    '@keyframes mIn{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var open = false, veil, panel;
  function close() { open = false; if (veil) veil.remove(); if (panel) panel.remove(); veil = panel = null; setLabel(); }
  function setLabel() { var b = document.querySelector('.m-menu-btn'); if (b) b.innerHTML = open ? 'Fechar ✕' : 'Menu <span style="display:inline-flex;flex-direction:column;gap:3px"><i style="width:14px;height:1.5px;background:#fff;display:block"></i><i style="width:14px;height:1.5px;background:#fff;display:block"></i></span>'; }
  function toggle() {
    if (open) return close();
    var nav = document.querySelector('header nav'); if (!nav) return;
    open = true;
    veil = document.createElement('div'); veil.className = 'm-veil'; veil.onclick = close;
    panel = document.createElement('nav'); panel.className = 'm-panel'; panel.setAttribute('aria-label', 'Menu');
    var links = nav.querySelectorAll('a');
    links.forEach(function (a, i) {
      var l = document.createElement('a'); l.href = a.getAttribute('href'); l.textContent = a.textContent.trim();
      if (i === links.length - 1 && /contato/i.test(l.textContent)) l.className = 'cta';
      else l.insertAdjacentHTML('beforeend', '<span style="color:#9a9aa2">→</span>');
      l.addEventListener('click', close);
      panel.appendChild(l);
    });
    var hdr = document.querySelector('header > div');
    if (hdr) panel.style.top = (hdr.getBoundingClientRect().bottom + 8) + 'px';
    document.body.appendChild(veil); document.body.appendChild(panel); setLabel();
  }
  function mount() {
    var hdr = document.querySelector('header > div');
    if (!hdr || hdr.querySelector('.m-menu-btn')) return;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'm-menu-btn'; b.setAttribute('aria-label', 'Abrir menu'); b.onclick = toggle;
    hdr.appendChild(b); setLabel();
  }
  var t; new MutationObserver(function () { clearTimeout(t); t = setTimeout(mount, 100); }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('resize', function () { if (window.innerWidth > BP && open) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) close(); });
  mount();
})();
