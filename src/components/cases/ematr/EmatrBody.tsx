'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mascote } from '@/components/mascote/Mascote';
import { useEmatr } from './useEmatr';

export function EmatrBody() {
  const { progress, steps, r1, r2, r3, r4, lightboxOpen, lbAntes, lbDepois, openAntes, openDepois, closeLightbox } = useEmatr();
  return (
    <main id="conteudo" data-page="ematr" style={{ fontFamily: "var(--font-space-grotesk),system-ui,sans-serif", color: "#101014", background: "#fff" }}>
      <div style={{ position: "fixed", zIndex: "60", top: "0", left: "0", height: "3px", width: `${progress}%`, background: "linear-gradient(90deg,#1239ff,#6929ff)" }}></div>
      {" "}
      {" "}
      <section style={{ padding: "clamp(112px,12vw,170px) clamp(18px,5vw,80px) clamp(40px,5vw,72px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,3.6vw,48px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(18px,2vw,24px)", maxWidth: "900px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
              <span style={{ width: "8px", height: "8px", margin: "0 4px 0 9px", borderRadius: "50%", background: "#4030ff", display: "block" }}></span>
              Case · Educação · Boa Vista, RR
            </span>
            <h1 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(48px,7vw,112px)", lineHeight: ".9", letterSpacing: "-.055em" }}>
              e-Matrículas
            </h1>
            <p style={{ margin: "0", maxWidth: "980px", fontSize: "clamp(20px,2vw,30px)", lineHeight: "1.3", letterSpacing: "-.02em", color: "#3a3a40", textWrap: "pretty" }}>
              {"Matrícula escolar online da rede municipal de Boa Vista. Levei o processo "}
              <span style={{ color: "#101014", fontWeight: "500" }}>
                da fila na porta da escola para o celular.
              </span>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "24px 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 0 0", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Meu papel
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#101014" }}>
                Product Designer: discovery, UX/UI, validação e Design System
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 0 0", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Plataformas
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#eaf1fe", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/googlechrome.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  Web
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#f0f0f2", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/apple.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  iOS
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#e6f9ef", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/android.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  Android
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 0 0", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Usuários
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#101014" }}>
                Famílias e secretarias escolares
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 0 0", borderTop: "1px solid #101014", minWidth: "0" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Ferramentas
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#feece6", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/figma.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  Figma
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#e6eefb", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/jira.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  Jira
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#e8eaf0", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/confluence.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  Confluence
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#f0f0f2", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/notion.svg" alt="" width="16" height="16" style={{ display: "block", width: "16px", height: "16px" }} />
                  Notion
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px 7px 9px", borderRadius: "999px", background: "#e5f5f0", fontSize: "14px", fontWeight: "500", color: "#101014" }}>
                  <span aria-hidden="true" style={{ display: "block", width: "16px", height: "16px", background: "#10A37F", WebkitMask: "url(/icons/openai.svg) center/contain no-repeat", mask: "url(/icons/openai.svg) center/contain no-repeat" }}></span>
                  ChatGPT
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "16/9", minHeight: "360px", maxHeight: "720px", width: "100%", borderRadius: "clamp(16px,2vw,24px)", overflow: "hidden", background: "linear-gradient(135deg,#07165c 0%,#1239ff 40%,#4030ff 65%,#6929ff 88%,#8129d9 100%)" }}>
            <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse 50% 55% at 50% 75%,rgba(150,160,255,.45),transparent 70%)" }}></div>
            {" "}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "clamp(24px,6%,56px)", bottom: "0", width: "min(84%,1020px)", display: "flex", flexDirection: "column", borderRadius: "14px 14px 0 0", overflow: "hidden", background: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "#f2f2f5", borderBottom: "1px solid #e1e1e6", flexShrink: "0" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", display: "block" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e", display: "block" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", display: "block" }}></span>
                </div>
                <span style={{ flex: "1", maxWidth: "360px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "5px 12px", borderRadius: "8px", background: "#fff", fontSize: "12px", color: "#5d5d63", overflow: "hidden", whiteSpace: "nowrap" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  e-matriculas.com
                </span>
                <span style={{ width: "42px", display: "block" }}></span>
              </div>
              <div id="hero-scroll" style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", overscrollBehavior: "contain" }}>
                <Image src="/assets/ematr-landing-full.webp" alt="Landing page completa do e-Matrículas" style={{ display: "block", width: "100%", height: "auto", marginTop: "-4.6%" }} width={1920} height={6586} />
              </div>
            </div>
            {" "}
            <span style={{ position: "absolute", left: "clamp(14px,2vw,24px)", bottom: "clamp(14px,2vw,24px)", display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "999px", background: "rgba(255,255,255,.92)", fontSize: "13px", fontWeight: "600", color: "#101014" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="12" height="18" x="6" y="3" rx="6" />
                <path d="M12 7v4" />
              </svg>
              Landing page · role para explorar
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderRadius: "clamp(16px,2vw,24px)", overflow: "hidden", border: "1px solid #e6e6eb" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.4vw,32px)", borderRight: "1px solid #e6e6eb", borderBottom: "1px solid #e6e6eb", margin: "0 -1px -1px 0" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#c2410c" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Problema
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.5", textWrap: "pretty" }}>
                Famílias dormiam na fila para garantir vaga. O processo era presencial e só em horário comercial.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.4vw,32px)", borderRight: "1px solid #e6e6eb", borderBottom: "1px solid #e6e6eb", margin: "0 -1px -1px 0" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#4030ff" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6M10 22h4" />
                </svg>
                Solução
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.5", textWrap: "pretty" }}>
                Matrícula online 24h, com escopo definido junto às secretarias e versão em espanhol.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(20px,2.4vw,32px)", borderRight: "1px solid #e6e6eb", borderBottom: "1px solid #e6e6eb", margin: "0 -1px -1px 0", background: "#f4f3ff" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#15803d" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                  <path d="M16 7h6v6" />
                </svg>
                Impacto
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.5", textWrap: "pretty" }}>
                <strong style={{ fontWeight: "600" }}>
                  40.934 matrículas online
                </strong>
                {" e +50 mil acessos simultâneos no lançamento, sem queda."}
              </span>
            </div>
          </div>
          <nav aria-label="Capítulos do case" style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72", marginRight: "8px" }}>
              Neste case
            </span>
            <a href="#contexto" className="hv-baaf7f" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ fontSize: "12px", color: "#8a8a92" }}>
                01
              </span>
              Contexto
            </a>
            <a href="#discovery" className="hv-baaf7f" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ fontSize: "12px", color: "#8a8a92" }}>
                02
              </span>
              Discovery
            </a>
            <a href="#publico" className="hv-baaf7f" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ fontSize: "12px", color: "#8a8a92" }}>
                03
              </span>
              Público
            </a>
            <a href="#experiencia" className="hv-baaf7f" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ fontSize: "12px", color: "#8a8a92" }}>
                04
              </span>
              A experiência
            </a>
            <a href="#design-system" className="hv-baaf7f" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ fontSize: "12px", color: "#8a8a92" }}>
                05
              </span>
              Design System
            </a>
            <a href="#resultados" className="hv-baaf7f" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", border: "1px solid #e1e1e6", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ fontSize: "12px", color: "#8a8a92" }}>
                06
              </span>
              Resultados
            </a>
          </nav>
        </div>
      </section>
      {" "}
      <section id="contexto" style={{ padding: "clamp(44px,6vw,88px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  01
                </span>
                Contexto
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(32px,3.8vw,60px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
                Filas na porta da escola
              </h2>
            </div>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "68ch" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                {"Todo ano, no período de matrícula, "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  famílias passavam a noite em frente às escolas
                </strong>
                {" para garantir uma vaga."}
              </p>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                A prefeitura queria o processo 100% online, disponível 24 horas. Eu precisava conciliar três lados:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "10px", background: "#f7f7fa", fontSize: "14px", fontWeight: "500" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                  Limites técnicos do governo
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "10px", background: "#f7f7fa", fontSize: "14px", fontWeight: "500" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  Metas da diretoria
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "10px", background: "#f7f7fa", fontSize: "14px", fontWeight: "500" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8" />
                  </svg>
                  Rotina das escolas
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderRadius: "clamp(16px,2vw,24px)", overflow: "hidden", border: "1px solid #f3c9c9" }}>
            <div style={{ position: "relative" }}>
              <Image src="/assets/case-ematr-filas.webp" alt="Famílias aguardando à noite em frente a uma escola municipal" style={{ display: "block", width: "100%", height: "auto" }} width={2048} height={1180} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", background: "#fdf1f1" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "clamp(16px,2vw,24px)", borderRight: "1px solid #f3c9c9", borderBottom: "1px solid #f3c9c9", margin: "0 -1px -1px 0" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fff", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#7f1d1d" }}>
                    Noites na fila
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a40" }}>
                    Chegar antes era a única garantia.
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "clamp(16px,2vw,24px)", borderRight: "1px solid #f3c9c9", borderBottom: "1px solid #f3c9c9", margin: "0 -1px -1px 0" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fff", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                  </svg>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#7f1d1d" }}>
                    Sem previsão
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a40" }}>
                    A família não sabia se havia vaga.
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "clamp(16px,2vw,24px)", borderRight: "1px solid #f3c9c9", borderBottom: "1px solid #f3c9c9", margin: "0 -1px -1px 0" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fff", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8" />
                  </svg>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#7f1d1d" }}>
                    Tudo manual
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a40" }}>
                    Secretaria distribuía vagas uma a uma.
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "clamp(16px,2vw,24px)", borderRight: "1px solid #f3c9c9", borderBottom: "1px solid #f3c9c9", margin: "0 -1px -1px 0" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fff", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#7f1d1d" }}>
                    Ida obrigatória
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a40" }}>
                    Só dava para concluir na escola, em horário comercial.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "12px" }}>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", border: "1px solid #e6e6eb", display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                Antes
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", lineHeight: "1.4", color: "#3a3a40" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fdecec", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  Fila presencial, muitas vezes de madrugada
                </span>
                <span style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", lineHeight: "1.4", color: "#3a3a40" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fdecec", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  Só em horário comercial
                </span>
                <span style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", lineHeight: "1.4", color: "#3a3a40" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fdecec", color: "#c62828", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  Papel e conferência manual
                </span>
              </div>
            </div>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", background: "#f4f3ff", display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#4030ff" }}>
                Objetivo
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", lineHeight: "1.4" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Matrícula pelo celular, de casa
                </span>
                <span style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", lineHeight: "1.4" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Disponível 24 horas
                </span>
                <span style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", lineHeight: "1.4" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Status acompanhado em tempo real
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="discovery" style={{ padding: "clamp(44px,6vw,88px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  02
                </span>
                Discovery
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(32px,3.8vw,60px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
                Os requisitos vieram só da gestão
              </h2>
            </div>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "68ch" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                {"O levantamento inicial foi feito com o Secretário e os Coordenadores de Educação. O primeiro desenho tinha muitas telas e funções que faziam sentido para a gestão, "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  mas não para quem usaria o sistema
                </strong>
                .
              </p>
            </div>
          </div>
          <ol style={{ listStyle: "none", margin: "0", padding: "clamp(20px,2.4vw,28px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "20px 12px", borderRadius: "20px", background: "#fff", border: "1px solid #e6e6eb" }}>
            <li style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #d6d6dc", color: "#3a3a40", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span style={{ flex: "1", height: "1px", borderTop: "1px dashed #c9c9cf", display: "block" }}></span>
              </div>
              <span style={{ fontSize: "12px", color: "#8a8a92", fontWeight: "600" }}>
                ETAPA 1
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.4" }}>
                Requisitos com a gestão
              </span>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #d6d6dc", color: "#3a3a40", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                <span style={{ flex: "1", height: "1px", borderTop: "1px dashed #c9c9cf", display: "block" }}></span>
              </div>
              <span style={{ fontSize: "12px", color: "#8a8a92", fontWeight: "600" }}>
                ETAPA 2
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.4" }}>
                Primeiros protótipos
              </span>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#4030ff", color: "#fff", boxShadow: "0 0 0 5px #e3e0ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
                  </svg>
                </span>
                <span style={{ flex: "1", height: "1px", borderTop: "1px dashed #c9c9cf", display: "block" }}></span>
              </div>
              <span style={{ fontSize: "12px", color: "#4030ff", fontWeight: "600" }}>
                PONTO DE VIRADA
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.4", fontWeight: "600", color: "#4030ff" }}>
                Testes com secretários escolares
              </span>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span style={{ flex: "1", height: "1px", borderTop: "1px dashed #c9c9cf", display: "block" }}></span>
              </div>
              <span style={{ fontSize: "12px", color: "#8a8a92", fontWeight: "600" }}>
                ETAPA 4
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.4" }}>
                Pesquisa de campo nas secretarias
              </span>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
                  </svg>
                </span>
              </div>
              <span style={{ fontSize: "12px", color: "#8a8a92", fontWeight: "600" }}>
                ETAPA 5
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.4" }}>
                Escopo reduzido
              </span>
            </li>
          </ol>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "12px" }}>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", background: "#fff", border: "1px solid #e6e6eb", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff4e5", color: "#c2410c", display: "grid", placeItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                O que o teste mostrou
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                {"Testei os protótipos com os secretários escolares antes do desenvolvimento. "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  O fluxo não batia com a rotina deles
                </strong>
                {" de alocar alunos e montar turmas."}
              </span>
            </div>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", background: "#fff", border: "1px solid #e6e6eb", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6b72" }}>
                O que eu fiz
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3a3a40", textWrap: "pretty" }}>
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  Pausei a alta fidelidade
                </strong>
                {" e fui a campo nas secretarias para entender como elas organizavam o trabalho."}
              </span>
            </div>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", background: "#4030ff", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,.16)", color: "#fff", display: "grid", placeItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
                </svg>
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#d9d4ff" }}>
                Resultado
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.6", textWrap: "pretty" }}>
                <strong style={{ fontWeight: "600" }}>
                  Cortamos dezenas de telas
                </strong>
                {" e focamos na alocação de turmas. O desenvolvimento ficou mais barato e o prazo foi mantido."}
              </span>
            </div>
          </div>
          <blockquote style={{ margin: "0", padding: "clamp(4px,1vw,8px) 0 clamp(4px,1vw,8px) clamp(18px,2vw,28px)", borderLeft: "3px solid #4030ff", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "clamp(22px,2.4vw,34px)", lineHeight: "1.2", letterSpacing: "-.03em", fontWeight: "500", textWrap: "balance" }}>
              Testar cedo com quem opera o sistema evitou construir telas que ninguém ia usar.
            </span>
            <span style={{ fontSize: "14px", color: "#6b6b72" }}>
              Principal aprendizado do discovery
            </span>
          </blockquote>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "16px" }}>
            <button type="button" onClick={openAntes} aria-label="Ampliar Fluxo definido pela gestão" style={{ all: "unset", cursor: "zoom-in", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
              <span style={{ position: "relative", display: "block", borderRadius: "16px", overflow: "hidden", border: "1px solid #e6e6eb", background: "#fff" }}>
                <Image src="/assets/ematr-fluxo-antes.webp" alt="Antes: fluxo definido pela gestão" style={{ display: "block", width: "100%", height: "auto" }} width={1672} height={941} />
                {" "}
                <span style={{ position: "absolute", right: "10px", bottom: "10px", display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 10px", borderRadius: "999px", background: "#101014", color: "#fff", fontSize: "12px", fontWeight: "600" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Ampliar
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#5d5d63" }}>
                <span style={{ padding: "2px 8px", borderRadius: "6px", background: "#fdecec", color: "#c62828", fontWeight: "600", fontSize: "12px" }}>
                  ANTES
                </span>
                Fluxo definido pela gestão
              </span>
            </button>
            <button type="button" onClick={openDepois} aria-label="Ampliar Fluxo validado com as secretarias" style={{ all: "unset", cursor: "zoom-in", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
              <span style={{ position: "relative", display: "block", borderRadius: "16px", overflow: "hidden", border: "1px solid #e6e6eb", background: "#fff" }}>
                <Image src="/assets/ematr-fluxo-depois.webp" alt="Depois: fluxo validado com as secretarias" style={{ display: "block", width: "100%", height: "auto" }} width={1672} height={941} />
                {" "}
                <span style={{ position: "absolute", right: "10px", bottom: "10px", display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 10px", borderRadius: "999px", background: "#101014", color: "#fff", fontSize: "12px", fontWeight: "600" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Ampliar
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#5d5d63" }}>
                <span style={{ padding: "2px 8px", borderRadius: "6px", background: "#e7f6ec", color: "#15803d", fontWeight: "600", fontSize: "12px" }}>
                  DEPOIS
                </span>
                Fluxo validado com as secretarias
              </span>
            </button>
          </div>
          {(lightboxOpen) && (
            <>
              <div onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Fluxo ampliado" style={{ position: "fixed", inset: "0", zIndex: "100", background: "rgba(11,15,43,.82)", display: "grid", placeItems: "center", padding: "clamp(12px,3vw,40px)", cursor: "zoom-out" }}>
                <Image src="/assets/ematr-fluxo-antes.webp" alt="Fluxo antes, ampliado" style={{ display: lbAntes, maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", borderRadius: "12px", background: "#fff" }} width={1672} height={941} />
                <Image src="/assets/ematr-fluxo-depois.webp" alt="Fluxo depois, ampliado" style={{ display: lbDepois, maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", borderRadius: "12px", background: "#fff" }} width={1672} height={941} />
                <span style={{ position: "fixed", top: "16px", right: "16px", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", color: "#101014", display: "grid", placeItems: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
              </div>
            </>
          )}
        </div>
      </section>
      {" "}
      <section id="publico" style={{ padding: "clamp(44px,6vw,88px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  03
                </span>
                Público
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(32px,3.8vw,60px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
                A cidade inteira como usuária
              </h2>
            </div>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "20px", maxWidth: "68ch" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                {"A plataforma seria usada por pais jovens acostumados com aplicativos e também por avós com pouca experiência com tecnologia. "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  Cada tela precisava funcionar para os dois.
                </strong>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "14px", color: "#3a3a40", fontWeight: "500" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="20" x="5" y="2" rx="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    Pais jovens
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    Avós
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a7bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                  </span>
                </div>
                <div style={{ height: "8px", borderRadius: "999px", background: "linear-gradient(90deg,#1239ff,#6929ff,#c4b8ff)" }}></div>
                <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                  Familiaridade digital
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", borderRadius: "16px", border: "1px solid #e6e6eb" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Linguagem simples
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                  Sem siglas nem termos da secretaria.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", borderRadius: "16px", border: "1px solid #e6e6eb" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Uma etapa por vez
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                  Status visível em cada passo.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", borderRadius: "16px", border: "1px solid #e6e6eb" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 18a6 6 0 0 0 0-12v12z" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Contraste alto
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                  Legível ao sol e em telas antigas.
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 48px", alignItems: "center", position: "relative", overflow: "hidden", padding: "clamp(26px,3.4vw,44px) clamp(22px,3vw,40px) clamp(22px,3vw,40px)", borderRadius: "clamp(16px,2vw,24px)", background: "#eef2f9" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "6px", display: "flex" }}>
              <span style={{ flex: "1", background: "#ffcc00", display: "block" }}></span>
              <span style={{ flex: "1", background: "#00247d", display: "block" }}></span>
              <span style={{ flex: "1", background: "#cf142b", display: "block" }}></span>
            </span>
            <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span role="img" aria-label="Bandeira da Venezuela" style={{ position: "relative", width: "54px", height: "36px", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column", flexShrink: "0" }}>
                  <span style={{ flex: "1", background: "#ffcc00", display: "block" }}></span>
                  <span style={{ flex: "1", background: "#00247d", display: "block" }}></span>
                  <span style={{ flex: "1", background: "#cf142b", display: "block" }}></span>
                  <svg width="54" height="36" viewBox="0 0 54 36" style={{ position: "absolute", inset: "0" }}>
                    <g fill="#fff">
                      <circle cx="17.5" cy="20" r="1.3" />
                      <circle cx="19.5" cy="16.6" r="1.3" />
                      <circle cx="22.6" cy="14.2" r="1.3" />
                      <circle cx="25.9" cy="13.2" r="1.3" />
                      <circle cx="28.1" cy="13.2" r="1.3" />
                      <circle cx="31.4" cy="14.2" r="1.3" />
                      <circle cx="34.5" cy="16.6" r="1.3" />
                      <circle cx="36.5" cy="20" r="1.3" />
                    </g>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "#00247d" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
                  </svg>
                  Versão em espanhol
                </span>
              </div>
              <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(24px,2.4vw,36px)", lineHeight: "1.08", letterSpacing: "-.035em", textWrap: "balance" }}>
                Famílias venezuelanas matriculando sozinhas
              </h3>
            </div>
            <div style={{ flex: "1.4 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.25vw,17px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                {"Boa Vista recebe muitas famílias imigrantes da Venezuela. "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  Em vez de só traduzir
                </strong>
                , entrevistamos essas famílias e reescrevemos a versão em espanhol com linguagem simples, sem os termos escolares brasileiros.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#fff", fontSize: "14px", fontWeight: "500" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Entrevistas
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#fff", fontSize: "14px", fontWeight: "500" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                  Reescrita
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#fff", fontSize: "14px", fontWeight: "500" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Matrícula sem ajuda
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="experiencia" style={{ padding: "clamp(44px,6vw,88px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  04
                </span>
                A experiência
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(32px,3.8vw,60px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
                Saber em que pé está a vaga
              </h2>
            </div>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "68ch" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                {"Na fila, a família pelo menos via a própria posição. Online, essa certeza precisava continuar. "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  Cada solicitação mostra a etapa atual, quem analisou e o que falta.
                </strong>
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", padding: "clamp(16px,2.4vw,32px)", borderRadius: "clamp(16px,2vw,24px)", background: "#fff", border: "1px solid #e6e6eb" }}>
            <div style={{ flex: "1.6 1 440px", minWidth: "0", position: "relative", aspectRatio: "1/1", overflow: "hidden", margin: "clamp(-32px,-2.4vw,-16px) 0 clamp(-32px,-2.4vw,-16px) clamp(-32px,-2.4vw,-16px)" }}>
              <Image src="/assets/ematr-status-phones.webp" alt="Telas de solicitação e linha do tempo de status no app" style={{ position: "absolute", left: "50%", top: "50%", width: "150%", height: "auto", maxWidth: "none", transform: "translate(-48%,-50%)", display: "block" }} width={2400} height={1800} />
            </div>
            <ol style={{ flex: "1 1 280px", minWidth: "0", listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "0" }}>
              {(steps).map((s, i) => (
                <Fragment key={i}>
                  <li style={{ display: "flex", gap: "14px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ position: "relative", width: "28px", height: "28px", borderRadius: "50%", background: s.bg, border: `1.5px solid ${s.border}`, boxShadow: s.glow, color: "#fff", display: "grid", placeItems: "center", flexShrink: "0", boxSizing: "border-box", transition: "background .45s ease,border-color .45s ease,box-shadow .45s ease,transform .45s cubic-bezier(.3,1.6,.5,1)", transform: `scale(${s.scale})` }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", opacity: s.checkOp, transition: "opacity .3s" }}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", opacity: s.clockOp, transition: "opacity .3s" }}>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        <span style={{ position: "absolute", width: "8px", height: "8px", borderRadius: "50%", background: "#c9c9cf", opacity: s.dotOp, transition: "opacity .3s", display: "block" }}></span>
                      </span>
                      <span style={{ position: "relative", flex: "1", width: "2px", minHeight: "20px", display: s.lineDisplay, background: "repeating-linear-gradient(to bottom,#d6d6dc 0 4px,transparent 4px 8px)" }}>
                        <span style={{ position: "absolute", left: "0", top: "0", width: "2px", height: s.fill, background: "#22c55e", transition: "height .6s ease", display: "block" }}></span>
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingBottom: s.pb, opacity: s.textOp, transition: "opacity .45s" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "16px", fontWeight: "600" }}>
                        {s.title}
                        <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "999px", background: s.tagBg, color: s.tagColor, display: s.tagDisplay }}>
                          {s.tag}
                        </span>
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a40" }}>
                        {s.desc}
                      </span>
                    </div>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "baseline", justifyContent: "space-between" }}>
              <h3 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(22px,2vw,30px)", letterSpacing: "-.03em" }}>
                Portal da família na web
              </h3>
              <span style={{ fontSize: "15px", color: "#6b6b72" }}>
                Depois da matrícula, o responsável acompanha a vida escolar.
              </span>
            </div>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ borderRadius: "clamp(12px,1.6vw,20px)", overflow: "hidden", border: "1px solid #e1e1e6", background: "#fff" }}>
                <Image src="/assets/ematr-web-home.webp" alt="Tela Meus dependentes com os cards de cada filho" style={{ display: "block", width: "100%", height: "auto" }} width={1920} height={1080} />
              </div>
              <figcaption style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#5d5d63" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5 12 3l9 6.5V21H3z" />
                  <path d="M9 21v-6h6v6" />
                </svg>
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  Meus dependentes
                </strong>
                todos os filhos e suas escolas em um só lugar
              </figcaption>
            </figure>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "14px" }}>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ borderRadius: "clamp(12px,1.6vw,20px)", overflow: "hidden", border: "1px solid #e1e1e6", background: "#fff" }}>
                  <Image src="/assets/ematr-web-frequencia.webp" alt="Frequência mensal em calendário e diário de classe" style={{ display: "block", width: "100%", height: "auto" }} width={1920} height={1080} />
                </div>
                <figcaption style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#5d5d63" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <strong style={{ fontWeight: "600", color: "#101014" }}>
                    Frequência
                  </strong>
                  faltas e justificativas no calendário
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ borderRadius: "clamp(12px,1.6vw,20px)", overflow: "hidden", border: "1px solid #e1e1e6", background: "#fff" }}>
                  <Image src="/assets/ematr-web-notas.webp" alt="Tabela de notas bimestrais por matéria" style={{ display: "block", width: "100%", height: "auto" }} width={1920} height={1080} />
                </div>
                <figcaption style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#5d5d63" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z" />
                  </svg>
                  <strong style={{ fontWeight: "600", color: "#101014" }}>
                    Notas
                  </strong>
                  desempenho por matéria e recuperação
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="design-system" style={{ padding: "clamp(44px,6vw,88px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  05
                </span>
                Design System e handoff
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(32px,3.8vw,60px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
                Leve para aguentar o pico de acessos
              </h2>
            </div>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "68ch" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                {"Na abertura das inscrições, milhares de pessoas acessariam ao mesmo tempo, "}
                <strong style={{ fontWeight: "600", color: "#101014" }}>
                  muitas com celulares antigos e internet instável
                </strong>
                . Criei um Design System no Figma pensado para isso.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px" }}>
            <div style={{ padding: "20px", borderRadius: "16px", background: "#f7f7fa", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", border: "1px solid #e6e6eb" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>
                Componentes modulares
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                Poucas peças, reaproveitadas em todas as telas.
              </span>
            </div>
            <div style={{ padding: "20px", borderRadius: "16px", background: "#f7f7fa", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", border: "1px solid #e6e6eb" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.17-2.65M10.66 5c4.01-.36 8.14.9 11.34 3.76M16.85 11.25a10 10 0 0 1 2.22 1.68M5 13a10 10 0 0 1 5.24-2.76" />
                  <path d="m2 2 20 20" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>
                Leve em conexão ruim
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                Telas enxutas que carregam rápido.
              </span>
            </div>
            <div style={{ padding: "20px", borderRadius: "16px", background: "#f7f7fa", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff", color: "#4030ff", display: "grid", placeItems: "center", border: "1px solid #e6e6eb" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                </svg>
              </span>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>
                Tipografia legível
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3a3a40" }}>
                Tamanhos generosos e contraste alto.
              </span>
            </div>
          </div>
          <div style={{ borderRadius: "clamp(16px,2vw,24px)", overflow: "hidden", border: "1px solid #e1e1e6", background: "#fff" }}>
            <Image src="/assets/ematr-solicitacao.webp" alt="Tela de solicitação completa: status, dados do aluno e escolas pretendidas" style={{ display: "block", width: "100%", height: "auto" }} width={1345} height={762} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "12px" }}>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", border: "1px solid #e6e6eb", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Documentação
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5d5d63" }}>
                  Protótipos entregues com as regras de negócio descritas em cada componente.
                </span>
              </div>
            </div>
            <div style={{ padding: "clamp(20px,2.4vw,28px)", borderRadius: "20px", border: "1px solid #e6e6eb", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Design QA
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5d5d63" }}>
                  Acompanhei o front-end e revisei as telas para o código ficar fiel ao Figma.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="resultados" style={{ padding: "clamp(44px,6vw,88px) clamp(18px,5vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  06
                </span>
                Resultados
              </span>
              <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(32px,3.8vw,60px)", lineHeight: "1", letterSpacing: "-.045em", textWrap: "balance" }}>
                Da fila para o celular
              </h2>
            </div>
            <div style={{ minWidth: "0", maxWidth: "68ch" }}>
              <p style={{ margin: "0", fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.65", color: "#3a3a40", textWrap: "pretty" }}>
                O que aconteceu depois que a plataforma entrou no ar.
              </p>
            </div>
          </div>
          <div id="res-grid" style={{ display: "flex", flexDirection: "column", gap: "clamp(12px,1.4vw,16px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px", padding: "clamp(24px,3vw,44px)", borderRadius: "24px", background: "#4030ff", color: "#fff" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#d4cfff" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10 12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  Matrículas online
                </span>
                <span style={{ fontWeight: "500", fontSize: "clamp(64px,10vw,160px)", letterSpacing: "-.06em", lineHeight: ".85", fontVariantNumeric: "tabular-nums" }}>
                  {r1}
                </span>
              </div>
              <p style={{ margin: "0", flex: "0 1 380px", fontSize: "clamp(16px,1.3vw,19px)", lineHeight: "1.55", color: "#fff", textWrap: "pretty" }}>
                Famílias que deixaram de passar a noite na porta da escola para garantir a vaga.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(12px,1.4vw,16px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "20px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
                    </svg>
                  </span>
                </div>
                <span style={{ fontWeight: "500", fontSize: "clamp(44px,4.4vw,68px)", letterSpacing: "-.055em", lineHeight: ".95", color: "#4030ff", fontVariantNumeric: "tabular-nums" }}>
                  +{r2}{" mil"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "14px", borderTop: "1px solid #e6e6eb" }}>
                  <span style={{ fontSize: "clamp(17px,1.3vw,19px)", fontWeight: "600", letterSpacing: "-.01em", lineHeight: "1.3", textWrap: "balance" }}>
                    acessos simultâneos na abertura, sem queda
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5d5d63", textWrap: "pretty" }}>
                    Telas leves que aguentaram celular antigo e internet fraca no pico.
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "20px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="m17 8 5 5M22 8l-5 5" />
                    </svg>
                  </span>
                </div>
                <span style={{ fontWeight: "500", fontSize: "clamp(44px,4.4vw,68px)", letterSpacing: "-.055em", lineHeight: ".95", color: "#4030ff", fontVariantNumeric: "tabular-nums" }}>
                  {r3}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "14px", borderTop: "1px solid #e6e6eb" }}>
                  <span style={{ fontSize: "clamp(17px,1.3vw,19px)", fontWeight: "600", letterSpacing: "-.01em", lineHeight: "1.3", textWrap: "balance" }}>
                    filas na frente das escolas
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5d5d63", textWrap: "pretty" }}>
                    A matrícula passou a ser feita de casa, a qualquer hora.
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "clamp(20px,2.2vw,28px)", borderRadius: "20px", background: "#fff", border: "1px solid #e6e6eb", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#eceaff", color: "#4030ff", display: "grid", placeItems: "center", flexShrink: "0" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4" />
                    </svg>
                  </span>
                  <span style={{ padding: "5px 10px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "12px", fontWeight: "600", letterSpacing: ".06em", textTransform: "uppercase" }}>
                    Bônus
                  </span>
                </div>
                <span style={{ fontWeight: "500", fontSize: "clamp(44px,4.4vw,68px)", letterSpacing: "-.055em", lineHeight: ".95", color: "#4030ff", fontVariantNumeric: "tabular-nums" }}>
                  +{r4}{" mil"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "14px", borderTop: "1px solid #e6e6eb" }}>
                  <span style={{ fontSize: "clamp(17px,1.3vw,19px)", fontWeight: "600", letterSpacing: "-.01em", lineHeight: "1.3", textWrap: "balance" }}>
                    transferências sem os pais irem à escola
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5d5d63", textWrap: "pretty" }}>
                    Serviço extra, pedido pela Secretaria após a boa resposta às matrículas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section id="contato" style={{ padding: "clamp(44px,5vw,80px) clamp(18px,5vw,80px) 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ marginBottom: "-32px", padding: "0 24px" }}>
            <Mascote mode="walk" size={3} />
          </div>
          <Link href="/cases/eventure" className="hv-09a1d1" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "clamp(24px,3vw,44px)", borderRadius: "24px", background: "#f4f3ff" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#4030ff" }}>
                Próximo case
              </span>
              <span style={{ fontWeight: "500", fontSize: "clamp(32px,3.6vw,56px)", letterSpacing: "-.045em", lineHeight: "1" }}>
                Eventure
              </span>
            </span>
            <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#4030ff", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
          <footer style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "24px", borderTop: "1px solid #e1e1e6", fontSize: "15px", color: "#4a4a52" }}>
            <span>
              © {new Date().getFullYear()} Eric Luz · Product Designer
            </span>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a href="mailto:ericxluzz.dsg@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
                E-mail
              </a>
              <a href="https://www.linkedin.com/in/ericxluzzz-dsg/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href="/cv-eric-luz.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Baixar CV
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
