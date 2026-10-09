import Link from 'next/link';
import Image from 'next/image';
import { Mascote } from '@/components/mascote/Mascote';

export function SobreBody() {
  return (
    <main id="conteudo" style={{ fontFamily: "var(--font-space-grotesk),system-ui,sans-serif", color: "#101014", background: "#fafafc" }}>
      <section style={{ padding: "clamp(112px,12vw,150px) clamp(20px,5vw,80px) clamp(48px,6vw,80px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(32px,4vw,64px)", alignItems: "flex-start" }}>
          <aside style={{ position: "sticky", top: "104px", display: "flex", flexDirection: "column", gap: "22px", padding: "clamp(24px,2.4vw,32px)", borderRadius: "24px", background: "#eceaff", minWidth: "0", flex: "1 1 280px", boxSizing: "border-box" }}>
            <Link href="/#sobre" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "500", color: "#4a4370", alignSelf: "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Início
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "6px" }}>
              <h1 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(36px,3.4vw,52px)", lineHeight: ".95", letterSpacing: "-.05em" }}>
                Eric Luz
              </h1>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "#2a1fb3" }}>
                Product Designer · 8+ anos
              </span>
            </div>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#2f2a52", textWrap: "pretty" }}>
              Passei por design de produto para clientes locais e GovTech em escala municipal. Hoje conduzo produto SaaS do discovery ao código.
            </p>
            <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(42,31,179,.16)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "14px" }}>
                <span style={{ color: "#4a4370" }}>
                  Atual
                </span>
                <span style={{ fontWeight: "600", textAlign: "right" }}>
                  Fraktal Softwares
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "14px" }}>
                <span style={{ color: "#4a4370" }}>
                  Formação
                </span>
                <span style={{ fontWeight: "600", textAlign: "right" }}>
                  Design Gráfico · UX
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Link href="/#contato" className="hv-5de9a7" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 18px", borderRadius: "999px", background: "#101014", color: "#fff", fontSize: "14px", fontWeight: "600" }}>
                Contato
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </Link>
              <a href="/cv-eric-luz.pdf" download className="hv-84f2c9" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 18px", borderRadius: "999px", background: "#fff", color: "#101014", fontSize: "14px", fontWeight: "600" }}>
                Baixar CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </aside>
          <div style={{ flex: "999 1 440px", display: "flex", flexDirection: "column", gap: "clamp(40px,4.4vw,64px)", minWidth: "0" }}>
            <section id="carreira" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", position: "relative", paddingBottom: "14px", borderBottom: "1px solid #101014" }}>
                <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "clamp(20px,1.6vw,24px)", letterSpacing: "-.02em" }}>
                  Carreira
                </h2>
                <div style={{ position: "absolute", right: "48px", bottom: "0" }}>
                  <Mascote mode="work" size={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", color: "#4030ff", fontVariantNumeric: "tabular-nums" }}>
                  01
                </span>
              </div>
              <article id="c-fraktal" style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "22px 0", borderBottom: "1px solid #e1e1e6", scrollMarginTop: "110px" }}>
                <div style={{ flex: "0 0 132px", display: "flex", flexDirection: "column", gap: "6px", paddingTop: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: "#101014" }}>
                    2025 — hoje
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase", color: "#4030ff" }}>
                    <span aria-hidden="true" style={{ display: 'block', width: 10, height: 10, borderRadius: '50%', background: '#6929ff', animation: 'elPulse 1.8s ease-out infinite' }} />
                    Atual
                  </span>
                </div>
                <div style={{ flex: "1 1 300px", display: "flex", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fff", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "5px" }}>
                    <Image sizes="96px" src="/assets/logos/fraktal.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} width={400} height={400} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
                      <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "17px", letterSpacing: "-.01em" }}>
                        Product Designer
                      </h3>
                      <span style={{ fontSize: "15px", color: "#5d5d63" }}>
                        Fraktal Softwares · Remoto
                      </span>
                    </div>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty", maxWidth: "72ch" }}>
                      Ciclo completo de produto em SaaS: discovery, pesquisa com clientes e protótipos de alta fidelidade. Levo interfaces aprovadas ao front-end com Cursor e Claude, no lugar do handoff tradicional.
                    </p>
                  </div>
                </div>
              </article>
              <article id="c-a3" style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "22px 0", borderBottom: "1px solid #e1e1e6", scrollMarginTop: "110px" }}>
                <div style={{ flex: "0 0 132px", display: "flex", flexDirection: "column", gap: "6px", paddingTop: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: "#101014" }}>
                    2024 — 2026
                  </span>
                </div>
                <div style={{ flex: "1 1 300px", display: "flex", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#000", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/a3.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={400} height={400} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
                      <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "17px", letterSpacing: "-.01em" }}>
                        Product Designer · UX/UI
                      </h3>
                      <span style={{ fontSize: "15px", color: "#5d5d63" }}>
                        A&3 Tecnologia · Boa Vista
                      </span>
                    </div>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty", maxWidth: "72ch" }}>
                      Design de produtos GovTech de ponta a ponta, da visão às regras de negócio, com discovery, validação e acompanhamento do desenvolvimento. Representei a empresa na Smart City Curitiba 2024.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                      <Link href="/#projetos" className="hv-5de9a7" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                        SIABES
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </Link>
                      <Link href="/cases/e-matriculas" className="hv-5de9a7" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                        e-Matrículas
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
              <article id="c-pmbv" style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "22px 0", borderBottom: "1px solid #e1e1e6", scrollMarginTop: "110px" }}>
                <div style={{ flex: "0 0 132px", display: "flex", flexDirection: "column", gap: "6px", paddingTop: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: "#101014" }}>
                    2023 — 2024
                  </span>
                </div>
                <div style={{ flex: "1 1 300px", display: "flex", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fff", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "4px" }}>
                    <Image sizes="96px" src="/assets/logos/pmbv.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} width={400} height={400} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
                      <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "17px", letterSpacing: "-.01em" }}>
                        Instrutor e Mentor de Product Design
                      </h3>
                      <span style={{ fontSize: "15px", color: "#5d5d63" }}>
                        Prefeitura de Boa Vista
                      </span>
                    </div>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty", maxWidth: "72ch" }}>
                      Mentoria no Projeto Crescer: capacitei jovens em Product Ownership e análise estratégica, com inserção profissional de diversos participantes.
                    </p>
                  </div>
                </div>
              </article>
              <article id="c-masterw" style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "22px 0", borderBottom: "1px solid #e1e1e6", scrollMarginTop: "110px" }}>
                <div style={{ flex: "0 0 132px", display: "flex", flexDirection: "column", gap: "6px", paddingTop: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: "#101014" }}>
                    2018 — 2022
                  </span>
                </div>
                <div style={{ flex: "1 1 300px", display: "flex", gap: "16px", alignItems: "flex-start", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#000", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/masterw.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={640} height={640} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
                      <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "17px", letterSpacing: "-.01em" }}>
                        Product Design
                      </h3>
                      <span style={{ fontSize: "15px", color: "#5d5d63" }}>
                        Master W · Remoto
                      </span>
                    </div>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty", maxWidth: "72ch" }}>
                      Design de produto para Master W Informática e Master W Saúde: discovery, análise de viabilidade, protótipos e testes de usabilidade em campo.
                    </p>
                  </div>
                </div>
              </article>
            </section>
            <section id="formacao" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #101014" }}>
                <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "clamp(20px,1.6vw,24px)", letterSpacing: "-.02em" }}>
                  Formação e certificações
                </h2>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", color: "#4030ff", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", columnGap: "32px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Especialização em UX
                      <span title="Destaque" aria-label="Destaque" style={{ display: "inline-grid", placeItems: "center", flexShrink: "0", color: "#f5a400" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                        </svg>
                      </span>
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · 2024 – 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      UI PRO
                      <span title="Destaque" aria-label="Destaque" style={{ display: "inline-grid", placeItems: "center", flexShrink: "0", color: "#f5a400" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                        </svg>
                      </span>
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · mar 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fff", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "6px" }}>
                    <Image sizes="96px" src="/assets/logos/unifatecie.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} width={144} height={144} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Tecnólogo em Design Gráfico
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      UniFatecie · 2024 – 2027
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      UX Research
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · jan 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      UX Writing
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · jan 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      User Experience Interface III
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · abr 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      User Interface Design II
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · out 2024
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      UI & Métricas em Design
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · dez 2024
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Criação e Entrega
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · abr 2024
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Modelagem 3D
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · mar 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ffe01b", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/designcircuit.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Social Media + Figma
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Design Circuit · fev 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#101014", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/aicb-white.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={495} height={150} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Formação AI Creative Builders
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Lucas Marte · dez 2025
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#0b0718", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "0" }}>
                    <Image sizes="96px" src="/assets/logos/mf-mark.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={200} height={200} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Formação Mundo Figma
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Bruninho.dsg · nov 2022
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e1e1e6", minWidth: "0" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fff", border: "1px solid rgba(16,16,20,.08)", display: "grid", placeItems: "center", flexShrink: "0", overflow: "hidden", boxSizing: "border-box", padding: "6px" }}>
                    <Image sizes="96px" src="/assets/logos/udemy.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} width={176} height={192} />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600" }}>
                      Gestão de Produto
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                      Udemy · out 2025
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section id="ferramentas" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #101014" }}>
                <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "600", fontSize: "clamp(20px,1.6vw,24px)", letterSpacing: "-.02em" }}>
                  Ferramentas
                </h2>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", color: "#4030ff", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px", padding: "20px 0", borderBottom: "1px solid #e1e1e6" }}>
                <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>
                    <span style={{ color: "#4030ff", fontVariantNumeric: "tabular-nums", marginRight: "8px" }}>
                      01
                    </span>
                    Design
                  </span>
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#6b6b72", textWrap: "pretty" }}>
                    Interface, identidade visual, prototipação e experiências digitais.
                  </span>
                </div>
                <div style={{ flex: "999 1 340px", display: "flex", flexWrap: "wrap", gap: "6px", alignContent: "start", minWidth: "0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/figma.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Figma
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/framer.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Framer
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#001e36", color: "#31a8ff", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700" }}>
                      Ps
                    </span>
                    Photoshop
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#330000", color: "#ff9a00", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700" }}>
                      Ai
                    </span>
                    Illustrator
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px", padding: "20px 0", borderBottom: "1px solid #e1e1e6" }}>
                <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>
                    <span style={{ color: "#4030ff", fontVariantNumeric: "tabular-nums", marginRight: "8px" }}>
                      02
                    </span>
                    Produto & Time
                  </span>
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#6b6b72", textWrap: "pretty" }}>
                    Gestão de projetos, documentação, colaboração e organização.
                  </span>
                </div>
                <div style={{ flex: "999 1 340px", display: "flex", flexWrap: "wrap", gap: "6px", alignContent: "start", minWidth: "0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/jira.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Jira
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/confluence.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Confluence
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/notion.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Notion
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/clickup.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    ClickUp
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/googlemeet.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Google Meet
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/googlecalendar.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Google Calendar
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px", padding: "20px 0", borderBottom: "1px solid #e1e1e6" }}>
                <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>
                    <span style={{ color: "#4030ff", fontVariantNumeric: "tabular-nums", marginRight: "8px" }}>
                      03
                    </span>
                    IA & Código
                  </span>
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#6b6b72", textWrap: "pretty" }}>
                    Inteligência artificial, desenvolvimento, infraestrutura e implementação.
                  </span>
                </div>
                <div style={{ flex: "999 1 340px", display: "flex", flexWrap: "wrap", gap: "6px", alignContent: "start", minWidth: "0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    <span aria-hidden="true" style={{ display: "block", width: "18px", height: "18px", background: "#10A37F", WebkitMask: "url(/icons/openai.svg) center/contain no-repeat", mask: "url(/icons/openai.svg) center/contain no-repeat" }}></span>
                    ChatGPT
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    <span aria-hidden="true" style={{ display: "block", width: "18px", height: "18px", background: "#101014", WebkitMask: "url(/icons/openai.svg) center/contain no-repeat", mask: "url(/icons/openai.svg) center/contain no-repeat" }}></span>
                    OpenAI Codex
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/claude.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Claude
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/googlegemini.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Gemini
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    <span style={{ color: "#4285F4", display: "block" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      </svg>
                    </span>
                    Antigravity
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/cursor.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Cursor
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    <span aria-hidden="true" style={{ display: "block", width: "18px", height: "18px", background: "#007ACC", WebkitMask: "url(/icons/visualstudiocode.svg) center/contain no-repeat", mask: "url(/icons/visualstudiocode.svg) center/contain no-repeat" }}></span>
                    VS Code
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/supabase.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Supabase
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/vercel.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Vercel
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "10px", background: "#fff", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/hostinger.svg" alt="" width="18" height="18" style={{ display: "block" }} />
                    Hostinger
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {" "}
      <footer style={{ padding: "0 clamp(20px,5vw,80px) 32px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", paddingTop: "24px", borderTop: "1px solid #dcdce2", fontSize: "14px", color: "#5d5d63" }}>
          <span>
            © 2026 Eric Luz · Product Designer
          </span>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/#projetos" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              {"Projetos "}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
            <Link href="/exploracoes" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              {"Blog "}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
