import Link from 'next/link';
import Image from 'next/image';
import { Mascote } from '@/components/mascote/Mascote';

export function SobreResumo() {
  return (
    <section id="sobre" style={{ background: "#fafafc", padding: "clamp(72px,8vw,120px) clamp(20px,5vw,80px) clamp(48px,5vw,72px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(28px,4vw,72px)", alignItems: "stretch" }}>
        <div style={{ position: "relative", minWidth: "0", minHeight: "340px", borderRadius: "28px", overflow: "hidden" }}>
          <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/sobre-time.webp" loading="lazy" alt="Eric em reunião de produto" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={1448} height={1086} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "0", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                01
              </span>
              Sobre mim
            </span>
            <div style={{ margin: "-120px 0 0" }}>
              <Mascote mode="hi" size={3} />
            </div>
          </div>
          <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(36px,3.6vw,60px)", lineHeight: ".98", letterSpacing: "-.045em", textWrap: "balance" }}>
            {"Meu trabalho é dar "}
            <span style={{ background: "linear-gradient(90deg,#1239ff,#6929ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              clareza
            </span>
            {" ao que é complexo"}
          </h2>
          <p style={{ margin: "0", maxWidth: "52ch", fontSize: "clamp(17px,1.3vw,20px)", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
            Sou Product Designer há mais de 8 anos. Organizo o que está confuso, entendo o que o negócio precisa e o que o usuário espera, e tomo decisões com critério.
          </p>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "8px", borderBottom: "1px solid rgba(16,16,20,.12)" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(16,16,20,.12)" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", flexShrink: "0", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.01em" }}>
                  Do problema ao handoff, e depois dele
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                  Atuo desde o entendimento do problema até a entrega, e sigo junto na implementação.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(16,16,20,.12)" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", flexShrink: "0", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.01em" }}>
                  Produto, negócio e tecnologia desde cedo
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                  Envolvo todo mundo no começo, para que ninguém seja pego de surpresa no meio do caminho.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(16,16,20,.12)" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", flexShrink: "0", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.01em" }}>
                  IA e código no processo
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                  Valido mais rápido, aproximo a interface do código e reduzo o ruído entre o desenhado e o que vai para produção.
                </span>
              </div>
            </div>
          </div>
          <Link href="/sobre" className="hv-5de9a7" style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "14px 22px", borderRadius: "999px", background: "#101014", color: "#fff", fontSize: "15px", fontWeight: "600" }}>
            Ver mais sobre mim
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
