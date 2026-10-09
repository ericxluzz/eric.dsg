'use client';
import { useEffect, useState } from 'react';

type Props = {
  mode: 'walk' | 'hi' | 'work';
  size: 2 | 3 | 7 | number;
  speed?: number;
  text?: string;
  mobile?: 'hide' | 'show';
  className?: string;
};

export function Mascote({ mode, size, speed, text, mobile, className }: Props) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    import('./mascote-element.js').then(() => setReady(true));
  }, []);
  const h = 34 * size;
  return (
    <div className={className} style={{ minHeight: h }} aria-hidden="true">
      {ready && (
        <eric-mascote
          mode={mode}
          size={String(size)}
          speed={speed ? String(speed) : undefined}
          text={text}
          mobile={mobile}
        />
      )}
    </div>
  );
}
