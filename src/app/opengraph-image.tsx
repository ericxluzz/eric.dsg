import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Eric Luz · Product Designer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** OG padrão: foto do hero sobre o gradiente azul, com "Eric Luz · Product Designer". */
export default async function Image() {
  const foto = await readFile(join(process.cwd(), 'public/assets/eric2-cutout.png'));
  const src = `data:image/png;base64,${foto.toString('base64')}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg,#07165c 0%,#1239ff 38%,#4030ff 62%,#6929ff 82%,#8129d9 100%)',
          color: '#fff',
        }}
      >
        <div style={{ position: 'absolute', width: 720, height: 720, borderRadius: 9999, right: -160, top: 40, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', display: 'flex' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24, padding: '0 0 0 80px', width: 640 }}>
          <div style={{ display: 'flex', alignSelf: 'flex-start', padding: '10px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.35)', background: 'rgba(255,255,255,.1)', fontSize: 24 }}>
            Product Designer
          </div>
          <div style={{ fontSize: 88, lineHeight: 0.95, letterSpacing: -3, fontWeight: 600 }}>Eric Luz</div>
          <div style={{ fontSize: 36, lineHeight: 1.15, color: '#e4e1ff' }}>Produtos complexos de ponta a ponta</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={src} height={630} style={{ position: 'absolute', right: 40, bottom: 0, height: 630 }} />
      </div>
    ),
    size,
  );
}
