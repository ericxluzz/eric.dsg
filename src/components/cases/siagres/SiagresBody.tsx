'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mascote } from '@/components/mascote/Mascote';
import { useSiagres } from './useSiagres';

export function SiagresBody() {
  const { stageRef, capCad, tab_c1, bg_c1, fg_c1, op_c1, on_c1, tab_c2, bg_c2, fg_c2, op_c2, on_c2, tab_c3, bg_c3, fg_c3, op_c3, on_c3, hl, marks, stepScreen, playLabel, togglePlay, screens, steps } = useSiagres();
  return (
    <main id="conteudo" style={{ fontFamily: "var(--font-space-grotesk),system-ui,sans-serif", color: "#101014", background: "#fafafc", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(112px,12vw,170px) clamp(18px,5vw,80px) clamp(32px,4vw,56px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,3.6vw,48px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(18px,2vw,24px)" }}>
            <Link href="/#projetos" style={{ display: "inline-flex", alignItems: "center", gap: "6px", alignSelf: "flex-start", fontSize: "14px", fontWeight: "500", color: "#5d5d63" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Projetos
            </Link>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ width: "8px", height: "8px", margin: "0 4px 0 9px", borderRadius: "50%", background: "#4030ff", display: "block" }}></span>
              Case · Produto público · Web e mobile
            </span>
            <h1 style={{ margin: "0", display: "flex", alignItems: "center", gap: "clamp(12px,1.4vw,20px)", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(48px,7vw,112px)", lineHeight: ".9", letterSpacing: "-.055em" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/siagres-logo-mark.svg" alt="" style={{ width: "clamp(44px,5.4vw,88px)", height: "auto", display: "block" }} />
              SIAGRES
            </h1>
            <p style={{ margin: "0", maxWidth: "980px", fontSize: "clamp(20px,2vw,30px)", lineHeight: "1.3", letterSpacing: "-.02em", color: "#3a3a40", textWrap: "pretty" }}>
              {"Transformando uma operação regulada em uma experiência digital. "}
              <span style={{ color: "#101014", fontWeight: "500" }}>
                Das normas e do trabalho em campo à estrutura de uma plataforma de gestão de resíduos, acompanhada até a entrega.
              </span>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,210px),1fr))", gap: "20px 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Meu papel
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Product Designer, do discovery à entrega
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Produto
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Sistema Integrado de Apoio à Gestão de Resíduos Sólidos
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Equipe
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Liderança, especialista de campo, dev e QA
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Status
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45" }}>
                Lançado, com boa recepção da prefeitura
              </span>
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: "clamp(18px,2.4vw,32px)", overflow: "hidden", background: "linear-gradient(135deg,#0a4a24 0%,#0b6b32 50%,#2f9a55 100%)", aspectRatio: "2.1/1", maxHeight: "640px" }}>
            <div style={{ position: "absolute", left: "6%", top: "12%", width: "70%", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,.25)", background: "#fff", boxShadow: "0 30px 60px rgba(4,30,14,.35)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", background: "#f4f4f6", borderBottom: "1px solid #e1e1e6" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
              </div>
              {" "}
              <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-detalhe.webp" fetchPriority="high" alt="Detalhamento de um MTR no web: resíduos, ações, participantes e histórico" style={{ display: "block", width: "100%", height: "auto" }} width={1440} height={1352} />
            </div>
            {" "}
            <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lista-transp.webp" fetchPriority="high" alt="App mobile com a lista de MTRs do transportador" style={{ position: "absolute", right: "25%", top: "30%", width: "18%", height: "auto", borderRadius: "clamp(12px,1.7vw,24px)", boxShadow: "0 30px 60px rgba(4,30,14,.4)", display: "block" }} width={780} height={1946} />
            {" "}
            <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lotes-coleta.webp" alt="App mobile com os lotes de resíduo para coletar" style={{ position: "absolute", right: "6%", top: "16%", width: "21%", height: "auto", borderRadius: "clamp(14px,2vw,28px)", boxShadow: "0 30px 60px rgba(4,30,14,.4)", display: "block" }} width={780} height={1962} />
          </div>
        </div>
      </section>
      {" "}
      <section id="contexto" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
                Contexto
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Uma oportunidade de negócio em um domínio que eu ainda não conhecia
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                Aqui o primeiro problema não era a interface: era entender um setor inteiro. Quem participa, quais documentos são exigidos e como a responsabilidade muda a cada etapa.
              </p>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                {"A liderança pediu um estudo do "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  SINIR
                </strong>
                {", o sistema nacional de referência, para criar uma solução própria para prefeituras. O núcleo: emitir e acompanhar os "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  Manifestos de Transporte de Resíduos (MTRs)
                </strong>
                .
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "clamp(22px,3vw,40px)", borderRadius: "24px", background: "#fff", border: "1px solid #e6e6eb" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 24px" }}>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "600", letterSpacing: "-.02em" }}>
                O problema que precisávamos compreender
              </span>
              <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                Síntese didática feita para este case, não um fluxo histórico
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#f0f8f2" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums" }}>
                  01
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Origem
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#5d5d63" }}>
                  Onde o resíduo é gerado
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#f0f8f2" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Transporte
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#5d5d63" }}>
                  Quem coleta e leva o material
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#f0f8f2" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Destino
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#5d5d63" }}>
                  Quem recebe e trata
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "16px", background: "#0b5e2a", color: "#fff" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#c9ecd4", fontVariantNumeric: "tabular-nums" }}>
                  04
                </span>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                  Rastreamento documental
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#dff3e5" }}>
                  O MTR acompanha todas as etapas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="imersao" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
                Imersão
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Primeiro, eu precisava aprender como aquela operação funcionava
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                Juntei três fontes para construir um entendimento confiável e, a partir dele, os primeiros fluxos e a estrutura do sistema.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#e3f2e7", color: "#0b5e2a", display: "grid", placeItems: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8M16 13H8M16 17H8" />
                </svg>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                Documentação de referência
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Mais de 80 páginas do sistema de referência, pela minha lembrança.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#e3f2e7", color: "#0b5e2a", display: "grid", placeItems: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                Legislação e regras
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Por que cada documento existe e quais restrições orientam o produto.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.2vw,26px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#e3f2e7", color: "#0b5e2a", display: "grid", placeItems: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                Conhecimento de campo
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                Conversas com quem conhecia o transporte, para confrontar o papel com a rotina real.
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#f4f4f6", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "6px 16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b72" }}>
                  Cerca de 4 meses
                </span>
                <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                  Estimativa pessoal, não cronograma auditado
                </span>
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ height: "8px", borderRadius: "999px", background: "#0b5e2a", display: "block" }}></span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Estudo do domínio
                  </span>
                  <span style={{ fontSize: "14px", color: "#5d5d63" }}>
                    Primeiros meses
                  </span>
                </div>
                <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ height: "8px", borderRadius: "999px", background: "#7cc596", display: "block" }}></span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Pesquisa e estruturação
                  </span>
                  <span style={{ fontSize: "14px", color: "#5d5d63" }}>
                    Meses seguintes
                  </span>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "clamp(24px,3vw,40px) clamp(110px,10vw,130px) clamp(24px,3vw,40px) clamp(24px,3vw,40px)", borderRadius: "24px", background: "#0b5e2a", minWidth: "0", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "clamp(14px,2vw,28px)", bottom: "0", width: "90px", lineHeight: "0" }}>
                <Mascote mode="work" size={3} />
              </div>
              <p style={{ margin: "0", fontSize: "clamp(22px,2.2vw,30px)", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-.03em", color: "#fff", textWrap: "balance" }}>
                “Antes de desenhar a jornada, precisei entender a operação que existia por trás dela.”
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="linguagem" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  04
                </span>
                Linguagem do setor
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Uma interface não pode ignorar a linguagem de quem trabalha nela
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                Quem opera usa códigos e classificações técnicas, não nomes informais. Pesquisei as referências do setor e organizei essas informações para o cadastro.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "12px", alignItems: "stretch" }}>
            <figure style={{ gridColumn: "span 2", margin: "0", display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(16px,2vw,24px)", borderRadius: "24px", background: "#e3f2e7", minWidth: "0" }}>
              <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(11,94,42,.18)", background: "#fff", aspectRatio: "1000/180" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-cad-03.webp" loading="lazy" alt="Resíduo adicionado ao MTR com código, peso, acondicionamento, classe, estado físico e tratamento" style={{ display: "block", width: "144%", maxWidth: "none", height: "auto", margin: "-61.2% 0 0 -36.2%" }} width={1440} height={1002} />
              </div>
              <figcaption style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontSize: "14px", lineHeight: "1.45", color: "#0a3d1f" }}>
                <span style={{ fontWeight: "600", marginRight: "6px" }}>
                  Recorte do cadastro original:
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff" }}>
                  Código
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff" }}>
                  Peso
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff" }}>
                  Acondicionamento
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff" }}>
                  Classe
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff" }}>
                  Estado físico
                </span>
                <span style={{ padding: "5px 11px", borderRadius: "999px", background: "#fff" }}>
                  Tratamento
                </span>
              </figcaption>
            </figure>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px", padding: "clamp(20px,2.4vw,28px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#e9f0fd", display: "grid", placeItems: "center", flexShrink: "0" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/confluence-blue.svg" alt="Confluence" style={{ width: "24px", height: "24px", display: "block" }} />
            </span>
            <p style={{ flex: "1 1 320px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
              <strong style={{ fontWeight: "600", color: "#101014" }}>
                {"Documentação no "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/confluence-blue.svg" alt="" style={{ width: "1em", height: "1em", display: "inline-block", verticalAlign: "-.15em", marginRight: ".3em" }} />
                Confluence.
              </strong>
              {" Conceitos, regras e processos mapeados, como referência para quem entrasse no projeto e para a implementação."}
            </p>
          </div>
        </div>
      </section>
      {" "}
      <section id="papeis" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  05
                </span>
                Estrutura do produto
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Uma operação, diferentes responsabilidades
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                O desafio era conectar pessoas que agem em momentos diferentes da mesma movimentação, em que cada ação depende da anterior.
              </p>
            </div>
          </div>
          <div data-m="row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "24px", background: "#fff", border: "1px solid #e6e6eb", overflow: "hidden", minWidth: "0" }}>
              <div style={{ height: "200px", background: "#e3f2e7", overflow: "hidden", padding: "20px 20px 0" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-cad-01.webp" loading="lazy" alt="Cadastro do MTR no web" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "left top", borderRadius: "12px 12px 0 0", boxShadow: "0 10px 24px rgba(11,94,42,.18)" }} width={1440} height={978} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 22px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#0b5e2a", color: "#fff", display: "grid", placeItems: "center" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                        <path d="M17 18h1M12 18h1M7 18h1" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                      Gerador
                    </span>
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums" }}>
                    01
                  </span>
                </div>
                <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                  Emite o MTR e descreve o resíduo que vai sair.
                </span>
                <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "999px", background: "#f4f4f6", fontSize: "12px", fontWeight: "600", color: "#5d5d63" }}>
                  Web
                </span>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "24px", background: "#fff", border: "1px solid #e6e6eb", overflow: "hidden", minWidth: "0" }}>
              <div style={{ height: "200px", background: "#e3f2e7", overflow: "hidden", padding: "20px 20px 0" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lotes-coleta.webp" loading="lazy" alt="Lotes para coletar no app" style={{ display: "block", width: "62%", maxWidth: "240px", height: "auto", margin: "0 auto", borderRadius: "18px 18px 0 0", boxShadow: "0 10px 24px rgba(11,94,42,.18)" }} width={780} height={1962} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 22px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#0b5e2a", color: "#fff", display: "grid", placeItems: "center" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                        <path d="M15 18H9" />
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                        <circle cx="17" cy="18" r="2" />
                        <circle cx="7" cy="18" r="2" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                      Transportador
                    </span>
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums" }}>
                    02
                  </span>
                </div>
                <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                  Confirma a participação e registra a coleta.
                </span>
                <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "999px", background: "#f4f4f6", fontSize: "12px", fontWeight: "600", color: "#5d5d63" }}>
                  App
                </span>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "24px", background: "#fff", border: "1px solid #e6e6eb", overflow: "hidden", minWidth: "0" }}>
              <div style={{ height: "200px", background: "#e3f2e7", overflow: "hidden", padding: "20px 20px 0" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lotes-receb.webp" loading="lazy" alt="Lotes para recebimento no app" style={{ display: "block", width: "62%", maxWidth: "240px", height: "auto", margin: "0 auto", borderRadius: "18px 18px 0 0", boxShadow: "0 10px 24px rgba(11,94,42,.18)" }} width={780} height={1908} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 22px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#0b5e2a", color: "#fff", display: "grid", placeItems: "center" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                        <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                        <path d="m14 16-3 3 3 3" />
                        <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                        <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                        <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                      Destinador
                    </span>
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums" }}>
                    03
                  </span>
                </div>
                <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                  Confere o que chegou e confirma o recebimento.
                </span>
                <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "999px", background: "#f4f4f6", fontSize: "12px", fontWeight: "600", color: "#5d5d63" }}>
                  App
                </span>
              </div>
            </div>
          </div>
          <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#3a3a40" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/siagres-logo-mark.svg" alt="" style={{ width: "20px", height: "20px", display: "block" }} />
            O mesmo MTR passa pelos três. Ninguém avança antes do anterior confirmar.
          </p>
        </div>
      </section>
      {" "}
      <section id="fluxo" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  06
                </span>
                Fluxo completo
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Do cadastro ao CDF: o caminho de um MTR
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                Seis momentos em que o documento passa de mão em mão, com a tela real usada em cada um.
              </p>
            </div>
          </div>
          <div ref={stageRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,3.4vw,56px)", alignItems: "start" }}>
            <div role="tablist" aria-label="Etapas do fluxo" style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
              {(steps).map((st, i) => (
                <Fragment key={i}>
                  <button type="button" role="tab" aria-selected={st.on} onClick={st.go} style={{ all: "unset", cursor: "pointer", position: "relative", display: "flex", flexDirection: "column", gap: "10px", padding: "18px 0 18px", borderTop: "1px solid #e1e1e6" }}>
                    <span style={{ position: "absolute", left: "0", top: "-1px", height: "2px", width: st.fill, background: "#0b5e2a", display: "block", transition: st.tr }}></span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                      <span style={{ width: "24px", fontSize: "13px", fontWeight: "600", color: st.nc, fontVariantNumeric: "tabular-nums" }}>
                        {st.n}
                      </span>
                      <span style={{ flex: "1", fontSize: "clamp(18px,1.4vw,21px)", fontWeight: "500", letterSpacing: "-.02em", color: st.fg, transition: "color .3s" }}>
                        {st.title}
                      </span>
                      <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                        {st.actor}
                      </span>
                    </span>
                    {(st.active) && (
                      <>
                        <span style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "40px" }}>
                          <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                            {st.desc}
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#5d5d63" }}>
                            {"Status do MTR "}
                            <span style={{ padding: "3px 10px", borderRadius: "999px", fontWeight: "600", background: st.pillBg, color: st.pillFg }}>
                              {st.pill}
                            </span>
                          </span>
                        </span>
                      </>
                    )}
                  </button>
                </Fragment>
              ))}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "16px", borderTop: "1px solid #e1e1e6" }}>
                <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                  Etapas simplificadas para leitura
                </span>
                <button type="button" onClick={togglePlay} className="hv-50c2b0" style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", border: "1px solid #d4d4d7", fontSize: "14px", fontWeight: "500" }}>
                  {playLabel}
                </button>
              </div>
            </div>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0", position: "sticky", top: "110px" }}>
              <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "clamp(22px,2.4vw,32px)", background: "#e3f2e7", overflow: "hidden" }}>
                {(screens).map((s, i) => (
                  <Fragment key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.alt} loading="lazy" style={{ position: "absolute", left: s.l, top: s.t, width: s.w, height: "auto", display: "block", borderRadius: s.r, boxShadow: "0 24px 48px rgba(10,61,31,.18)", opacity: s.op, transform: `translateY(${s.y})`, transition: "opacity .5s ease,transform .7s cubic-bezier(.2,.7,.2,1)" }} />
                  </Fragment>
                ))}
              </div>
              <figcaption style={{ fontSize: "13px", color: "#6b6b72" }}>
                {stepScreen}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {" "}
      <section id="cadastro" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  07
                </span>
                Cadastro de MTR
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Transformar exigências operacionais em um preenchimento compreensível
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                No web, o cadastro virou quatro etapas: tipo de resíduo, detalhes, logística e observações. A complexidade fica dividida, e o usuário vê o próprio avanço.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "clamp(16px,2.6vw,32px)", borderRadius: "clamp(22px,2.4vw,32px)", background: "#e3f2e7" }}>
            <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              <button type="button" role="tab" aria-selected={on_c1} onClick={tab_c1} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_c1, color: fg_c1 }}>
                1 · Tipo de resíduo
              </button>
              <button type="button" role="tab" aria-selected={on_c2} onClick={tab_c2} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_c2, color: fg_c2 }}>
                2 · Armazenamento temporário
              </button>
              <button type="button" role="tab" aria-selected={on_c3} onClick={tab_c3} style={{ all: "unset", cursor: "pointer", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", background: bg_c3, color: fg_c3 }}>
                2 · Resíduo adicionado
              </button>
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(11,94,42,.18)", background: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#f4f4f6", borderBottom: "1px solid #e1e1e6" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
              </div>
              {" "}
              <div style={{ position: "relative", aspectRatio: "1440/1002", background: "#f4f4f4" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-cad-01.webp" alt="Etapa 1: escolha da categoria do resíduo e do armazenamento temporário" style={{ position: "absolute", inset: "0", width: "100%", height: "auto", display: "block", opacity: op_c1, transition: "opacity .35s ease" }} width={1440} height={978} />
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-cad-02.webp" loading="lazy" alt="Etapa 2 com aviso de no máximo um tipo de resíduo no armazenamento temporário" style={{ position: "absolute", inset: "0", width: "100%", height: "auto", display: "block", opacity: op_c2, transition: "opacity .35s ease" }} width={1440} height={806} />
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-cad-03.webp" loading="lazy" alt="Etapa 2 com um resíduo adicionado e o peso total em relação à capacidade" style={{ position: "absolute", inset: "0", width: "100%", height: "auto", display: "block", opacity: op_c3, transition: "opacity .35s ease" }} width={1440} height={1002} />
              </div>
            </div>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#0a3d1f", textWrap: "pretty" }}>
              {capCad}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "10px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 14px", alignItems: "baseline", padding: "18px 22px", borderRadius: "18px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums", gridRow: "span 2" }}>
                01
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                Sequência da informação
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#5d5d63" }}>
                Categoria antes dos detalhes técnicos.
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 14px", alignItems: "baseline", padding: "18px 22px", borderRadius: "18px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums", gridRow: "span 2" }}>
                02
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                Progresso visível
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#5d5d63" }}>
                O stepper mostra onde a pessoa está.
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 14px", alignItems: "baseline", padding: "18px 22px", borderRadius: "18px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums", gridRow: "span 2" }}>
                03
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                Agrupamento por contexto
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#5d5d63" }}>
                Campos agrupados pelo momento da operação.
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 14px", alignItems: "baseline", padding: "18px 22px", borderRadius: "18px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#0b5e2a", fontVariantNumeric: "tabular-nums", gridRow: "span 2" }}>
                04
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em" }}>
                A regra aparece na hora
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#5d5d63" }}>
                O aviso aparece antes do erro.
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="acompanhamento" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  08
                </span>
                Acompanhamento
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                O MTR precisava continuar compreensível depois de criado
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                O detalhamento reúne manifesto, resíduos e participantes, para que cada responsável entenda o estado atual e aja no momento certo.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(16px,2vw,28px)", alignItems: "start" }}>
            <div style={{ gridColumn: "1 / -1", minWidth: "0", borderRadius: "16px", overflow: "hidden", border: "1px solid #e1e1e6", background: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#f4f4f6", borderBottom: "1px solid #e1e1e6" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
              </div>
              {" "}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-detalhe.webp" loading="lazy" alt="Detalhamento do MTR com resíduos, ações, gerador, transportador, destinador e histórico" style={{ display: "block", width: "100%", height: "auto" }} width={1440} height={1352} />
                {" "}
                <span style={{ position: "absolute", left: hl.l, top: hl.t, width: hl.w, height: hl.h, border: "2px solid #4030ff", borderRadius: "10px", boxShadow: "0 0 0 2000px rgba(16,16,20,.38)", transition: "left .55s cubic-bezier(.2,.7,.2,1),top .55s cubic-bezier(.2,.7,.2,1),width .55s cubic-bezier(.2,.7,.2,1),height .55s cubic-bezier(.2,.7,.2,1)", pointerEvents: "none", display: "block" }}>
                  <span style={{ position: "absolute", left: "-2px", top: "-30px", padding: "4px 10px", borderRadius: "8px 8px 8px 0", background: "#4030ff", color: "#fff", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>
                    {hl.label}
                  </span>
                </span>
              </div>
            </div>
            <ol style={{ gridColumn: "1 / -1", listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "0 20px", minWidth: "0" }}>
              {(marks).map((m, i) => (
                <Fragment key={i}>
                  <li style={{ borderTop: "1px solid #e1e1e6" }}>
                    <button type="button" onClick={m.go} onMouseEnter={m.go} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", width: "100%", display: "flex", gap: "14px", padding: "14px 0" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: m.bg, color: m.fg, display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", flexShrink: "0", transition: "background .3s,color .3s" }}>
                        {m.n}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "16px", fontWeight: "600", color: m.tc, transition: "color .3s" }}>
                          {m.t}
                        </span>
                        <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#5d5d63" }}>
                          {m.d}
                        </span>
                      </span>
                    </button>
                  </li>
                </Fragment>
              ))}
              <li style={{ paddingTop: "12px", borderTop: "1px solid #e1e1e6", fontSize: "13px", color: "#6b6b72" }}>
                Dados pessoais desfocados nas capturas.
              </li>
            </ol>
          </div>
        </div>
      </section>
      {" "}
      <section id="mobile" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  09
                </span>
                Mobile e confirmações
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Cada responsável atua no seu momento
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                No app, o mesmo MTR aparece para quem coleta e para quem recebe. A ação principal muda conforme o papel e o estado do documento.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)", padding: "clamp(20px,3vw,40px)", borderRadius: "clamp(22px,2.4vw,32px)", background: "linear-gradient(135deg,#0a4a24 0%,#0b6b32 55%,#2f9a55 100%)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#c9ecd4" }}>
                Listagem por perfil
              </span>
              <div data-m="row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "clamp(12px,1.6vw,24px)" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lista-transp.webp" loading="lazy" alt="Meus MTRs na visão do transportador" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1946} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Meus MTRs · Transportador
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lista-dest.webp" loading="lazy" alt="Meus MTRs na visão do destinador" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1946} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Meus MTRs · Destinador
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lotes-coleta.webp" loading="lazy" alt="Lotes para coletar com divergência de peso sinalizada" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1962} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Lotes para coletar
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-lotes-receb.webp" loading="lazy" alt="Lotes para recebimento com divergência de peso sinalizada" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1908} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Lotes para recebimento
                  </figcaption>
                </figure>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "6px 20px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#c9ecd4" }}>
                  Participantes e confirmações
                </span>
                <span style={{ fontSize: "13px", color: "#dff3e5" }}>
                  Estados presentes nas telas, sem ordem cronológica
                </span>
              </div>
              <div data-m="row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "clamp(12px,1.6vw,24px)" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-gerador-coleta.webp" loading="lazy" alt="Gerador confirmado, com ações de confirmar ou recusar participação" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1838} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Confirmar participação
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-destinador.webp" loading="lazy" alt="Destinador com status pendente" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1812} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Destinador pendente
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-gerador-aguardando.webp" loading="lazy" alt="Ação bloqueada aguardando o transportador" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1812} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Aguardando transportador
                  </figcaption>
                </figure>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <Image sizes="(max-width: 767px) 100vw, 1200px" src="/assets/siag-m-transportador.webp" loading="lazy" alt="Transportador confirmado, com confirmar recebimento ou receber com ressalva" style={{ display: "block", width: "100%", height: "auto", borderRadius: "22px", background: "#fff" }} width={780} height={1812} />
                  <figcaption style={{ fontSize: "13px", fontWeight: "600", color: "#fff", textAlign: "center" }}>
                    Receber com ou sem ressalva
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="colaboracao" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  10
                </span>
                Colaboração
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Acompanhando o produto além da aprovação das telas
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                Acompanhei dev e QA na implementação, discutindo o comportamento dos fluxos. Foi um dos primeiros projetos em que atuei no produto como um todo, não só na interface.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#eceaff", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#2a1fb3" }}>
                Minha contribuição
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "16px", lineHeight: "1.4" }}>
                  Estudo do domínio, das referências e das regras
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "16px", lineHeight: "1.4" }}>
                  Fluxos de usuário e estrutura dos ambientes
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "16px", lineHeight: "1.4" }}>
                  UX/UI do web e do mobile
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "16px", lineHeight: "1.4" }}>
                  {"Documentação funcional no "}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/confluence-blue.svg" alt="" style={{ width: "1em", height: "1em", display: "inline-block", verticalAlign: "-.15em", marginRight: ".3em" }} />
                  Confluence
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid rgba(42,31,179,.16)", fontSize: "16px", lineHeight: "1.4" }}>
                  Esclarecer o comportamento esperado com dev e QA
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#f4f4f6", minWidth: "0" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b72" }}>
                Com a equipe
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "12px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4" }}>
                  <strong style={{ fontWeight: "600" }}>
                    Liderança
                  </strong>
                  {" trouxe a oportunidade e a direção do projeto"}
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4" }}>
                  <strong style={{ fontWeight: "600" }}>
                    Especialista da operação
                  </strong>
                  {" trouxe a realidade do campo e do transporte"}
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4" }}>
                  <strong style={{ fontWeight: "600" }}>
                    Desenvolvimento
                  </strong>
                  {" construiu a solução"}
                </div>
                <div style={{ padding: "12px 0", borderTop: "1px solid #e1e1e6", fontSize: "16px", lineHeight: "1.4" }}>
                  <strong style={{ fontWeight: "600" }}>
                    QA
                  </strong>
                  {" verificou a qualidade dos fluxos implementados"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="entrega" style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px clamp(32px,5vw,80px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  11
                </span>
                Entrega e evolução
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,42px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance", maxWidth: "20ch" }}>
                Um produto entregue que abriu espaço para uma nova necessidade
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                O SIAGRES foi lançado e bem recebido pela prefeitura. Logo veio uma nova demanda: ecopontos, para o cidadão encontrar onde descartar certos materiais.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#0b5e2a", color: "#fff" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#c9ecd4" }}>
                Entrega
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Produto lançado, no web e no mobile
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#e3f2e7", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#0b5e2a" }}>
                Recepção
              </span>
              <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", lineHeight: "1.15", letterSpacing: "-.03em", textWrap: "balance" }}>
                Boa recepção pela prefeitura
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px", minHeight: "170px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "22px", background: "#fff", border: "1px solid #e6e6eb", color: "#101014" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b72" }}>
                Evolução do escopo
              </span>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: "500", lineHeight: "1.3" }}>
                <span>
                  Gestão de MTRs
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b5e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1.5px dashed #0b5e2a", color: "#0b5e2a" }}>
                  Nova demanda: ecopontos
                </span>
              </span>
              <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                Representação editorial. A demanda foi solicitada, não lançada.
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{ padding: "clamp(28px,3.6vw,52px) clamp(18px,5vw,80px) clamp(32px,4vw,56px)" }}>
        <Link href="/cases/e-matriculas" className="hv-5110b7" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: "#dcf3f0", color: "#101014", transition: "background .25s" }}>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#0b5d63" }}>
              Próximo case
            </span>
            <span style={{ fontSize: "clamp(24px,2.4vw,36px)", fontWeight: "500", letterSpacing: "-.04em", lineHeight: "1.05" }}>
              e-Matrículas
            </span>
          </span>
          <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#101014", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
        </Link>
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
