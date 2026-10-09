import Link from 'next/link';
import { Mascote } from '@/components/mascote/Mascote';

export function NotFoundBody() {
  return (
    <main id="conteudo" style={{ fontFamily: "var(--font-space-grotesk),system-ui,sans-serif", color: "#101014", background: "#fafafc", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px clamp(20px,5vw,80px)", boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: "880px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "40px" }}>
        <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px", minWidth: "0" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
            <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600" }}>
              404
            </span>
            Página não encontrada
          </span>
          <h1 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(40px,5vw,72px)", lineHeight: ".98", letterSpacing: "-.05em", textWrap: "balance" }}>
            Ainda estou
            <br />
            construindo isso
          </h1>
          <p style={{ margin: "0", maxWidth: "40ch", fontSize: "18px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
            Essa página não existe ou está em produção. Enquanto termino, dá uma olhada no que já está pronto.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Link href="/" className="hv-5de9a7" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 22px", borderRadius: "999px", background: "#101014", color: "#fff", fontWeight: "600", fontSize: "15px" }}>
              Voltar ao início
            </Link>
            <Link href="/exploracoes" className="hv-ccfef3" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 22px", borderRadius: "999px", border: "1px solid #d4d4d7", fontWeight: "600", fontSize: "15px" }}>
              Ver Explorações
            </Link>
          </div>
        </div>
        <div style={{ flex: "0 0 auto", borderBottom: "1px solid #101014" }}>
          <Mascote mode="work" size={7} mobile="show" />
        </div>
      </div>
    </main>
  );
}
