import Link from 'next/link';
import Image from 'next/image';

export function ProjetosGrid() {
  return (
    <section id="projetos" style={{ background: "#fafafc", padding: "clamp(48px,6vw,96px) clamp(20px,5vw,80px) clamp(80px,10vw,150px)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,4.5vw,64px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "0" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                02
              </span>
              Projetos
            </span>
            <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(40px,4.8vw,76px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
              {"Casos "}
              <span style={{ background: "linear-gradient(90deg,#1239ff,#6929ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                selecionados
              </span>
            </h2>
          </div>
          <p style={{ margin: "0", maxWidth: "56ch", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
            Produtos de alta complexidade, do problema à implementação. Cada case mostra o contexto, a decisão e o resultado.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", columnGap: "clamp(16px,1.6vw,28px)", rowGap: "0" }}>
          <Link href="/cases/siagres" className="hv-563089" style={{ cursor: "pointer", minWidth: "0", display: "grid", gridRow: "span 4", gridTemplateRows: "subgrid", rowGap: "18px", alignContent: "start", background: "#e3f2e7", borderRadius: "32px", padding: "clamp(12px,1.2vw,16px) clamp(12px,1.2vw,16px) clamp(20px,2vw,28px)", marginBottom: "clamp(16px,1.6vw,28px)", color: "#101014", transition: "background .25s" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "22px", overflow: "hidden", background: "linear-gradient(135deg,#0a4a24 0%,#0b6b32 55%,#2f9a55 100%)" }}>
              <Image src="/assets/siag-detalhe.webp" loading="lazy" alt="Detalhamento de MTR no SIAGRES" style={{ position: "absolute", left: "10%", top: "16%", width: "110%", height: "auto", maxWidth: "none", display: "block", borderRadius: "10px 0 0 0", boxShadow: "0 20px 40px rgba(4,30,14,.3)" }} width={1440} height={1352} />
            </div>
            <h3 style={{ margin: "0 clamp(6px,1vw,14px)", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(21px,1.6vw,26px)", lineHeight: "1.15", letterSpacing: "-.025em", textWrap: "balance" }}>
              SIAGRES: uma operação regulada transformada em experiência digital
            </h3>
            <p style={{ margin: "0", padding: "0 clamp(6px,1vw,14px)", fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
              Estudei um domínio que eu não conhecia, das normas ao trabalho em campo, para estruturar a emissão e o acompanhamento de MTRs entre gerador, transportador e destinador.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", borderTop: "1px solid rgba(16,16,20,.14)", margin: "0 clamp(6px,1vw,14px)", alignSelf: "end" }}>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontWeight: "600", fontSize: "clamp(22px,1.7vw,28px)", letterSpacing: "-.03em", lineHeight: "1" }}>
                  Lançado
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  web e mobile · prefeitura
                </span>
              </span>
              <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#101014", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </div>
          </Link>
          <Link href="/cases/e-matriculas" className="hv-5110b7" style={{ cursor: "pointer", minWidth: "0", display: "grid", gridRow: "span 4", gridTemplateRows: "subgrid", rowGap: "18px", alignContent: "start", background: "#dcf3f0", borderRadius: "32px", padding: "clamp(12px,1.2vw,16px) clamp(12px,1.2vw,16px) clamp(20px,2vw,28px)", marginBottom: "clamp(16px,1.6vw,28px)", color: "#101014", transition: "background .25s" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "22px", overflow: "hidden", background: "linear-gradient(135deg,#0e7c86 0%,#14a3a8 55%,#5fd0c4 100%)" }}>
              <Image src="/assets/case-ematriculas-phones.webp" loading="lazy" alt="Telas do app e-Matrículas em dois iPhones" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transform: "scale(1.45)", transformOrigin: "center 4%" }} width={2400} height={1800} />
            </div>
            <h3 style={{ margin: "0 clamp(6px,1vw,14px)", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(21px,1.6vw,26px)", lineHeight: "1.15", letterSpacing: "-.025em", textWrap: "balance" }}>
              e-Matrículas: inscrição escolar sem filas
            </h3>
            <p style={{ margin: "0", padding: "0 clamp(6px,1vw,14px)", fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
              Liderei a digitalização completa da matrícula, com fluxos de inscrição, alocação e gestão escolar para responsáveis e administração central.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", borderTop: "1px solid rgba(16,16,20,.14)", margin: "0 clamp(6px,1vw,14px)", alignSelf: "end" }}>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontWeight: "600", fontSize: "clamp(22px,1.7vw,28px)", letterSpacing: "-.03em", lineHeight: "1" }}>
                  +50 mil
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  acessos simultâneos no pico
                </span>
              </span>
              <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#101014", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </div>
          </Link>
          <Link href="/cases/eventure" className="hv-5830a2" style={{ cursor: "pointer", minWidth: "0", display: "grid", gridRow: "span 4", gridTemplateRows: "subgrid", rowGap: "18px", alignContent: "start", background: "#ece6ff", borderRadius: "32px", padding: "clamp(12px,1.2vw,16px) clamp(12px,1.2vw,16px) clamp(20px,2vw,28px)", marginBottom: "clamp(16px,1.6vw,28px)", color: "#101014", transition: "background .25s" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "22px", overflow: "hidden", background: "linear-gradient(135deg,#3a12b8 0%,#5b21e6 55%,#8b5cf6 100%)" }}>
              <Image src="/assets/case-eventure.webp" loading="lazy" alt="Telas do app Eventure em três iPhones: ingressos, evento e QR code" style={{ position: "absolute", left: "50%", top: "16%", transform: "translateX(-50%)", width: "100%", maxWidth: "none", height: "auto", display: "block" }} width={1600} height={1200} />
            </div>
            <h3 style={{ margin: "0 clamp(6px,1vw,14px)", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(21px,1.6vw,26px)", lineHeight: "1.15", letterSpacing: "-.025em", textWrap: "balance" }}>
              Eventure: a agenda cultural da cidade em um app
            </h3>
            <p style={{ margin: "0", padding: "0 clamp(6px,1vw,14px)", fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
              Gestão e divulgação de eventos locais com foco em comunidade. Você descobre onde tem evento e quem vai, compra o ingresso e acompanha tudo pelo app.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", borderTop: "1px solid rgba(16,16,20,.14)", margin: "0 clamp(6px,1vw,14px)", alignSelf: "end" }}>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontWeight: "600", fontSize: "clamp(22px,1.7vw,28px)", letterSpacing: "-.03em", lineHeight: "1" }}>
                  +500
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  eventos locais publicados
                </span>
              </span>
              <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#101014", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
