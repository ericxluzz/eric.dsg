'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';

type NavKey = 'inicio' | 'sobre' | 'projetos' | 'exploracoes' | 'contato';
type NavLink = { key: NavKey; label: string; href: string };

const BP = 767;

const LOGO_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
    <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
    <path d="m2.3 2.3 7.286 7.286" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const linkStyle: CSSProperties = { padding: '10px 14px', borderRadius: '999px' };
const activeStyle: CSSProperties = { ...linkStyle, background: '#eceaff', color: '#2a1fb3' };
const ctaStyle: CSSProperties = { padding: '10px 18px', borderRadius: '999px', background: '#101014', color: '#fff' };

function activeKey(pathname: string): NavKey | null {
  if (pathname.startsWith('/sobre')) return 'sobre';
  if (pathname.startsWith('/exploracoes')) return 'exploracoes';
  if (pathname.startsWith('/cases')) return 'projetos';
  return null;
}

/**
 * Header fixo em pílula. `variant="ematr"` reproduz o header enxuto do case
 * e-Matrículas ("Todos os projetos" + Contato).
 */
export function Header({ variant = 'default' }: { variant?: 'default' | 'ematr' }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(84);
  const barRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const links: NavLink[] =
    variant === 'ematr'
      ? [
          { key: 'projetos', label: 'Todos os projetos', href: '/#projetos' },
          { key: 'contato', label: 'Contato', href: '#contato' },
        ]
      : [
          { key: 'inicio', label: 'Início', href: isHome ? '#inicio' : '/' },
          { key: 'sobre', label: 'Sobre', href: '/sobre' },
          { key: 'projetos', label: 'Projetos', href: isHome ? '#projetos' : '/#projetos' },
          { key: 'exploracoes', label: 'Explorações', href: '/exploracoes' },
          { key: 'contato', label: 'Contato', href: isHome ? '#contato' : '/#contato' },
        ];
  const current = activeKey(pathname);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) btnRef.current?.focus();
  }, []);

  // Fecha em mudança de rota
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const bar = barRef.current;
    if (bar) setPanelTop(bar.getBoundingClientRect().bottom + 8);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('a')?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    const onResize = () => { if (window.innerWidth > BP) close(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  const logoHref = isHome ? '#inicio' : '/';
  const ematr = variant === 'ematr';

  return (
    <>
      <header style={{ position: 'fixed', zIndex: 50, top: '16px', left: 0, right: 0, display: 'flex', justifyContent: 'center', padding: '0 16px', pointerEvents: 'none' }}>
        <div
          ref={barRef}
          style={
            ematr
              ? { pointerEvents: 'auto', width: '100%', maxWidth: '1280px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '8px 8px 8px 18px', borderRadius: '999px', background: 'rgba(255,255,255,.88)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(16,16,20,.08)' }
              : { pointerEvents: 'auto', width: '100%', maxWidth: '1280px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', padding: '10px 12px 10px 20px', borderRadius: '999px', background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(16,16,20,.08)' }
          }
        >
          <Link
            href={logoHref}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: ematr ? '19px' : '20px', letterSpacing: '-.01em', color: '#101014', ...(ematr ? { whiteSpace: 'nowrap' } : {}) }}
          >
            {LOGO_ICON}
            Eric Luz
          </Link>
          <nav aria-label="Principal" style={{ display: 'flex', alignItems: 'center', gap: '4px', ...(ematr ? {} : { flexWrap: 'wrap' }), fontSize: '15px', fontWeight: 500 }}>
            {ematr ? (
              <>
                <Link href="/#projetos" aria-label="Todos os projetos" className="hv-ccfef3" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <span className="nav-label-560">Todos os projetos</span>
                </Link>
                <a href="#contato" className="hv-5de9a7" style={{ ...ctaStyle, whiteSpace: 'nowrap' }}>Contato</a>
              </>
            ) : (
              links.map((l) => {
                if (l.key === 'contato')
                  return <Link key={l.key} href={l.href} className="hv-5de9a7" style={ctaStyle}>{l.label}</Link>;
                const on = current === l.key;
                return (
                  <Link key={l.key} href={l.href} aria-current={on ? 'page' : undefined} className={on ? undefined : 'hv-ccfef3'} style={on ? activeStyle : linkStyle}>
                    {l.label}
                  </Link>
                );
              })
            )}
          </nav>
          <button
            ref={btnRef}
            type="button"
            className="m-menu-btn"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => (open ? close() : setOpen(true))}
          >
            {open ? (
              'Fechar ✕'
            ) : (
              <>
                Menu{' '}
                <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px' }} aria-hidden="true">
                  <i style={{ width: '14px', height: '1.5px', background: '#fff', display: 'block' }} />
                  <i style={{ width: '14px', height: '1.5px', background: '#fff', display: 'block' }} />
                </span>
              </>
            )}
          </button>
        </div>
      </header>
      {open && (
        <>
          <div className="m-veil" onClick={() => close()} aria-hidden="true" />
          <nav id="menu-mobile" ref={panelRef} className="m-panel" aria-label="Menu" style={{ top: panelTop }}>
            {links.map((l, i) => {
              const cta = i === links.length - 1 && l.key === 'contato';
              return (
                <Link key={l.key} href={l.href} className={cta ? 'cta' : undefined} onClick={() => close(false)}>
                  {l.label}
                  {!cta && <span style={{ color: '#9a9aa2' }} aria-hidden="true">→</span>}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
}
