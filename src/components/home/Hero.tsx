import Image from 'next/image';
import { CountUp } from '@/components/motion/CountUp';

export function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", display: "flex", flexWrap: "wrap", minHeight: "100vh", overflow: "hidden", background: "#fafafc" }}>
      <div style={{ position: "relative", flex: "3 1 600px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", padding: "clamp(88px,10vh,120px) 0 0 clamp(20px,5vw,80px)", boxSizing: "border-box", background: "linear-gradient(135deg,#07165c 0%,#1239ff 38%,#4030ff 62%,#6929ff 82%,#8129d9 100%)", color: "#fff" }}>
        <div style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse 42% 55% at 88% 55%,rgba(150,160,255,.55),transparent 70%)" }}></div>
          {" "}
              <div style={{ position: "absolute", width: "78%", aspectRatio: "1", borderRadius: "50%", right: "-22%", top: "8%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)" }}></div>
              {" "}
              <div style={{ position: "absolute", width: "52%", aspectRatio: "1", borderRadius: "50%", right: "-6%", top: "24%", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}></div>
              {" "}
              <div style={{ position: "absolute", width: "120%", aspectRatio: "1", borderRadius: "50%", left: "-60%", bottom: "-78%", border: "1px solid rgba(255,255,255,.12)", background: "rgba(7,22,92,.25)" }}></div>
        </div>
        <div style={{ position: "relative", zIndex: "4", flex: "1 1 340px", maxWidth: "460px", alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", padding: "24px clamp(0px,2vw,24px) 64px 0", boxSizing: "border-box" }}>
          <span style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.35)", background: "rgba(255,255,255,.1)", fontSize: "14px", fontWeight: "500" }}>
            Product Designer
          </span>
              <h1 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(44px,4.8vw,84px)", lineHeight: ".95", letterSpacing: "-.04em", textWrap: "balance" }}>
                Produtos complexos de ponta a ponta
              </h1>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#projetos" className="hv-09a1d1" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 26px", borderRadius: "999px", background: "#fff", color: "#101014", fontWeight: "600", fontSize: "16px", whiteSpace: "nowrap" }}>
              {"Ver meus trabalhos "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="/cv-eric-luz.pdf" download className="hv-a79dd4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.5)", color: "#fff", fontWeight: "500", fontSize: "16px", whiteSpace: "nowrap" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              {" Baixar CV"}
            </a>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://www.linkedin.com/in/ericxluzzz-dsg/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hv-5abf55" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.5)", color: "#fff", display: "grid", placeItems: "center" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:ericxluzz.dsg@gmail.com" aria-label="E-mail" className="hv-5abf55" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.5)", color: "#fff", display: "grid", placeItems: "center" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </a>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: "3", flex: "1 1 380px", minWidth: "0", display: "flex", justifyContent: "center", alignSelf: "flex-end", marginRight: "calc(-1 * clamp(0px,9vw,160px))" }}>
          <Image src="/assets/eric2-cutout.webp" priority sizes="(max-width: 767px) 100vw, 60vw" alt="Eric Luz" style={{ display: "block", height: "clamp(520px,max(94vh,46vw),1080px)", width: "auto", maxWidth: "none", marginTop: "-40px", filter: "drop-shadow(0 20px 40px rgba(7,22,92,.25))", animation: "heroPhotoIn 1.3s cubic-bezier(.2,.7,.2,1) .15s both" }} width={1024} height={1321} />
        </div>
      </div>
      <div style={{ position: "relative", zIndex: "1", flex: "2 1 380px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px", padding: "120px clamp(20px,4vw,72px) 64px clamp(20px,8vw,150px)", boxSizing: "border-box" }}>
        <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 14px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "14px", fontWeight: "600" }}>
          <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: '#4030ff', display: 'block', animation: 'elPulse 1.8s ease-out infinite, elBlink 1.8s ease-in-out infinite' }} />
          Disponível para projetos
        </span>
        <p style={{ margin: "0", fontWeight: "600", fontSize: "clamp(26px,2.4vw,42px)", lineHeight: "1.1", letterSpacing: "-.03em", textWrap: "pretty", maxWidth: "18ch" }}>
          {"Atuo onde design, "}
          <span style={{ background: "linear-gradient(90deg,#1239ff,#6929ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            regra de negócio
          </span>
          {" e engenharia se encontram"}
        </p>
        <p style={{ margin: "0", fontSize: "clamp(16px,1.15vw,19px)", lineHeight: "1.55", color: "#4a4a52", textWrap: "pretty", maxWidth: "42ch" }}>
          Do discovery à entrega: comparo alternativas, decido com dados e acompanho a implementação.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "7px 13px 7px 11px", borderRadius: "999px", border: "1px solid #d4d4d7", fontSize: "14px", fontWeight: "500", color: "#2b2b2d" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z" />
            </svg>
            GovTech
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "7px 13px 7px 11px", borderRadius: "999px", border: "1px solid #d4d4d7", fontSize: "14px", fontWeight: "500", color: "#2b2b2d" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20M6 15h4" />
            </svg>
            Fintech
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "7px 13px 7px 11px", borderRadius: "999px", border: "1px solid #d4d4d7", fontSize: "14px", fontWeight: "500", color: "#2b2b2d" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
            </svg>
            SaaS
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "7px 13px 7px 11px", borderRadius: "999px", border: "1px solid #d4d4d7", fontSize: "14px", fontWeight: "500", color: "#2b2b2d" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <circle cx="17.5" cy="17.5" r="3.5" />
            </svg>
            Design Systems
          </span>
        </div>
            <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", borderTop: "1px solid #101014", maxWidth: "520px" }}>
              <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", padding: "16px 0", borderBottom: "1px solid #e1e1e6" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6929ff" }}>
                    SIABES · GovTech
                  </span>
                  <span style={{ fontSize: "15px", color: "#4a4a52" }}>
                    cidadãos atendidos
                  </span>
                </div>
                <span style={{ whiteSpace: "nowrap", flexShrink: "0", fontWeight: "600", fontSize: "clamp(36px,3.4vw,56px)", letterSpacing: "-.04em", lineHeight: ".9", fontVariantNumeric: "tabular-nums" }}>
                  <CountUp to={150} prefix="+" suffix=" mil" />
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px 16px 0 0", borderRight: "1px solid #e1e1e6" }}>
                <span style={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "clamp(24px,2vw,34px)", letterSpacing: "-.03em", lineHeight: "1", fontVariantNumeric: "tabular-nums" }}>
                  <CountUp to={50} prefix="+" suffix=" mil" />
                </span>
                <span style={{ fontSize: "14px", color: "#4a4a52", lineHeight: "1.35" }}>
                  acessos simultâneos · e-Matrículas
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px 0 0 16px" }}>
                <span style={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "clamp(24px,2vw,34px)", letterSpacing: "-.03em", lineHeight: "1", fontVariantNumeric: "tabular-nums" }}>
                  <CountUp to={8} prefix="+" suffix=" anos" />
                </span>
                <span style={{ fontSize: "14px", color: "#4a4a52", lineHeight: "1.35" }}>
                  de experiência em produto
                </span>
              </div>
            </div>
      </div>
    </section>
  );
}
