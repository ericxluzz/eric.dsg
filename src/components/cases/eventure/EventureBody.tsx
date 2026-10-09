'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Mascote } from '@/components/mascote/Mascote';
import { useEventure } from './useEventure';

export function EventureBody() {
  const { tab_inicio, bg_inicio, fg_inicio, op_inicio, on_inicio, tab_eventos, bg_eventos, fg_eventos, op_eventos, on_eventos, tab_ingressos, bg_ingressos, fg_ingressos, op_ingressos, on_ingressos, tab_financeiro, bg_financeiro, fg_financeiro, op_financeiro, on_financeiro } = useEventure();
  return (
    <main id="conteudo" style={{ fontFamily: "var(--font-space-grotesk),system-ui,sans-serif", color: "#101014", background: "#fafafc", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(112px,12vw,170px) clamp(18px,5vw,80px) clamp(32px,4vw,56px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,3.6vw,48px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(18px,2vw,24px)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ width: "8px", height: "8px", margin: "0 4px 0 9px", borderRadius: "50%", background: "#4030ff", display: "block" }}></span>
              Case · Startup · Boa Vista, RR
            </span>
            <h1 style={{ margin: "0", display: "flex", alignItems: "center", gap: "clamp(12px,1.4vw,20px)", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(48px,7vw,112px)", lineHeight: ".9", letterSpacing: "-.055em" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/eventure-icon.svg" alt="" style={{ width: "clamp(44px,5.4vw,88px)", height: "auto", display: "block" }} />
              Eventure
            </h1>
            <p style={{ margin: "0", maxWidth: "980px", fontSize: "clamp(20px,2vw,30px)", lineHeight: "1.3", letterSpacing: "-.02em", color: "#3a3a40", textWrap: "pretty" }}>
              {"A cidade acontece. Uma agenda local que conecta pessoas a eventos e dá aos organizadores "}
              <span style={{ color: "#101014", fontWeight: "500" }}>
                ferramentas para divulgar, acompanhar e gerenciar.
              </span>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,210px),1fr))", gap: "20px 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Meu papel
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Gestão de produto, UX/UI, pesquisa e testes
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Empresa
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                VEDEX Tecnologia · startup
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Plataformas
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Web e app público, painel web e app mobile do gestor
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Públicos
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Quem busca eventos, organizadores e equipes de entrada
              </span>
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: "clamp(18px,2.4vw,32px)", overflow: "hidden", background: "linear-gradient(135deg,#6d28ff 0%,#8b5cf6 100%)", aspectRatio: "2.1/1", maxHeight: "640px" }}>
            <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/eventure-phones.webp" alt="Telas do app Eventure: login, início com eventos próximos e detalhe de evento" style={{ position: "absolute", left: "50%", top: "56%", transform: "translate(-50%,-50%)", height: "112%", width: "auto", maxWidth: "none", display: "block" }} width={1800} height={1350} />
          </div>
        </div>
      </section>
      {" "}
      <section id="oportunidade" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
                Oportunidade
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Nem todo evento tem ingresso. Todo evento merece ser descoberto.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              Plataformas de eventos costumam seguir a lógica da bilheteria. Mas shows gratuitos, encontros de comunidade e jogos universitários também fazem a vida da cidade, e suas informações ficavam espalhadas.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#f4f4f6", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b72" }}>
                Lógica de bilheteria
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4", color: "#3a3a40" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e1e1e6", color: "#5d5d63", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  O evento só aparece se vende ingresso
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4", color: "#3a3a40" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e1e1e6", color: "#5d5d63", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  A compra é o centro da experiência
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4", color: "#3a3a40" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e1e1e6", color: "#5d5d63", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  Programação gratuita fica de fora
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#6d28ff", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#ece6ff" }}>
                Proposta do Eventure
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,.24)", fontSize: "16px", lineHeight: "1.4", color: "#fff" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fff", color: "#5b16e0", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Gratuitos e pagos na mesma agenda local
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,.24)", fontSize: "16px", lineHeight: "1.4", color: "#fff" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fff", color: "#5b16e0", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Descoberta por localização, data e categoria
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,.24)", fontSize: "16px", lineHeight: "1.4", color: "#fff" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fff", color: "#5b16e0", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Divulgação sem custo para o organizador
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(24px,3vw,40px)", borderRadius: "24px", background: "#efe9ff" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5b16e0" }}>
              A pergunta da VEDEX
            </span>
            <p style={{ margin: "0", maxWidth: "52ch", fontSize: "clamp(22px,2.2vw,32px)", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-.03em", color: "#101014", textWrap: "balance" }}>
              Como facilitar a descoberta de tudo que acontece perto de uma pessoa e, ao mesmo tempo, ser útil para quem organiza?
            </p>
          </div>
        </div>
      </section>
      {" "}
      <section id="ecossistema" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
                Ecossistema
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Uma experiência de descoberta para o público. Uma operação completa para quem organiza.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              O Eventure não era uma interface só. Eram três ambientes ligados pelo mesmo ciclo de vida do evento.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "12px" }}>
            <article style={{ display: "flex", flexDirection: "column", borderRadius: "24px", overflow: "hidden", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#ffd84a" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/eventure-web.webp" loading="lazy" alt="Home web do Eventure" style={{ position: "absolute", left: "8%", top: "12%", width: "100%", height: "auto", borderRadius: "10px 0 0 0", display: "block" }} width={1232} height={2576} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "clamp(18px,2vw,24px)" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5b16e0" }}>
                  Público · Web e app
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                  Descobrir e participar
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                  Explorar por localização e categoria, ver detalhes, confirmar presença e comprar ingresso quando houver.
                </span>
              </div>
            </article>
            <article style={{ display: "flex", flexDirection: "column", borderRadius: "24px", overflow: "hidden", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#efe9ff" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-g-inicio.webp" loading="lazy" alt="Painel web do gestor" style={{ position: "absolute", left: "8%", top: "12%", width: "110%", height: "auto", borderRadius: "10px 0 0 0", display: "block" }} width={1720} height={1112} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "clamp(18px,2vw,24px)" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5b16e0" }}>
                  Gestor · Painel web
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                  Publicar e acompanhar
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                  Cadastrar eventos, regras e ingressos, acompanhar o interesse do público e as vendas.
                </span>
              </div>
            </article>
            <article style={{ display: "flex", flexDirection: "column", borderRadius: "24px", overflow: "hidden", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#8b5cf6" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-m-inicio.webp" loading="lazy" alt="App mobile do gestor" style={{ position: "absolute", left: "50%", top: "12%", transform: "translateX(-50%)", width: "44%", height: "auto", borderRadius: "18px", display: "block" }} width={786} height={1704} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "clamp(18px,2vw,24px)" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5b16e0" }}>
                  Gestor · App mobile
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                  Acompanhar e validar
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                  Acompanhar receita e ingressos ao vivo e validar a entrada pelo QR Code.
                </span>
              </div>
            </article>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "clamp(20px,2.6vw,32px)", borderRadius: "24px", background: "#6d28ff", color: "#fff" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 24px" }}>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "600", letterSpacing: "-.02em" }}>
                Ciclo de vida do evento
              </span>
              <span style={{ fontSize: "14px", color: "#ece6ff" }}>
                Etapas tracejadas: só em eventos com ingresso
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))", gap: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#fff", color: "#101014" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#5b16e0", fontVariantNumeric: "tabular-nums" }}>
                  01
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Publicação
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  Gestor
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#fff", color: "#101014" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#5b16e0", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Descoberta
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  Público
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#fff", color: "#101014" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#5b16e0", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Interesse
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  Público
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#fff", color: "#101014" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#5b16e0", fontVariantNumeric: "tabular-nums" }}>
                  04
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Participação
                </span>
                <span style={{ fontSize: "13px", color: "#5d5d63" }}>
                  Público
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", border: "1.5px dashed rgba(255,255,255,.7)", color: "#fff" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#ece6ff", fontVariantNumeric: "tabular-nums" }}>
                  05
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Venda
                </span>
                <span style={{ fontSize: "13px", color: "#ece6ff" }}>
                  Com ingresso
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", border: "1.5px dashed rgba(255,255,255,.7)", color: "#fff" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#ece6ff", fontVariantNumeric: "tabular-nums" }}>
                  06
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Validação
                </span>
                <span style={{ fontSize: "13px", color: "#ece6ff" }}>
                  Na entrada
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="desafios" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  04
                </span>
                Desafios
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Quando a regra de negócio é complexa, a interface precisa trazer clareza.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              A complexidade não estava na quantidade de telas, mas nas regras, estados e públicos que precisavam conviver sem confundir.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(12px,1.2vw,18px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#efe9ff", color: "#5b16e0", display: "grid", placeItems: "center", fontSize: "15px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  01
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#efe9ff", color: "#5b16e0", fontSize: "12px", fontWeight: "600" }}>
                  Público
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.25" }}>
                Categorização e descoberta
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Organizar eventos culturais, esportivos, universitários e pagos sem fragmentar a navegação.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#ffe1f6", color: "#a3127f", display: "grid", placeItems: "center", fontSize: "15px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#ffe1f6", color: "#a3127f", fontSize: "12px", fontWeight: "600" }}>
                  Público e gestor
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.25" }}>
                Regras temporais
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Representar o que ainda vai acontecer, o que acontece hoje e o que já terminou.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#e5f5f0", color: "#0b5d63", display: "grid", placeItems: "center", fontSize: "15px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#e5f5f0", color: "#0b5d63", fontSize: "12px", fontWeight: "600" }}>
                  Público
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.25" }}>
                Restrições e privacidade
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Restrição etária, localização e presença de amigos, com permissões e atenção à LGPD.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff4c2", color: "#7a5c00", display: "grid", placeItems: "center", fontSize: "15px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  04
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff4c2", color: "#7a5c00", fontSize: "12px", fontWeight: "600" }}>
                  Gestor
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.25" }}>
                Regras comerciais
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Lotes, limites, pagamentos e divisão de valores (split) compreensíveis na configuração.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#e6eefb", color: "#1f5fa8", display: "grid", placeItems: "center", fontSize: "15px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  05
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#e6eefb", color: "#1f5fa8", fontSize: "12px", fontWeight: "600" }}>
                  Gestor
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.25" }}>
                Indicadores para o organizador
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Mostrar o valor da divulgação gratuita: visualizações, interações, confirmações e vendas.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#feece6", color: "#c2410c", display: "grid", placeItems: "center", fontSize: "15px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  06
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#feece6", color: "#c2410c", fontSize: "12px", fontWeight: "600" }}>
                  Todos
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.25" }}>
                Modelos mentais diferentes
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                O público quer decidir, o gestor quer controlar, a equipe de entrada quer rapidez.
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="atuacao" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", padding: "clamp(22px,2.8vw,36px) clamp(22px,3vw,40px)", borderRadius: "24px", background: "#efe9ff" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1080px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                05
              </span>
              Minha atuação
            </span>
            <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
              Gestão de produto, UX/UI, pesquisa e testes
            </h2>
          </div>
          <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#2f2f35", textWrap: "pretty" }}>
            {"Fui responsável pela gestão do produto e por toda a frente de UX/UI, incluindo pesquisas e testes. "}
            <strong style={{ fontWeight: "600", color: "#101014" }}>
              O time da VEDEX esteve junto em todo o processo
            </strong>
            , com engenharia, integrações e negócio.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
            <span style={{ padding: "7px 13px", borderRadius: "999px", background: "#fff", color: "#101014", fontSize: "14px", fontWeight: "500" }}>
              Gestão de produto
            </span>
            <span style={{ padding: "7px 13px", borderRadius: "999px", background: "#fff", color: "#101014", fontSize: "14px", fontWeight: "500" }}>
              UX/UI
            </span>
            <span style={{ padding: "7px 13px", borderRadius: "999px", background: "#fff", color: "#101014", fontSize: "14px", fontWeight: "500" }}>
              Pesquisa
            </span>
            <span style={{ padding: "7px 13px", borderRadius: "999px", background: "#fff", color: "#101014", fontSize: "14px", fontWeight: "500" }}>
              Testes de usabilidade
            </span>
            <span style={{ padding: "7px 13px", borderRadius: "999px", background: "#fff", color: "#101014", fontSize: "14px", fontWeight: "500" }}>
              Protótipos
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section id="solucoes" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  06
                </span>
                Soluções
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Clareza para quem descobre, controle para quem organiza.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              Quatro decisões que guiaram o produto, do primeiro toque do público à entrada no evento.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,560px),1fr))", gap: "clamp(12px,1.4vw,20px)" }}>
            <article style={{ gridColumn: "1/-1", position: "relative", overflow: "hidden", borderRadius: "clamp(22px,2.4vw,32px)", background: "linear-gradient(135deg,#6d28ff 0%,#8b5cf6 100%)", display: "flex", flexWrap: "wrap", alignItems: "center", minHeight: "clamp(360px,34vw,500px)" }}>
              <div style={{ flex: "1 1 360px", minWidth: "0", padding: "clamp(28px,4vw,56px)", position: "relative", zIndex: "1" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.16)", color: "#fff", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Descoberta antes da transação
                  </span>
                  <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(22px,2vw,32px)", lineHeight: "1.1", letterSpacing: "-.035em", color: "#fff", textWrap: "balance" }}>
                    A primeira pergunta é “o que tem pra fazer?”
                  </h3>
                  <p style={{ margin: "0", maxWidth: "46ch", fontSize: "clamp(15px,1.1vw,17px)", lineHeight: "1.6", color: "#e7defe", textWrap: "pretty" }}>
                    A home parte da localização e das categorias. Eventos próximos e em destaque respondem à pergunta antes de qualquer compra, e eventos gratuitos ganham o mesmo espaço dos pagos.
                  </p>
                </div>
              </div>
              <div style={{ flex: "1.3 1 420px", minWidth: "0", alignSelf: "flex-end", display: "flex", justifyContent: "center", padding: "clamp(24px,3vw,44px) clamp(28px,4vw,64px) 0 clamp(8px,1vw,16px)", boxSizing: "border-box" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-mk-discover.webp" loading="lazy" alt="Home do app com localização e categorias, e detalhe do evento Conexão Musical" style={{ display: "block", width: "100%", maxWidth: "700px", height: "auto", marginBottom: "-4%" }} width={1400} height={1166} />
              </div>
            </article>
            <article style={{ position: "relative", overflow: "hidden", borderRadius: "clamp(22px,2.4vw,32px)", background: "radial-gradient(90% 80% at 80% 100%,#ffc2ee 0%,rgba(255,194,238,0) 60%),#f3e8ff", display: "flex", flexDirection: "column", minHeight: "clamp(460px,38vw,560px)" }}>
              <div style={{ padding: "clamp(26px,3vw,44px) clamp(26px,3vw,44px) 0", position: "relative", zIndex: "1" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#fff", color: "#a3127f", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Presença como sinal social
                  </span>
                  <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(22px,2vw,32px)", lineHeight: "1.1", letterSpacing: "-.035em", color: "#101014", textWrap: "balance" }}>
                    Saber quem vai ajuda a decidir
                  </h3>
                  <p style={{ margin: "0", maxWidth: "46ch", fontSize: "clamp(15px,1.1vw,17px)", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                    No detalhe, data, local e pessoas confirmadas aparecem juntos. Confirmar, compartilhar e seguir o organizador ficam a um toque, respeitando as permissões de privacidade.
                  </p>
                </div>
              </div>
              <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-mk-presence.webp" loading="lazy" alt="Meus eventos e detalhe do Desafio de Natação com 28 pessoas confirmadas" style={{ display: "block", width: "112%", maxWidth: "none", height: "auto", margin: "auto -4% -14% auto" }} width={1400} height={1159} />
            </article>
            <article style={{ position: "relative", overflow: "hidden", borderRadius: "clamp(22px,2.4vw,32px)", background: "#fff", border: "2px solid #ffd84a", display: "flex", flexDirection: "column", minHeight: "clamp(460px,38vw,560px)" }}>
              <div style={{ padding: "clamp(26px,3vw,44px) clamp(26px,3vw,44px) 0", position: "relative", zIndex: "1" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#ffd84a", color: "#3d2e00", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Do ingresso à entrada
                  </span>
                  <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(22px,2vw,32px)", lineHeight: "1.1", letterSpacing: "-.035em", color: "#101014", textWrap: "balance" }}>
                    Um ingresso que se explica sozinho
                  </h3>
                  <p style={{ margin: "0", maxWidth: "46ch", fontSize: "clamp(15px,1.1vw,17px)", lineHeight: "1.6", color: "#3d3420", textWrap: "pretty" }}>
                    Evento, local, horário e tipo de acesso ficam acima do QR Code. Na entrada, a equipe valida a leitura pelo app do gestor e a configuração vira acesso físico.
                  </p>
                </div>
              </div>
              <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-mk-tickets.webp" loading="lazy" alt="Ingressos VIP com QR Code nos temas claro e escuro" style={{ display: "block", width: "108%", maxWidth: "none", height: "auto", margin: "auto -8% -10% auto", WebkitMaskImage: "linear-gradient(to bottom,transparent 0%,#000 18%)", maskImage: "linear-gradient(to bottom,transparent 0%,#000 18%)" }} width={1400} height={1159} />
            </article>
            <article style={{ gridColumn: "1/-1", borderRadius: "clamp(22px,2.4vw,32px)", background: "#efe9ff", padding: "clamp(20px,3vw,40px)", display: "flex", flexDirection: "column", gap: "clamp(18px,2vw,28px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "1080px" }}>
                <div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#fff", color: "#3a0fb0", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Controle para o gestor
                    </span>
                    <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(22px,2vw,32px)", lineHeight: "1.1", letterSpacing: "-.035em", color: "#101014", textWrap: "balance" }}>
                      A complexidade fica no painel, não na vitrine
                    </h3>
                  </div>
                </div>
                <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                  Visão geral, eventos, ingressos e financeiro em um só painel. Lotes, tipos de ingresso, validação e formas de pagamento vivem aqui, sem pesar a experiência de quem só quer descobrir.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <button type="button" role="tab" aria-selected={on_inicio} onClick={tab_inicio} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_inicio, color: fg_inicio }}>
                    Início
                  </button>
                  <button type="button" role="tab" aria-selected={on_eventos} onClick={tab_eventos} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_eventos, color: fg_eventos }}>
                    Eventos
                  </button>
                  <button type="button" role="tab" aria-selected={on_ingressos} onClick={tab_ingressos} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_ingressos, color: fg_ingressos }}>
                    Ingressos
                  </button>
                  <button type="button" role="tab" aria-selected={on_financeiro} onClick={tab_financeiro} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_financeiro, color: fg_financeiro }}>
                    Financeiro
                  </button>
                </div>
                <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #e1e1e6", background: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: "#f4f4f6", borderBottom: "1px solid #e1e1e6" }}>
                    <span style={{ display: "flex", gap: "6px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
                    </span>
                    <span style={{ flex: "1", maxWidth: "320px", padding: "4px 12px", borderRadius: "8px", background: "#fff", fontSize: "12px", color: "#6b6b72" }}>
                      Eventure · Gestor
                    </span>
                  </div>
                  {" "}
                  <div style={{ position: "relative", aspectRatio: "1720/1117" }}>
                    <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-g-inicio.webp" alt="Início do painel do gestor com eventos, confirmados e receita" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", opacity: op_inicio, transition: "opacity .35s ease" }} width={1720} height={1112} />
                    <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-g-eventos.webp" loading="lazy" alt="Lista de eventos do gestor com público, datas e categorias" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", opacity: op_eventos, transition: "opacity .35s ease" }} width={1720} height={1112} />
                    <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-g-ingressos.webp" loading="lazy" alt="Gestão de ingressos públicos, avulsos e não validados" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", opacity: op_ingressos, transition: "opacity .35s ease" }} width={1720} height={1129} />
                    <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-g-financeiro.webp" loading="lazy" alt="Painel financeiro com transações, formas de pagamento e receita por evento" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", opacity: op_financeiro, transition: "opacity .35s ease" }} width={1720} height={1112} />
                  </div>
                </div>
              </div>
            </article>
            <article style={{ gridColumn: "1/-1", borderRadius: "clamp(22px,2.4vw,32px)", background: "linear-gradient(135deg,#6d28ff 0%,#8b5cf6 100%)", padding: "clamp(20px,3vw,40px)", display: "flex", flexDirection: "column", gap: "clamp(18px,2vw,28px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "1080px" }}>
                <div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.16)", color: "#fff", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Gestor no celular
                    </span>
                    <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(22px,2vw,32px)", lineHeight: "1.1", letterSpacing: "-.035em", color: "#fff", textWrap: "balance" }}>
                      No dia do evento, o painel cabe no bolso
                    </h3>
                  </div>
                </div>
                <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#e7defe", textWrap: "pretty" }}>
                  O que está acontecendo agora, a receita entrando por Pix e cartão e os ingressos digitais e avulsos. Validar fica no centro da navegação, a um toque.
                </p>
              </div>
              <div data-m="row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,170px),1fr))", gap: "clamp(12px,1.6vw,24px)", padding: "0" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-m-login.webp" loading="lazy" alt="Login do administrador por CPF e senha" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "393/852", borderRadius: "22px", border: "1px solid rgba(255,255,255,.2)", background: "#fff" }} width={786} height={1704} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Login
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-m-inicio.webp" loading="lazy" alt="Início com evento acontecendo agora, atalhos e últimas transações" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "393/852", borderRadius: "22px", border: "1px solid rgba(255,255,255,.2)", background: "#fff" }} width={786} height={1704} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Início
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-m-financeiro.webp" loading="lazy" alt="Receita do evento e transações por Pix e cartão" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "393/852", borderRadius: "22px", border: "1px solid rgba(255,255,255,.2)", background: "#fff" }} width={786} height={1704} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Financeiro
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-m-ingressos.webp" loading="lazy" alt="Ingressos digitais e avulsos com ação de validar" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "393/852", borderRadius: "22px", border: "1px solid rgba(255,255,255,.2)", background: "#fff" }} width={786} height={1704} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Ingressos
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-m-validados.webp" loading="lazy" alt="Lista de ingressos já validados na entrada" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "393/852", borderRadius: "22px", border: "1px solid rgba(255,255,255,.2)", background: "#fff" }} width={786} height={1704} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Validados
                  </figcaption>
                </figure>
              </div>
            </article>
          </div>
        </div>
      </section>
      {" "}
      <section id="validacao" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  07
                </span>
                Validação
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Testado com quem organiza e com quem participa.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              Conduzi testes ao longo do desenvolvimento. As decisões precisavam fazer sentido para os dois lados, não apenas parecer boas na tela.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#e5f5f0", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#0b5d63" }}>
                Quem organiza
              </span>
              <span style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-.03em", lineHeight: "1.15" }}>
                Gestores de eventos
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.55", color: "#2f2f35", textWrap: "pretty" }}>
                Publicar, configurar ingressos e acompanhar resultados precisava ser claro sem treinamento.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#ffe1f6", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#a3127f" }}>
                Quem participa
              </span>
              <span style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-.03em", lineHeight: "1.15" }}>
                Pessoas da comunidade
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.55", color: "#2f2f35", textWrap: "pretty" }}>
                Encontrar, decidir e chegar ao evento precisava acontecer em poucos toques.
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="aplicacoes" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  08
                </span>
                Aplicações reais
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Um produto da comunidade, aplicado em eventos da própria cidade.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              Dois contextos bem diferentes, cultura e esporte, rodando na mesma plataforma.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(12px,1.4vw,18px)" }}>
            <article style={{ display: "flex", flexDirection: "column", borderRadius: "clamp(22px,2.4vw,32px)", overflow: "hidden", background: "#ffd84a", minWidth: "0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(24px,3vw,40px) clamp(24px,3vw,40px) clamp(20px,2.4vw,28px)" }}>
                <span style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#fff", color: "#5a4300", fontSize: "12px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase" }}>
                  Cultura · Parceria com a Prefeitura
                </span>
                <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(30px,3.2vw,48px)", lineHeight: "1", letterSpacing: "-.045em" }}>
                  Mormaço Cultural
                </h3>
                <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.6", color: "#2f2f35", textWrap: "pretty" }}>
                  Um dos maiores eventos culturais de Boa Vista teve a programação inteira no Eventure. Cada show virou um evento próprio, com horário, local e participantes confirmados, para a comunidade montar a sua agenda do festival.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600", color: "#5a4300" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#5a4300", display: "block" }}></span>
                  Gratuito: o valor estava na descoberta, não na venda
                </span>
              </div>
              <div style={{ margin: "auto 0 0 clamp(24px,3vw,40px)", borderRadius: "16px 0 0 0", overflow: "hidden", border: "1px solid rgba(16,16,20,.12)", borderRight: "0", borderBottom: "0", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", background: "#f4f4f6", borderBottom: "1px solid #e1e1e6" }}>
                  <span style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
                  </span>
                  <span style={{ flex: "1", maxWidth: "260px", padding: "3px 10px", borderRadius: "7px", background: "#fff", fontSize: "11px", color: "#6b6b72" }}>
                    eventure.app.com/home
                  </span>
                </div>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-mormaco-shows.webp" loading="lazy" alt="Shows do Mormaço Cultural cadastrados individualmente no Eventure" style={{ display: "block", width: "100%", height: "auto" }} width={1400} height={794} />
              </div>
            </article>
            <article style={{ display: "flex", flexDirection: "column", borderRadius: "clamp(22px,2.4vw,32px)", overflow: "hidden", background: "#c9f0d9", minWidth: "0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(24px,3vw,40px) clamp(24px,3vw,40px) clamp(20px,2.4vw,28px)" }}>
                <span style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#fff", color: "#0b5d3a", fontSize: "12px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase" }}>
                  Esporte · Parceiro oficial
                </span>
                <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(30px,3.2vw,48px)", lineHeight: "1", letterSpacing: "-.045em" }}>
                  Jogos Internos de Atléticas
                </h3>
                <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.6", color: "#2f2f35", textWrap: "pretty" }}>
                  A Liga das Atléticas de Roraima ganhou uma página de organizador com todos os confrontos de truco, futsal e handebol, com data, horário, local e status de cada jogo. Os resultados saíam em tempo real nas redes.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600", color: "#0b5d3a" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0b5d3a", display: "block" }}></span>
                  O mesmo produto serviu a uma competição em vários dias e modalidades
                </span>
              </div>
              <div style={{ margin: "auto 0 0 clamp(24px,3vw,40px)", borderRadius: "16px 0 0 0", overflow: "hidden", border: "1px solid rgba(16,16,20,.12)", borderRight: "0", borderBottom: "0", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", background: "#f4f4f6", borderBottom: "1px solid #e1e1e6" }}>
                  <span style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
                  </span>
                  <span style={{ flex: "1", maxWidth: "260px", padding: "3px 10px", borderRadius: "7px", background: "#fff", fontSize: "11px", color: "#6b6b72" }}>
                    eventure.app.com/organizador
                  </span>
                </div>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/ev-jia.webp" loading="lazy" alt="Página da Liga das Atléticas de Roraima com os jogos no Eventure" style={{ display: "block", width: "100%", height: "auto" }} width={1160} height={895} />
              </div>
            </article>
          </div>
        </div>
      </section>
      {" "}
      <section id="resultados" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1080px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  09
                </span>
                Resultados
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                Do conceito para eventos reais da cidade.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "100ch", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              Evidências qualitativas do uso do produto.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#6d28ff", color: "#fff" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#ece6ff" }}>
                Divulgação
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Mais de 500 eventos locais publicados na plataforma
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#ffd84a", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5a4300" }}>
                Poder público
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Parceria com a Prefeitura de Boa Vista no Mormaço Cultural
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#efe9ff", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5b16e0" }}>
                Curadoria
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Programação do Mormaço organizada por apresentação
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#c9f0d9", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#0b5d3a" }}>
                Esporte
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Parceria oficial com os Jogos Internos de Atléticas
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#ffe1f6", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#a3127f" }}>
                Alcance
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Uso em contextos culturais, comunitários e esportivos
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#e6eefb", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#1f5fa8" }}>
                Produto
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Ecossistema de descoberta, gestão, ingressos e validação estruturado
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <footer style={{ padding: "0 clamp(20px,5vw,80px) 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Mascote mode="walk" size={3} />
        </div>
        {" "}
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", paddingTop: "24px", borderTop: "1px solid #dcdce2", fontSize: "14px", color: "#5d5d63" }}>
          <span>
            © {new Date().getFullYear()} Eric Luz · Product Designer
          </span>
          <Link href="/#projetos" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            {"Cases completos "}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}
