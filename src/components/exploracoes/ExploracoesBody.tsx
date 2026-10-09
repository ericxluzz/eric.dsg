'use client';
import Link from 'next/link';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Mascote } from '@/components/mascote/Mascote';

export type CardPost = {
  slug: string;
  categoria: string;
  titulo: string;
  descricao: string;
  cat: string;
  bg: string;
  ink: string;
  meta: string;
  capa: string | null;
  exemplo: boolean;
};

type Filtro = { key: string; label: string };

export function ExploracoesBody({ posts, filtros, ano }: { posts: CardPost[]; filtros: Filtro[]; ano: number }) {
  const [f, setF] = useState('todos');
  const tabsRef = useRef<HTMLDivElement>(null);

  // ?cat=processos abre filtrado (lido no client para manter o HTML estático completo)
  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get('cat');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincroniza com a URL só no mount
    if (cat && filtros.some((x) => x.key === cat)) setF(cat);
  }, [filtros]);

  const select = (k: string) => {
    setF(k);
    const url = new URL(window.location.href);
    if (k === 'todos') url.searchParams.delete('cat');
    else url.searchParams.set('cat', k);
    window.history.replaceState(null, '', url);
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End') return;
    e.preventDefault();
    const n = filtros.length;
    const j = e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + n) % n;
    select(filtros[j].key);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[j]?.focus();
  };

  const list = posts.filter((p) => f === 'todos' || p.categoria === f);
  const featured = list.slice(0, 1);
  const rest = list.slice(1);
  const count = (k: string) => (k === 'todos' ? posts.length : posts.filter((p) => p.categoria === k).length);

  return (
    <main id="conteudo" style={{ fontFamily: 'var(--font-space-grotesk),system-ui,sans-serif', color: '#101014', background: '#fafafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <section style={{ padding: 'clamp(120px,12vw,160px) clamp(20px,5vw,80px) clamp(28px,3vw,40px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', alignSelf: 'flex-start', padding: '5px 15px 5px 5px', borderRadius: '999px', background: '#eceaff', color: '#2a1fb3', fontSize: '15px', fontWeight: '600', letterSpacing: '-.005em', lineHeight: '1' }}>
            <span style={{ width: '8px', height: '8px', margin: '0 4px 0 9px', borderRadius: '50%', background: '#4030ff', display: 'block' }}></span>
            Explorações
          </span>
          <h1 style={{ margin: '0', fontFamily: 'inherit', fontWeight: '500', fontSize: 'clamp(40px,4.6vw,72px)', lineHeight: '.98', letterSpacing: '-.05em' }}>Explorações</h1>
          <p style={{ margin: '0', maxWidth: '64ch', fontSize: 'clamp(17px,1.4vw,20px)', lineHeight: '1.5', color: '#3a3a40', textWrap: 'pretty' }}>
            Experiências, processos e experimentações que fazem parte da minha atuação em Product Design e Design Engineering.
          </p>
        </div>
      </section>
      <section style={{ flex: '1', padding: '0 clamp(20px,5vw,80px) clamp(64px,8vw,110px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(24px,3vw,36px)' }}>
          <div style={{ marginBottom: 'calc(-1 * clamp(24px,3vw,36px))' }}>
            <Mascote mode="walk" size={3} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 0', borderTop: '1px solid #101014', borderBottom: '1px solid #e1e1e6' }}>
            <div ref={tabsRef} role="tablist" aria-label="Categorias" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {filtros.map((x, i) => {
                const on = x.key === f;
                return (
                  <button
                    key={x.key}
                    type="button"
                    role="tab"
                    id={`tab-${x.key}`}
                    aria-selected={on}
                    aria-controls="lista-publicacoes"
                    tabIndex={on ? 0 : -1}
                    onClick={() => select(x.key)}
                    onKeyDown={(e) => onKey(e, i)}
                    style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '9px 15px', borderRadius: '999px', fontSize: '14px', fontWeight: '500', background: on ? '#101014' : 'transparent', color: on ? '#fff' : '#101014' }}
                  >
                    {x.label}
                    <span style={{ fontSize: '12px', opacity: '.65', fontVariantNumeric: 'tabular-nums' }}>{count(x.key)}</span>
                  </button>
                );
              })}
            </div>
            <span style={{ fontSize: '13px', color: '#6b6b72' }} aria-live="polite">
              {list.length + (list.length === 1 ? ' publicação' : ' publicações')}
            </span>
          </div>
          {featured.map((p) => (
            <Link key={p.slug} href={`/exploracoes/${p.slug}`} className="hv-35a89f" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', color: '#101014' }}>
              <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '24px', overflow: 'hidden', background: p.bg }}>
                {p.capa && <span role="img" aria-label="Capa" style={{ position: 'absolute', inset: '0', backgroundImage: `url("${p.capa}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
                  <span style={{ padding: '5px 11px', borderRadius: '999px', fontWeight: '600', background: p.bg, color: p.ink }}>{p.cat}</span>
                  {p.exemplo && <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1px dashed #b9b9c2', color: '#5d5d63', fontWeight: '500' }}>Exemplo</span>}
                </div>
                <h2 style={{ margin: '0', fontFamily: 'inherit', fontWeight: '500', fontSize: 'clamp(28px,2.8vw,42px)', lineHeight: '1.06', letterSpacing: '-.04em', textWrap: 'balance' }}>{p.titulo}</h2>
                <p style={{ margin: '0', maxWidth: '52ch', fontSize: '16px', lineHeight: '1.6', color: '#3a3a40', textWrap: 'pretty' }}>{p.descricao}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '16px', borderTop: '1px solid #e1e1e6', fontSize: '14px', color: '#5d5d63' }}>
                  <span>{p.meta}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: '#101014' }}>
                    Ler
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <div id="lista-publicacoes" role="tabpanel" aria-labelledby={`tab-${f}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: 'clamp(28px,3vw,40px) clamp(16px,2vw,28px)' }}>
            {rest.map((p) => (
              <Link key={p.slug} href={`/exploracoes/${p.slug}`} className="hv-35a89f" style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0', color: '#101014' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '20px', overflow: 'hidden', background: p.bg }}>
                  {p.capa && <span role="img" aria-label="Capa" style={{ position: 'absolute', inset: '0', backgroundImage: `url("${p.capa}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '13px' }}>
                    <span style={{ padding: '4px 10px', borderRadius: '999px', fontWeight: '600', background: p.bg, color: p.ink }}>{p.cat}</span>
                    {p.exemplo && <span style={{ padding: '3px 9px', borderRadius: '999px', border: '1px dashed #b9b9c2', color: '#5d5d63', fontWeight: '500' }}>Exemplo</span>}
                  </div>
                  <h3 style={{ margin: '0', fontFamily: 'inherit', fontWeight: '500', fontSize: 'clamp(20px,1.6vw,24px)', lineHeight: '1.18', letterSpacing: '-.025em', textWrap: 'balance' }}>{p.titulo}</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#3a3a40', textWrap: 'pretty' }}>{p.descricao}</p>
                  <span style={{ fontSize: '13px', color: '#6b6b72' }}>{p.meta}</span>
                </div>
              </Link>
            ))}
          </div>
          {list.length === 0 && <p style={{ margin: '0', padding: '48px 0', fontSize: '16px', color: '#5d5d63' }}>Nenhuma publicação nesta categoria ainda.</p>}
        </div>
      </section>
      <footer style={{ padding: '0 clamp(20px,5vw,80px) 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', paddingTop: '24px', borderTop: '1px solid #dcdce2', fontSize: '14px', color: '#5d5d63' }}>
          <span>© {ano} Eric Luz · Product Designer</span>
          <Link href="/#projetos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            {'Projetos '}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}
