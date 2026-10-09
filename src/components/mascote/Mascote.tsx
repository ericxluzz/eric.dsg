import type { CSSProperties } from 'react';

type Props = {
  mode: 'walk' | 'hi' | 'work';
  /** px por pixel de arte (2, 3 ou 7) */
  size: number;
  speed?: number;
  text?: string;
  mobile?: 'hide' | 'show';
};

/**
 * Markup do Web Component <eric-mascote>. O script é carregado uma vez pelo
 * <MascoteLoader /> no layout. As dimensões são reservadas já no SSR (sem CLS),
 * com os mesmos valores que o elemento aplica no setup().
 */
export function Mascote({ mode, size, speed, text, mobile }: Props) {
  const cw = (mode === 'work' ? 30 : 20) * size;
  const ch = 34 * size;
  const style: CSSProperties =
    mode === 'walk'
      ? { position: 'relative', display: 'block', flexShrink: 0, width: '100%', height: ch, pointerEvents: 'none' }
      : mode === 'work'
        ? { position: 'relative', display: 'block', flexShrink: 0, width: cw, height: ch }
        : { position: 'relative', display: 'block', flexShrink: 0, width: cw + 84, height: ch + 44, overflow: 'hidden' };
  return (
    <eric-mascote
      mode={mode}
      size={String(size)}
      speed={speed ? String(speed) : undefined}
      text={text}
      mobile={mobile}
      aria-hidden="true"
      style={style}
    />
  );
}
