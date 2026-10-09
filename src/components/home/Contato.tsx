import { Mascote } from '@/components/mascote/Mascote';

export function Contato() {
  return (
    <section id="contato" style={{ background: "#4030ff", color: "#fff", padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px) 32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px clamp(32px,6vw,96px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "0" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "rgba(255,255,255,.16)", color: "#fff", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                03
              </span>
              Contato
            </span>
            <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(40px,5.2vw,84px)", lineHeight: ".95", letterSpacing: "-.05em", textWrap: "balance" }}>
              Tem um produto complexo pela frente?
            </h2>
            <p style={{ margin: "0", maxWidth: "440px", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.6", color: "#e4e1ff", textWrap: "pretty" }}>
              Me conta o desafio. Respondo por WhatsApp, e-mail ou LinkedIn.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(255,255,255,.28)", minWidth: "0" }}>
            <a href="https://wa.me/5595984140592" rel="noopener noreferrer" target="_blank" className="hv-152437" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "clamp(16px,2vw,22px) clamp(4px,1vw,12px)", borderTop: "1px solid rgba(255,255,255,.28)", color: "#fff" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </span>
              <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#d4cfff" }}>
                  WhatsApp
                </span>
                <span style={{ fontSize: "clamp(16px,1.5vw,20px)", fontWeight: "500", letterSpacing: "-.01em", overflowWrap: "anywhere" }}>
                  (95) 98414-0592
                </span>
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: "0" }}>
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="mailto:ericxluzz.dsg@gmail.com" className="hv-152437" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "clamp(16px,2vw,22px) clamp(4px,1vw,12px)", borderTop: "1px solid rgba(255,255,255,.28)", color: "#fff" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </span>
              <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#d4cfff" }}>
                  E-mail
                </span>
                <span style={{ fontSize: "clamp(16px,1.5vw,20px)", fontWeight: "500", letterSpacing: "-.01em", overflowWrap: "anywhere" }}>
                  ericxluzz.dsg@gmail.com
                </span>
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: "0" }}>
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ericxluzzz-dsg/" rel="noopener noreferrer" target="_blank" className="hv-152437" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "clamp(16px,2vw,22px) clamp(4px,1vw,12px)", borderTop: "1px solid rgba(255,255,255,.28)", color: "#fff" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#d4cfff" }}>
                  LinkedIn
                </span>
                <span style={{ fontSize: "clamp(16px,1.5vw,20px)", fontWeight: "500", letterSpacing: "-.01em", overflowWrap: "anywhere" }}>
                  in/ericxluzzz-dsg
                </span>
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: "0" }}>
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="/cv-eric-luz.pdf" download className="hv-152437" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "clamp(16px,2vw,22px) clamp(4px,1vw,12px)", borderTop: "1px solid rgba(255,255,255,.28)", color: "#fff" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8" />
                </svg>
              </span>
              <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#d4cfff" }}>
                  Currículo
                </span>
                <span style={{ fontSize: "clamp(16px,1.5vw,20px)", fontWeight: "500", letterSpacing: "-.01em", overflowWrap: "anywhere" }}>
                  Baixar CV em PDF
                </span>
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: "0" }}>
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
        <div style={{ margin: "0 0 -32px" }}>
          <Mascote mode="walk" size={3} />
        </div>
        <footer style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,.28)", fontSize: "14px", color: "#e4e1ff" }}>
          <span>
            © {new Date().getFullYear()} Eric Luz · Product Designer
          </span>
          <a href="#inicio" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#fff" }}>
            {"Voltar ao topo "}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </footer>
        <p style={{ margin: "20px 0 0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: "12.5px", lineHeight: "1.6", color: "#e4e1ff", textWrap: "pretty" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>
            Desenhado e codado por mim, de ponta a ponta, num processo de Design Engineering: design, interface e animações em Next.js, TypeScript e Tailwind CSS, publicado na Vercel.
          </span>
        </p>
      </div>
    </section>
  );
}
