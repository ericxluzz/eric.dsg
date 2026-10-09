/* eslint-disable @typescript-eslint/no-explicit-any -- template portado do protótipo; os dados vêm tipados de buildPostView() */
import { Fragment } from 'react';
import Link from 'next/link';
import { Mascote } from '@/components/mascote/Mascote';
import type { PostViewProps } from '@/lib/post-view';

export function PostView({ post, blocks, toc, related, relTitle, ano }: PostViewProps) {
  return (
    <main id="conteudo" style={{ fontFamily: "var(--font-space-grotesk),system-ui,sans-serif", color: "#101014", background: "#fafafc", minHeight: "100vh" }}>
      <article>
        <div style={{ background: post.bg, padding: "clamp(120px,12vw,160px) clamp(20px,5vw,80px) clamp(40px,5vw,64px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link href="/exploracoes" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "500", color: "#3a3a40", alignSelf: "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Explorações
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "13px" }}>
              {(post.exemplo) && (
                <>
                  <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px dashed rgba(16,16,20,.35)", color: "#3a3a40", fontWeight: "500" }}>
                    Exemplo
                  </span>
                </>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(16px,2vw,28px)", maxWidth: "1100px" }}>
              {(post.hasLogo) && (
                <>
                  <span style={{ flexShrink: "0", width: "clamp(88px,9vw,136px)", height: "clamp(88px,9vw,136px)", borderRadius: "clamp(20px,2vw,30px)", background: post.logoBg, display: "grid", placeItems: "center", overflow: "hidden", marginTop: "4px" }}>
                    <span role="img" aria-label={post.marca} style={{ display: "block", width: post.logoSize, height: post.logoSize, backgroundImage: post.logoCss, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></span>
                  </span>
                </>
              )}
              <h1 style={{ margin: "0", minWidth: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(34px,4.2vw,64px)", lineHeight: "1.02", letterSpacing: "-.045em", textWrap: "balance" }}>
                {post.titulo}
              </h1>
            </div>
            <p style={{ margin: "0", maxWidth: "72ch", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.5", color: "#2f2f35", textWrap: "pretty" }}>
              {post.descricao}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", paddingTop: "16px", borderTop: "1px solid rgba(16,16,20,.14)", fontSize: "14px", color: "#3a3a40" }}>
              <span style={{ fontWeight: "600", color: "#101014" }}>
                {post.meta}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(post.tagList).map((tg: any, i: number) => (
                  <Fragment key={i}>
                    <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(255,255,255,.7)", fontSize: "12px", color: "#3a3a40" }}>
                      {tg}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
            {(post.hasFicha) && (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "12px", marginTop: "4px" }}>
                  {(post.ficha).map((fi: any, i: number) => (
                    <Fragment key={i}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px 18px", borderRadius: "18px", background: "rgba(255,255,255,.72)", minWidth: "0" }}>
                        <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: post.ink }}>
                          {fi.k}
                        </span>
                        <span style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.35" }}>
                          {fi.v}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        {" "}
        {(post.capaNotebook) && (
          <>
            <figure style={{ margin: "0", padding: "clamp(24px,3vw,40px) clamp(20px,5vw,80px) 0" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div role="img" aria-label="Tela de chamada do ATHLETTO em um notebook" style={{ position: "relative", aspectRatio: "16/8.4", borderRadius: "24px", overflow: "hidden", background: "radial-gradient(120% 120% at 0% 100%,#a4cc2a 0%,#8db51c 45%,#7aa015 100%)" }}>
                  <span style={{ position: "absolute", left: "20%", top: "14%", width: "100%", boxSizing: "border-box", padding: "24px", borderRadius: "30px", background: "#101014", boxShadow: "0 24px 60px rgba(16,30,0,.35)" }}>
                    <span style={{ display: "block", borderRadius: "8px", overflow: "hidden" }}>
                      <div style={{ containerType: "inline-size", width: "100%", fontFamily: "var(--font-jakarta),var(--font-space-grotesk),sans-serif" }}>
                        <div style={{ display: "flex", aspectRatio: "1180/640", background: "#eef1f5", overflow: "hidden" }}>
                          <div style={{ flex: "0 0 18.814cqw", display: "flex", flexDirection: "column", background: "#0f1729", padding: "1.356cqw 1.017cqw" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0 0.508cqw 1.525cqw" }}>
                              <span style={{ width: "2.373cqw", height: "2.373cqw", display: "block", backgroundImage: "url('/assets/logos/athletto.png')", backgroundSize: "170%", backgroundPosition: "center", borderRadius: "0.508cqw" }}></span>
                              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                                <span style={{ fontSize: "1.271cqw", fontWeight: "700", color: "#fff" }}>
                                  Athletto
                                </span>
                                <span style={{ fontSize: "0.847cqw", color: "#8b93a5" }}>
                                  Plano Elite
                                </span>
                              </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.169cqw" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <rect x="3" y="3" width="7" height="7" rx="1" />
                                  <rect x="14" y="3" width="7" height="7" rx="1" />
                                  <rect x="3" y="14" width="7" height="7" rx="1" />
                                  <rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Painel
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <circle cx="12" cy="8" r="4" />
                                  <path d="M4 21a8 8 0 0 1 16 0" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Atletas
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <circle cx="9" cy="8" r="4" />
                                  <path d="M1 21a8 8 0 0 1 16 0M17 4a4 4 0 0 1 0 8M23 21a8 8 0 0 0-5-7.4" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Turmas
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "#1c2539", color: "#fff", fontSize: "1.059cqw", position: "relative" }}>
                                <span style={{ position: "absolute", left: "0", top: "0.508cqw", bottom: "0.508cqw", width: "0.254cqw", borderRadius: "2px", background: "#c6f24e" }}></span>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <circle cx="9" cy="8" r="4" />
                                  <path d="M1 21a8 8 0 0 1 14-5.3M16 19l2 2 4-4" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Frequência
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <rect x="3" y="4" width="18" height="18" rx="2" />
                                  <path d="M16 2v4M8 2v4M3 10h18" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Calendário
                                </span>
                              </div>
                            </div>
                            <div style={{ height: "1px", background: "#222b3d", margin: "0.847cqw 0" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.169cqw" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <rect x="2" y="6" width="20" height="14" rx="2" />
                                  <path d="M16 13h2M2 10h20" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Cobranças
                                </span>
                                <span style={{ width: "0.508cqw", height: "0.508cqw", borderRadius: "50%", background: "#f5b31a" }}></span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <circle cx="12" cy="12" r="3" />
                                  <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.3z" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Ajustes
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Suporte
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", borderRadius: "0.678cqw", background: "transparent", color: "#c3c9d5", fontSize: "1.059cqw", position: "relative" }}>
                                <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c3c9d5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                  <rect x="3" y="8" width="18" height="4" rx="1" />
                                  <path d="M12 8v13M19 12v9H5v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Convide e ganhe
                                </span>
                              </div>
                            </div>
                            <div style={{ height: "1px", background: "#222b3d", margin: "0.847cqw 0" }}></div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.847cqw", padding: "0.678cqw 0.847cqw", color: "#c6f24e", fontSize: "1.059cqw", fontWeight: "600" }}>
                              <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#c6f24e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                <path d="m12 2 10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                              </svg>
                              <span style={{ flex: "1" }}>
                                Painel admin
                              </span>
                              <span style={{ padding: "0.169cqw 0.508cqw", borderRadius: "0.339cqw", background: "#c6f24e", color: "#0f1729", fontSize: "0.678cqw", fontWeight: "800" }}>
                                SUPER
                              </span>
                            </div>
                            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.847cqw", padding: "1.017cqw 0.508cqw 0", borderTop: "1px solid #222b3d" }}>
                              <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#3a4256", display: "block" }}></span>
                              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                                <span style={{ fontSize: "1.017cqw", fontWeight: "700", color: "#fff" }}>
                                  ericxluzz.dsg
                                </span>
                                <span style={{ fontSize: "0.847cqw", color: "#8b93a5" }}>
                                  Gestor principal
                                </span>
                              </span>
                            </div>
                          </div>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.356cqw", padding: "0.847cqw 1.695cqw", background: "#fff", borderBottom: "1px solid #e3e7ee" }}>
                              <span style={{ display: "flex", alignItems: "center", gap: "0.678cqw", fontSize: "1.186cqw", fontWeight: "700", color: "#0f172a" }}>
                                <span style={{ width: "1.864cqw", height: "1.864cqw", borderRadius: "50%", background: "#1a0d0d", display: "grid", placeItems: "center", boxShadow: "inset 0 0 0 1px #b91c1c" }}>
                                  <svg viewBox="0 0 24 24" fill="none" strokeLinejoin="round" strokeLinecap="round" style={{ display: "block", width: "78%", height: "78%" }}>
                                    <path d="M4 3l4.5 4h7L20 3l-.8 7.5L21 13l-4 2.5-2 4.5h-6l-2-4.5L3 13l1.8-2.5z" fill="#b91c1c" stroke="#fca5a5" strokeWidth=".9" />
                                    <path d="M9 11.5l1.6.9M15 11.5l-1.6.9" stroke="#fff" strokeWidth="1.3" />
                                    <path d="M10.5 16.2h3l-1.5 1.6z" fill="#fff" />
                                  </svg>
                                </span>
                                Berserkers
                              </span>
                              <span style={{ flex: "0 1 28.814cqw", display: "flex", alignItems: "center", gap: "0.678cqw", padding: "0.593cqw 1.017cqw", borderRadius: "999px", background: "#f1f3f7", fontSize: "0.975cqw", color: "#7a8394" }}>
                                <svg width="1.102cqw" height="1.102cqw" viewBox="0 0 24 24" fill="none" stroke="#7a8394" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.102cqw", height: "1.102cqw" }}>
                                  <circle cx="11" cy="11" r="8" />
                                  <path d="m21 21-4.3-4.3" />
                                </svg>
                                <span style={{ flex: "1" }}>
                                  Buscar atletas, turmas, ações...
                                </span>
                                <span style={{ padding: "0.085cqw 0.424cqw", borderRadius: "0.339cqw", border: "1px solid #e3e7ee", fontSize: "0.763cqw" }}>
                                  Ctrl K
                                </span>
                              </span>
                              <span style={{ display: "flex", alignItems: "center", gap: "1.186cqw" }}>
                                <svg width="1.186cqw" height="1.186cqw" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.186cqw", height: "1.186cqw" }}>
                                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
                                </svg>
                                <span style={{ position: "relative" }}>
                                  <svg width="1.271cqw" height="1.271cqw" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.271cqw", height: "1.271cqw" }}>
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                                  </svg>
                                  <span style={{ position: "absolute", top: "-0.508cqw", right: "-0.763cqw", padding: "0 0.339cqw", borderRadius: "999px", background: "#ef4444", color: "#fff", fontSize: "0.678cqw", fontWeight: "700" }}>
                                    9+
                                  </span>
                                </span>
                                <span style={{ width: "1px", height: "1.864cqw", background: "#e3e7ee" }}></span>
                                <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#3a4256", display: "block" }}></span>
                                <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                                  <span style={{ fontSize: "1.017cqw", fontWeight: "700", color: "#0f172a" }}>
                                    ericxluzz.dsg
                                  </span>
                                  <span style={{ fontSize: "0.847cqw", color: "#7a8394" }}>
                                    Gestor principal
                                  </span>
                                </span>
                              </span>
                            </div>
                            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "1.017cqw", padding: "1.525cqw 1.695cqw" }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "0.169cqw" }}>
                                <span style={{ fontSize: "1.780cqw", fontWeight: "700", color: "#0f172a", letterSpacing: "-.01em" }}>
                                  Frequência
                                </span>
                                <span style={{ fontSize: "0.975cqw", color: "#7a8394" }}>
                                  Registre presença, analise histórico e atue sobre evasões
                                </span>
                              </div>
                              <div style={{ display: "flex", gap: "0.339cqw", borderBottom: "1px solid #e3e7ee" }}>
                                <span style={{ padding: "0.678cqw 1.186cqw", fontSize: "1.059cqw", fontWeight: "600", color: "#1d4ed8", borderBottom: "2px solid #1d4ed8", marginBottom: "-1px" }}>
                                  Registrar
                                </span>
                                <span style={{ padding: "0.678cqw 1.186cqw", fontSize: "1.059cqw", fontWeight: "500", color: "#3b4252", borderBottom: "2px solid transparent", marginBottom: "-1px" }}>
                                  Histórico
                                </span>
                                <span style={{ padding: "0.678cqw 1.186cqw", fontSize: "1.059cqw", fontWeight: "500", color: "#3b4252", borderBottom: "2px solid transparent", marginBottom: "-1px" }}>
                                  Ranking
                                </span>
                                <span style={{ padding: "0.678cqw 1.186cqw", fontSize: "1.059cqw", fontWeight: "500", color: "#3b4252", borderBottom: "2px solid transparent", marginBottom: "-1px" }}>
                                  Alertas de evasão
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span style={{ display: "flex", alignItems: "center", gap: "0.847cqw" }}>
                                  <span style={{ display: "flex", alignItems: "center", gap: "0.424cqw", fontSize: "1.017cqw", color: "#3b4252" }}>
                                    <svg width="1.017cqw" height="1.017cqw" viewBox="0 0 24 24" fill="none" stroke="#3b4252" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "1.017cqw", height: "1.017cqw" }}>
                                      <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                    Voltar
                                  </span>
                                  <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                                    <span style={{ fontSize: "1.102cqw", fontWeight: "700", color: "#0f172a" }}>
                                      Sub-17
                                    </span>
                                    <span style={{ fontSize: "0.847cqw", color: "#7a8394" }}>
                                      09/10/2026
                                    </span>
                                  </span>
                                </span>
                                <span style={{ padding: "0.508cqw 0.847cqw", borderRadius: "0.508cqw", border: "1px solid #e3e7ee", background: "#fff", fontSize: "0.975cqw", color: "#0f172a" }}>
                                  09/10/2026
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.763cqw 1.186cqw", borderRadius: "0.847cqw", background: "#fff", border: "1px solid #e3e7ee", fontSize: "0.975cqw", color: "#3b4252" }}>
                                <span style={{ display: "flex", gap: "1.186cqw" }}>
                                  <span>
                                    <b style={{ color: "#12b77a" }}>
                                      ●
                                    </b>
                                    {" "}
                                    <b style={{ color: "#0f172a" }}>
                                      5
                                    </b>
                                    {" presentes"}
                                  </span>
                                  <span>
                                    <b style={{ color: "#ef4444" }}>
                                      ●
                                    </b>
                                    {" "}
                                    <b style={{ color: "#0f172a" }}>
                                      0
                                    </b>
                                    {" faltas"}
                                  </span>
                                  <span>
                                    <b style={{ color: "#c4c9d2" }}>
                                      ●
                                    </b>
                                    {" "}
                                    <b style={{ color: "#0f172a" }}>
                                      0
                                    </b>
                                    {" pendentes"}
                                  </span>
                                </span>
                                <span style={{ color: "#1d4ed8", fontWeight: "600" }}>
                                  ✓ Todos presentes
                                </span>
                              </div>
                              <div style={{ borderRadius: "0.847cqw", background: "#fff", border: "1px solid #e3e7ee", overflow: "hidden" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.017cqw", padding: "0.847cqw 1.356cqw" }}>
                                  <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#0f7a55", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.847cqw", fontWeight: "700" }}>
                                    BR
                                  </span>
                                  <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                    <span style={{ fontSize: "1.059cqw", fontWeight: "600", color: "#0f172a" }}>
                                      Bernardo Ribeiro
                                    </span>
                                    <span style={{ fontSize: "0.890cqw", color: "#7a8394" }}>
                                      Goleiro
                                    </span>
                                  </span>
                                  <span style={{ display: "flex", border: "1px solid #e3e7ee", borderRadius: "0.508cqw", overflow: "hidden", fontSize: "0.890cqw", fontWeight: "600" }}>
                                    <span style={{ padding: "0.424cqw 0.847cqw", background: "#12b77a", color: "#fff" }}>
                                      Presente
                                    </span>
                                    <span style={{ padding: "0.424cqw 0.847cqw", color: "#7a8394", background: "#fff" }}>
                                      Falta
                                    </span>
                                  </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.017cqw", padding: "0.847cqw 1.356cqw", borderTop: "1px solid #e3e7ee" }}>
                                  <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#9f1239", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.847cqw", fontWeight: "700" }}>
                                    GA
                                  </span>
                                  <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                    <span style={{ fontSize: "1.059cqw", fontWeight: "600", color: "#0f172a" }}>
                                      Gustavo Henrique Alves
                                    </span>
                                    <span style={{ fontSize: "0.890cqw", color: "#7a8394" }}>
                                      Zagueiro
                                    </span>
                                  </span>
                                  <span style={{ display: "flex", border: "1px solid #e3e7ee", borderRadius: "0.508cqw", overflow: "hidden", fontSize: "0.890cqw", fontWeight: "600" }}>
                                    <span style={{ padding: "0.424cqw 0.847cqw", background: "#12b77a", color: "#fff" }}>
                                      Presente
                                    </span>
                                    <span style={{ padding: "0.424cqw 0.847cqw", color: "#7a8394", background: "#fff" }}>
                                      Falta
                                    </span>
                                  </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.017cqw", padding: "0.847cqw 1.356cqw", borderTop: "1px solid #e3e7ee" }}>
                                  <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#9f1239", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.847cqw", fontWeight: "700" }}>
                                    TR
                                  </span>
                                  <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                    <span style={{ fontSize: "1.059cqw", fontWeight: "600", color: "#0f172a" }}>
                                      Theo Martins Rocha
                                    </span>
                                    <span style={{ fontSize: "0.890cqw", color: "#7a8394" }}>
                                      Lateral
                                    </span>
                                  </span>
                                  <span style={{ display: "flex", border: "1px solid #e3e7ee", borderRadius: "0.508cqw", overflow: "hidden", fontSize: "0.890cqw", fontWeight: "600" }}>
                                    <span style={{ padding: "0.424cqw 0.847cqw", background: "#12b77a", color: "#fff" }}>
                                      Presente
                                    </span>
                                    <span style={{ padding: "0.424cqw 0.847cqw", color: "#7a8394", background: "#fff" }}>
                                      Falta
                                    </span>
                                  </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.017cqw", padding: "0.847cqw 1.356cqw", borderTop: "1px solid #e3e7ee" }}>
                                  <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#9f1239", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.847cqw", fontWeight: "700" }}>
                                    PD
                                  </span>
                                  <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                    <span style={{ fontSize: "1.059cqw", fontWeight: "600", color: "#0f172a" }}>
                                      Pedro Augusto Dias
                                    </span>
                                    <span style={{ fontSize: "0.890cqw", color: "#7a8394" }}>
                                      Volante
                                    </span>
                                  </span>
                                  <span style={{ display: "flex", border: "1px solid #e3e7ee", borderRadius: "0.508cqw", overflow: "hidden", fontSize: "0.890cqw", fontWeight: "600" }}>
                                    <span style={{ padding: "0.424cqw 0.847cqw", background: "#12b77a", color: "#fff" }}>
                                      Presente
                                    </span>
                                    <span style={{ padding: "0.424cqw 0.847cqw", color: "#7a8394", background: "#fff" }}>
                                      Falta
                                    </span>
                                  </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.017cqw", padding: "0.847cqw 1.356cqw", borderTop: "1px solid #e3e7ee" }}>
                                  <span style={{ width: "2.373cqw", height: "2.373cqw", borderRadius: "50%", background: "#1d4ed8", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.847cqw", fontWeight: "700" }}>
                                    HN
                                  </span>
                                  <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                    <span style={{ fontSize: "1.059cqw", fontWeight: "600", color: "#0f172a" }}>
                                      Heitor Nascimento
                                    </span>
                                    <span style={{ fontSize: "0.890cqw", color: "#7a8394" }}>
                                      Meio-campo
                                    </span>
                                  </span>
                                  <span style={{ display: "flex", border: "1px solid #e3e7ee", borderRadius: "0.508cqw", overflow: "hidden", fontSize: "0.890cqw", fontWeight: "600" }}>
                                    <span style={{ padding: "0.424cqw 0.847cqw", background: "#12b77a", color: "#fff" }}>
                                      Presente
                                    </span>
                                    <span style={{ padding: "0.424cqw 0.847cqw", color: "#7a8394", background: "#fff" }}>
                                      Falta
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.763cqw 1.186cqw", borderRadius: "0.847cqw", background: "#fff", border: "1px solid #e3e7ee" }}>
                                <span style={{ fontSize: "0.975cqw", color: "#d97706" }}>
                                  ● 5 alterações sem salvar
                                </span>
                                <span style={{ padding: "0.593cqw 1.186cqw", borderRadius: "0.593cqw", background: "#1d4ed8", color: "#fff", fontSize: "0.975cqw", fontWeight: "700" }}>
                                  Salvar frequência
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </span>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                  {post.capaLegenda}
                </figcaption>
              </div>
            </figure>
          </>
        )}
        {" "}
        {(post.hasCapa) && (
          <>
            <figure style={{ margin: "0", padding: "clamp(24px,3vw,40px) clamp(20px,5vw,80px) 0" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={post.capa} target="_blank" rel="noopener noreferrer" aria-label="Ampliar capa" style={{ display: "block", borderRadius: "24px", overflow: "hidden", aspectRatio: "1672/941", backgroundImage: post.capaCss, backgroundSize: "cover", backgroundPosition: "center" }}></a>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                  {post.capaLegenda}
                </figcaption>
              </div>
            </figure>
          </>
        )}
        {" "}
        <div style={{ padding: "clamp(40px,5vw,72px) clamp(20px,5vw,80px) clamp(56px,7vw,96px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,80px)", alignItems: "flex-start" }}>
            <aside aria-label="Nesta publicação" className="aside-toc" style={{ flex: "0 1 220px", minWidth: "200px", position: "sticky", top: "110px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b72" }}>
                Nesta publicação
              </span>
              <nav style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #e1e1e6" }}>
                {(toc).map((t: any, i: number) => (
                  <Fragment key={i}>
                    <Link href={t.href} className="hv-8f4fb4" style={{ display: "flex", gap: "10px", padding: "7px 0 7px 14px", marginLeft: "-1px", borderLeft: "1px solid transparent", fontSize: "14px", lineHeight: "1.35", color: "#3a3a40" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", color: "#4030ff", fontVariantNumeric: "tabular-nums", paddingTop: "1px" }}>
                        {t.n}
                      </span>
                      {t.texto}
                    </Link>
                  </Fragment>
                ))}
              </nav>
            </aside>
            <div style={{ flex: "1 1 560px", minWidth: "0", maxWidth: "780px", display: "flex", flexDirection: "column", gap: "clamp(28px,3vw,40px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {(blocks).map((b: any, i: number) => (
                  <Fragment key={i}>
                    {(b.isP) && (
                      <>
                        <p style={{ margin: "0", width: "100%", fontSize: b.fs, lineHeight: b.lh, color: b.col, fontWeight: b.fw, letterSpacing: b.ls, textWrap: "pretty" }}>
                          {(b.segs).map((s: any, i: number) => (
                            <Fragment key={i}>
                              <span style={{ fontWeight: s.w, color: s.c, background: s.bg, padding: s.pad, borderRadius: "4px" }}>
                                {s.t}
                              </span>
                            </Fragment>
                          ))}
                        </p>
                      </>
                    )}
                    {" "}
                    {(b.isH2) && (
                      <>
                        <div id={b.anchor} style={{ margin: "36px 0 0", display: "flex", flexDirection: "column", gap: "16px", scrollMarginTop: "110px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "5px 15px 5px 5px", borderRadius: "999px", background: b.pillBg, color: b.pillInk, fontSize: "15px", fontWeight: "600", letterSpacing: "-.005em", lineHeight: "1" }}>
                            <span style={{ minWidth: "26px", height: "26px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: b.pillDot, color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                              {b.num}
                            </span>
                            {b.kicker}
                          </span>
                          <h2 style={{ margin: "0", fontFamily: "inherit", fontWeight: "500", fontSize: "clamp(28px,2.8vw,40px)", lineHeight: "1.08", letterSpacing: "-.04em", textWrap: "balance" }}>
                            {b.texto}
                          </h2>
                        </div>
                      </>
                    )}
                    {" "}
                    {(b.isQuote) && (
                      <>
                        <blockquote style={{ margin: "16px 0", width: "100%", boxSizing: "border-box", padding: "0", fontSize: "clamp(24px,2.4vw,34px)", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-.03em", color: "#101014", textWrap: "balance" }}>
                          “{b.texto}”
                        </blockquote>
                      </>
                    )}
                    {" "}
                    {(b.isHipoteses) && (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "8px 0" }}>
                          {(b.hipItems).map((hp: any, i: number) => (
                            <Fragment key={i}>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "18px clamp(18px,2.4vw,32px)", padding: "clamp(18px,2.2vw,26px)", borderRadius: "24px", background: hp.bg, alignItems: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: hp.lBg, color: hp.lFg, display: "grid", placeItems: "center", fontSize: "18px", fontWeight: "600" }}>
                                      {hp.l}
                                    </span>
                                    <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                                      {hp.t}
                                    </span>
                                  </div>
                                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#2f2f35", textWrap: "pretty" }}>
                                    {hp.ctx}
                                  </span>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "12px", borderTop: "1px solid rgba(16,16,20,.12)" }}>
                                    <span style={{ fontSize: "14px", lineHeight: "1.45" }}>
                                      <span style={{ fontWeight: "600" }}>
                                        {"Princípio: "}
                                      </span>
                                      {hp.princ}
                                    </span>
                                    <span style={{ fontSize: "14px", lineHeight: "1.45", color: hp.obsC }}>
                                      <span style={{ fontWeight: "600" }}>
                                        {hp.obsK}{": "}
                                      </span>
                                      {hp.obs}
                                    </span>
                                  </div>
                                </div>
                                {(hp.isA) && (
                                  <>
                                    <div role="img" aria-label={hp.alt} style={{ display: "flex", justifyContent: "center", padding: "clamp(14px,2vw,24px)", borderRadius: "18px", background: "#fff" }}>
                                      <div style={{ width: "min(100%,360px)" }}>
                                        <div style={{ containerType: "inline-size", width: "100%", fontFamily: "var(--font-jakarta),var(--font-space-grotesk),sans-serif" }}>
                                          <div style={{ display: "flex", flexDirection: "column", borderRadius: "3.810cqw", background: "#fff", overflow: "hidden", boxShadow: "0 2.381cqw 7.143cqw rgba(15,23,41,.18)" }}>
                                            <div style={{ display: "flex", gap: "2.857cqw", padding: "3.810cqw 4.286cqw", borderBottom: "1px solid #e3e7ee" }}>
                                              <span style={{ width: "7.619cqw", height: "7.619cqw", borderRadius: "1.905cqw", background: "#eef2ff", display: "grid", placeItems: "center" }}>
                                                <svg width="3.810cqw" height="3.810cqw" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "3.810cqw", height: "3.810cqw" }}>
                                                  <circle cx="12" cy="12" r="10" />
                                                  <path d="M12 6v6l4 2" />
                                                </svg>
                                              </span>
                                              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "0.714cqw" }}>
                                                <span style={{ fontSize: "3.810cqw", fontWeight: "700", color: "#0f172a" }}>
                                                  Sub-15
                                                </span>
                                                <span style={{ fontSize: "2.619cqw", color: "#7a8394" }}>
                                                  Segunda, 5 de outubro · 18:00 – 19:30
                                                </span>
                                                <span style={{ alignSelf: "flex-start", padding: "0.476cqw 1.429cqw", borderRadius: "0.952cqw", background: "#eef1f5", fontSize: "2.024cqw", fontWeight: "700", color: "#5d6577", letterSpacing: ".04em" }}>
                                                  GERADO DA TURMA
                                                </span>
                                              </span>
                                              <svg width="3.571cqw" height="3.571cqw" viewBox="0 0 24 24" fill="none" stroke="#7a8394" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "3.571cqw", height: "3.571cqw" }}>
                                                <path d="M18 6 6 18M6 6l12 12" />
                                              </svg>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "2.381cqw", padding: "3.333cqw 4.286cqw" }}>
                                              <span style={{ fontSize: "2.738cqw", color: "#3b4252" }}>
                                                Categoria de base, sub-15
                                              </span>
                                              <span style={{ fontSize: "2.143cqw", fontWeight: "700", letterSpacing: ".08em", color: "#7a8394" }}>
                                                TURMAS VINCULADAS
                                              </span>
                                              <span style={{ alignSelf: "flex-start", padding: "0.952cqw 2.381cqw", borderRadius: "999px", background: "#eef1f5", fontSize: "2.500cqw", fontWeight: "600", color: "#0f172a" }}>
                                                Sub-15
                                              </span>
                                              <span style={{ fontSize: "2.143cqw", fontWeight: "700", letterSpacing: ".08em", color: "#7a8394" }}>
                                                PARTICIPANTES · 6
                                              </span>
                                              <div style={{ display: "flex", alignItems: "center", gap: "2.381cqw" }}>
                                                <span style={{ width: "6.190cqw", height: "6.190cqw", borderRadius: "50%", background: "#0f7a55", color: "#fff", display: "grid", placeItems: "center", fontSize: "2.143cqw", fontWeight: "700" }}>
                                                  DO
                                                </span>
                                                <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                                  <span style={{ fontSize: "2.738cqw", fontWeight: "600", color: "#0f172a" }}>
                                                    Davi Lucca Oliveira
                                                  </span>
                                                  <span style={{ fontSize: "2.262cqw", color: "#7a8394" }}>
                                                    Atacante
                                                  </span>
                                                </span>
                                                <span style={{ fontSize: "2.024cqw", color: "#7a8394" }}>
                                                  via turma
                                                </span>
                                              </div>
                                              <div style={{ display: "flex", alignItems: "center", gap: "2.381cqw" }}>
                                                <span style={{ width: "6.190cqw", height: "6.190cqw", borderRadius: "50%", background: "#1d4ed8", color: "#fff", display: "grid", placeItems: "center", fontSize: "2.143cqw", fontWeight: "700" }}>
                                                  EF
                                                </span>
                                                <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                                  <span style={{ fontSize: "2.738cqw", fontWeight: "600", color: "#0f172a" }}>
                                                    Enzo Gabriel Ferreira
                                                  </span>
                                                  <span style={{ fontSize: "2.262cqw", color: "#7a8394" }}>
                                                    Volante
                                                  </span>
                                                </span>
                                                <span style={{ fontSize: "2.024cqw", color: "#7a8394" }}>
                                                  via turma
                                                </span>
                                              </div>
                                              <div style={{ display: "flex", alignItems: "center", gap: "2.381cqw" }}>
                                                <span style={{ width: "6.190cqw", height: "6.190cqw", borderRadius: "50%", background: "#c2410c", color: "#fff", display: "grid", placeItems: "center", fontSize: "2.143cqw", fontWeight: "700" }}>
                                                  JS
                                                </span>
                                                <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                                  <span style={{ fontSize: "2.738cqw", fontWeight: "600", color: "#0f172a" }}>
                                                    João Pedro Silva
                                                  </span>
                                                  <span style={{ fontSize: "2.262cqw", color: "#7a8394" }}>
                                                    Goleiro
                                                  </span>
                                                </span>
                                                <span style={{ fontSize: "2.024cqw", color: "#7a8394" }}>
                                                  via turma
                                                </span>
                                              </div>
                                              <div style={{ display: "flex", alignItems: "center", gap: "2.381cqw" }}>
                                                <span style={{ width: "6.190cqw", height: "6.190cqw", borderRadius: "50%", background: "#334155", color: "#fff", display: "grid", placeItems: "center", fontSize: "2.143cqw", fontWeight: "700" }}>
                                                  LS
                                                </span>
                                                <span style={{ flex: "1", display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                                                  <span style={{ fontSize: "2.738cqw", fontWeight: "600", color: "#0f172a" }}>
                                                    Lucas Almeida Souza
                                                  </span>
                                                  <span style={{ fontSize: "2.262cqw", color: "#7a8394" }}>
                                                    Zagueiro
                                                  </span>
                                                </span>
                                                <span style={{ fontSize: "2.024cqw", color: "#7a8394" }}>
                                                  via turma
                                                </span>
                                              </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "3.810cqw", padding: "2.857cqw 4.286cqw", background: "#f7f8fa", borderTop: "1px solid #e3e7ee" }}>
                                              <span style={{ fontSize: "2.738cqw", fontWeight: "600", color: "#3b4252" }}>
                                                Fechar
                                              </span>
                                              <span style={{ padding: "1.905cqw 3.333cqw", borderRadius: "1.905cqw", background: "#12b77a", color: "#fff", fontSize: "2.738cqw", fontWeight: "700" }}>
                                                Registrar frequência
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                                {(hp.isC) && (
                                  <>
                                    <div role="img" aria-label={hp.alt} style={{ padding: "clamp(12px,1.6vw,20px)", borderRadius: "18px", background: "#fff" }}>
                                      <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 24px rgba(19,33,58,.12)" }}>
                                        <div style={{ containerType: "inline-size", width: "100%", fontFamily: "var(--font-jakarta),var(--font-space-grotesk),sans-serif" }}>
                                          <div style={{ display: "flex", flexDirection: "column", gap: "2.763cqw", padding: "4.144cqw", background: "#eef1f5" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "0.460cqw" }}>
                                              <span style={{ fontSize: "4.606cqw", fontWeight: "700", color: "#0f172a" }}>
                                                Frequência
                                              </span>
                                              <span style={{ fontSize: "2.532cqw", color: "#7a8394" }}>
                                                Registre presença, analise histórico e atue sobre evasões
                                              </span>
                                            </div>
                                            <div style={{ display: "flex", gap: "0.921cqw", borderBottom: "1px solid #e3e7ee" }}>
                                              <span style={{ padding: "1.612cqw 2.763cqw", fontSize: "2.763cqw", fontWeight: "600", color: "#1d4ed8", borderBottom: "2px solid #1d4ed8", marginBottom: "-1px" }}>
                                                Registrar
                                              </span>
                                              <span style={{ padding: "1.612cqw 2.763cqw", fontSize: "2.763cqw", fontWeight: "500", color: "#3b4252", borderBottom: "2px solid transparent", marginBottom: "-1px" }}>
                                                Histórico
                                              </span>
                                              <span style={{ padding: "1.612cqw 2.763cqw", fontSize: "2.763cqw", fontWeight: "500", color: "#3b4252", borderBottom: "2px solid transparent", marginBottom: "-1px" }}>
                                                Ranking
                                              </span>
                                              <span style={{ padding: "1.612cqw 2.763cqw", fontSize: "2.763cqw", fontWeight: "500", color: "#3b4252", borderBottom: "2px solid transparent", marginBottom: "-1px" }}>
                                                Alertas de evasão
                                              </span>
                                            </div>
                                            <div style={{ display: "flex", gap: "2.303cqw" }}>
                                              <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "0.921cqw", padding: "2.763cqw 3.224cqw", borderRadius: "2.303cqw", background: "#fff", border: "1px solid #e3e7ee" }}>
                                                <span style={{ fontSize: "2.188cqw", fontWeight: "600", letterSpacing: ".06em", color: "#7a8394" }}>
                                                  TREINOS HOJE
                                                </span>
                                                <span style={{ fontSize: "4.606cqw", fontWeight: "700", color: "#0f172a" }}>
                                                  1
                                                </span>
                                              </div>
                                              <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "0.921cqw", padding: "2.763cqw 3.224cqw", borderRadius: "2.303cqw", background: "#fff", border: "1px solid #e3e7ee" }}>
                                                <span style={{ fontSize: "2.188cqw", fontWeight: "600", letterSpacing: ".06em", color: "#7a8394" }}>
                                                  PENDENTES
                                                </span>
                                                <span style={{ fontSize: "4.606cqw", fontWeight: "700", color: "#d97706" }}>
                                                  1
                                                </span>
                                              </div>
                                              <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "0.921cqw", padding: "2.763cqw 3.224cqw", borderRadius: "2.303cqw", background: "#fff", border: "1px solid #e3e7ee" }}>
                                                <span style={{ fontSize: "2.188cqw", fontWeight: "600", letterSpacing: ".06em", color: "#7a8394" }}>
                                                  REGISTRADAS
                                                </span>
                                                <span style={{ fontSize: "4.606cqw", fontWeight: "700", color: "#12b77a" }}>
                                                  0
                                                </span>
                                              </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "2.879cqw", fontWeight: "700", color: "#0f172a" }}>
                                              <span>
                                                Chamada de hoje · 09/10/2026
                                              </span>
                                              <span style={{ fontSize: "2.418cqw", fontWeight: "500", color: "#7a8394" }}>
                                                Quinta
                                              </span>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "1.381cqw", padding: "3.224cqw", borderRadius: "2.303cqw", background: "#fff", border: "1.5px solid #f5d77a", maxWidth: "100%" }}>
                                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <span style={{ fontSize: "2.994cqw", fontWeight: "700", color: "#0f172a" }}>
                                                  Sub-17
                                                </span>
                                                <span style={{ padding: "0.460cqw 1.843cqw", borderRadius: "999px", background: "#fef3c7", color: "#b45309", fontSize: "1.957cqw", fontWeight: "800", letterSpacing: ".04em" }}>
                                                  PENDENTE
                                                </span>
                                              </div>
                                              <span style={{ fontSize: "2.418cqw", color: "#7a8394" }}>
                                                19:00 – 20:30 · 5 atletas
                                              </span>
                                              <span style={{ display: "flex", alignItems: "center", gap: "0.921cqw", fontSize: "2.532cqw", fontWeight: "600", color: "#1d4ed8" }}>
                                                {"Registrar agora "}
                                                <svg width="2.532cqw" height="2.532cqw" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", width: "2.532cqw", height: "2.532cqw" }}>
                                                  <path d="M5 12h14M13 6l6 6-6 6" />
                                                </svg>
                                              </span>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "1.843cqw", padding: "2.763cqw 3.224cqw", borderRadius: "2.303cqw", background: "#fff", border: "1px solid #e3e7ee" }}>
                                              <span style={{ fontSize: "2.418cqw", fontWeight: "600", color: "#3b4252" }}>
                                                Registrar outra data ou turma
                                              </span>
                                              <div style={{ display: "flex", gap: "1.843cqw" }}>
                                                <span style={{ flex: "1", padding: "1.843cqw 2.303cqw", borderRadius: "1.612cqw", border: "1px solid #e3e7ee", fontSize: "2.532cqw", color: "#0f172a" }}>
                                                  Selecione uma turma...
                                                </span>
                                                <span style={{ padding: "1.843cqw 2.303cqw", borderRadius: "1.612cqw", border: "1px solid #e3e7ee", fontSize: "2.532cqw", color: "#0f172a" }}>
                                                  09/10/2026
                                                </span>
                                                <span style={{ padding: "1.843cqw 2.763cqw", borderRadius: "1.612cqw", background: "#a5b4fc", color: "#fff", fontSize: "2.532cqw", fontWeight: "700" }}>
                                                  Abrir
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                                {(hp.noImg) && (
                                  <>
                                    <div style={{ display: "flex", justifyContent: "center", padding: "clamp(12px,1.6vw,20px)", borderRadius: "18px", background: "#fff" }}>
                                      <div style={{ width: "min(100%,230px)", aspectRatio: "393/852", boxSizing: "border-box", padding: "6px", borderRadius: "36px", background: "#1d1e1b", boxShadow: "0 14px 30px rgba(16,16,20,.18)" }}>
                                        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "30px", overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column", fontFamily: "var(--font-jakarta),var(--font-space-grotesk),sans-serif" }}>
                                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 0", fontSize: "9px", fontWeight: "700", color: "#101014" }}>
                                            <span>
                                              9:41
                                            </span>
                                            <span style={{ width: "52px", height: "14px", borderRadius: "999px", background: "#101014", display: "block" }}></span>
                                            <span>
                                              ●●▮
                                            </span>
                                          </div>
                                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 14px 4px" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                              <span style={{ fontSize: "8px", color: "#8a8b86" }}>
                                                Sábado, 21 de junho
                                              </span>
                                              <span style={{ fontSize: "14px", fontWeight: "800", letterSpacing: "-.02em", color: "#101014" }}>
                                                Olá, Eric
                                              </span>
                                            </div>
                                            <span style={{ width: "26px", height: "26px", borderRadius: "8px", overflow: "hidden", background: "#c4e21a", display: "block", backgroundImage: "url('/assets/logos/athletto.png')", backgroundSize: "cover", backgroundPosition: "center" }}></span>
                                          </div>
                                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "10px 12px" }}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                              <span style={{ fontSize: "11px", fontWeight: "800", color: "#101014" }}>
                                                Agenda de hoje
                                              </span>
                                              <span style={{ padding: "3px 8px", borderRadius: "999px", border: "1px solid #101014", fontSize: "8px", fontWeight: "700" }}>
                                                Ver tudo
                                              </span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "stretch", gap: "8px" }}>
                                              <span style={{ flex: "0 0 30px", paddingTop: "9px", fontSize: "9px", fontWeight: "700", color: "#8a8b86" }}>
                                                07:30
                                              </span>
                                              <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "7px", padding: "8px 9px", borderRadius: "11px", background: "#fff", border: "1px solid #e4e4e0" }}>
                                                <div style={{ display: "flex", gap: "6px" }}>
                                                  <span style={{ width: "3px", borderRadius: "2px", background: "#2f6fdf", display: "block" }}></span>
                                                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                                    <span style={{ fontSize: "10px", fontWeight: "700", color: "#101014" }}>
                                                      Reforço físico
                                                    </span>
                                                    <span style={{ fontSize: "8px", color: "#8a8b86" }}>
                                                      Academia · 1h
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "stretch", gap: "8px" }}>
                                              <span style={{ flex: "0 0 30px", paddingTop: "9px", fontSize: "9px", fontWeight: "700", color: "#101014" }}>
                                                18:00
                                              </span>
                                              <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "7px", padding: "8px 9px", borderRadius: "11px", background: "#c6f24e", border: "1px solid #c6f24e" }}>
                                                <div style={{ display: "flex", gap: "6px" }}>
                                                  <span style={{ width: "3px", borderRadius: "2px", background: "#101014", display: "block" }}></span>
                                                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                                    <span style={{ fontSize: "10px", fontWeight: "700", color: "#101014" }}>
                                                      Treino tático
                                                    </span>
                                                    <span style={{ fontSize: "8px", color: "#3a4a12" }}>
                                                      Campo 2 · 1h30
                                                    </span>
                                                  </div>
                                                </div>
                                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", padding: "6px", borderRadius: "999px", background: "#101014", color: "#c6f24e", fontSize: "9px", fontWeight: "700" }}>
                                                  Registrar frequência →
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "8px 6px", borderRadius: "999px", background: "#1d1e1b" }}>
                                            <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#c6f24e", display: "grid", placeItems: "center" }}>
                                              <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#101014", display: "block" }}></span>
                                            </span>
                                            <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "transparent", display: "grid", placeItems: "center" }}>
                                              <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#8a8b86", display: "block" }}></span>
                                            </span>
                                            <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "transparent", display: "grid", placeItems: "center" }}>
                                              <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#8a8b86", display: "block" }}></span>
                                            </span>
                                            <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "transparent", display: "grid", placeItems: "center" }}>
                                              <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#8a8b86", display: "block" }}></span>
                                            </span>
                                            <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "transparent", display: "grid", placeItems: "center" }}>
                                              <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#8a8b86", display: "block" }}></span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </>
                    )}
                    {" "}
                    {(b.isFluxo) && (
                      <>
                        <figure style={{ margin: "8px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "10px" }}>
                            {(b.fluxoItems).map((fx: any, i: number) => (
                              <Fragment key={i}>
                                <div style={{ flex: "1 1 180px", minWidth: "0", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "18px", padding: "clamp(18px,2vw,24px)", borderRadius: "22px", background: fx.bg, color: fx.fg }}>
                                  <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: fx.kc }}>
                                    {fx.k}
                                  </span>
                                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{ fontSize: "clamp(34px,3.4vw,48px)", fontWeight: "500", letterSpacing: "-.045em", lineHeight: "1" }}>
                                      {fx.v}
                                    </span>
                                    <span style={{ fontSize: "15px", lineHeight: "1.4" }}>
                                      {fx.d}
                                    </span>
                                  </span>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                          <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                            {b.legenda}
                          </figcaption>
                        </figure>
                      </>
                    )}
                    {" "}
                    {(b.isChips) && (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(18px,2.2vw,26px)", borderRadius: "22px", background: "#f1f0f5" }}>
                          <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#5d5d63" }}>
                            {b.titulo}
                          </span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {(b.chipItems).map((c: any, i: number) => (
                              <Fragment key={i}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 14px", borderRadius: "999px", background: "#fff", fontSize: "15px", fontWeight: "500" }}>
                                  <span style={{ width: c.sz, height: c.sz, borderRadius: c.rad, background: c.dot, backgroundImage: c.iconCss, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "block", flexShrink: "0" }}></span>
                                  {c.t}
                                </span>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {" "}
                    {(b.isDestaque) && (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "clamp(22px,2.6vw,32px)", borderRadius: "24px", background: b.bg, color: b.fg }}>
                          <span style={{ alignSelf: "flex-start", padding: "5px 12px", borderRadius: "999px", background: b.tagBg, color: b.tagFg, fontSize: "12px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase" }}>
                            {b.rotulo}
                          </span>
                          <span style={{ fontSize: "clamp(20px,1.9vw,26px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-.025em", textWrap: "pretty" }}>
                            {b.titulo}
                          </span>
                          <span style={{ fontSize: "16px", lineHeight: "1.6", color: b.sub, textWrap: "pretty" }}>
                            {b.texto}
                          </span>
                        </div>
                      </>
                    )}
                    {" "}
                    {(b.isTiles) && (
                      <>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "10px" }}>
                          {(b.tileItems).map((tl: any, i: number) => (
                            <Fragment key={i}>
                              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px", minHeight: "150px", padding: "clamp(18px,2vw,24px)", borderRadius: "22px", background: tl.bg, color: tl.fg }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: tl.kc }}>
                                  <span style={{ fontVariantNumeric: "tabular-nums" }}>
                                    {tl.n}
                                  </span>
                                  {tl.k}
                                </span>
                                <span style={{ fontSize: "clamp(19px,1.7vw,23px)", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-.025em", textWrap: "balance" }}>
                                  {tl.t}
                                </span>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </>
                    )}
                    {" "}
                    {(b.isPhones) && (
                      <>
                        <figure style={{ margin: "8px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
                          <div data-m="row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "clamp(16px,2vw,28px)", padding: "clamp(20px,2.6vw,32px)", borderRadius: "24px", background: "#f1f0f5" }}>
                            {(b.phoneItems).map((ph: any, i: number) => (
                              <Fragment key={i}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                                  <Link href={ph.src} target="_blank" aria-label={`Ampliar ${ph.titulo}`} style={{ display: "block" }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={ph.src} loading="lazy" alt={ph.titulo} style={{ display: "block", width: "100%", maxWidth: "260px", height: "auto", margin: "0 auto" }} />
                                  </Link>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em" }}>
                                      <span style={{ fontSize: "12px", color: "#0b5d63", fontVariantNumeric: "tabular-nums" }}>
                                        {ph.n}
                                      </span>
                                      {ph.titulo}
                                    </span>
                                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a40", textWrap: "pretty" }}>
                                      {ph.d}
                                    </span>
                                  </div>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                          <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                            {b.legenda}
                          </figcaption>
                        </figure>
                      </>
                    )}
                    {" "}
                    {(b.isRoles) && (
                      <>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "0 clamp(20px,2.4vw,32px)", margin: "8px 0" }}>
                          {(b.roleItems).map((r: any, i: number) => (
                            <Fragment key={i}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "16px", borderTop: `2px solid ${r.line}`, minWidth: "0" }}>
                                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: r.ink }}>
                                  {r.k}
                                </span>
                                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.015em", lineHeight: "1.3" }}>
                                  {r.t}
                                </span>
                                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3a3a40", textWrap: "pretty" }}>
                                  {r.d}
                                </span>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </>
                    )}
                    {" "}
                    {(b.isProcess) && (
                      <>
                        <figure style={{ margin: "8px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(16px,2.4vw,40px)" }}>
                            {(b.flows).map((fl: any, i: number) => (
                              <Fragment key={i}>
                                <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                                  <span style={{ paddingBottom: "12px", borderBottom: "1px solid #101014", fontSize: "13px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: fl.ink }}>
                                    {fl.titulo}
                                  </span>
                                  {(fl.passos).map((s: any, i: number) => (
                                    <Fragment key={i}>
                                      <div style={{ display: "flex", alignItems: "baseline", gap: "14px", padding: "12px 0", borderBottom: "1px solid #e1e1e6" }}>
                                        <span style={{ fontSize: "13px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: s.numInk }}>
                                          {s.n}
                                        </span>
                                        <span style={{ flex: "1", fontSize: "16px", lineHeight: "1.45", fontWeight: s.weight, color: s.ink }}>
                                          {s.t}
                                        </span>
                                        {(s.novo) && (
                                          <>
                                            <span style={{ padding: "2px 8px", borderRadius: "999px", background: "#eceaff", color: "#2a1fb3", fontSize: "11px", fontWeight: "600", whiteSpace: "nowrap" }}>
                                              Novo
                                            </span>
                                          </>
                                        )}
                                      </div>
                                    </Fragment>
                                  ))}
                                </div>
                              </Fragment>
                            ))}
                          </div>
                          <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                            {b.legenda}
                          </figcaption>
                        </figure>
                      </>
                    )}
                    {" "}
                    {(b.isDsboard) && (
                      <>
                        <figure style={{ margin: "12px 0", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "var(--font-poppins),var(--font-space-grotesk),sans-serif" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "1px", background: "#e7e7ee", border: "1px solid #e7e7ee", borderRadius: "24px", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "clamp(18px,2.2vw,26px)", background: "#fff", minWidth: "0" }}>
                              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b78" }}>
                                Cores semânticas
                              </span>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "12px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                                  <span style={{ height: "52px", borderRadius: "12px", background: "#6a2bf0", display: "block" }}></span>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Primária
                                  </span>
                                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", color: "#6b6b78", overflowWrap: "anywhere" }}>
                                    --color-primary
                                  </code>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                                  <span style={{ height: "52px", borderRadius: "12px", background: "#1c1c22", display: "block" }}></span>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Texto
                                  </span>
                                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", color: "#6b6b78", overflowWrap: "anywhere" }}>
                                    --color-text
                                  </code>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                                  <span style={{ height: "52px", borderRadius: "12px", background: "#f7f7fb", border: "1px solid #e7e7ee", display: "block" }}></span>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Superfície
                                  </span>
                                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", color: "#6b6b78", overflowWrap: "anywhere" }}>
                                    --color-surface
                                  </code>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                                  <span style={{ height: "52px", borderRadius: "12px", background: "#22c55e", display: "block" }}></span>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Sucesso
                                  </span>
                                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", color: "#6b6b78", overflowWrap: "anywhere" }}>
                                    --color-success
                                  </code>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                                  <span style={{ height: "52px", borderRadius: "12px", background: "#ef4444", display: "block" }}></span>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Erro
                                  </span>
                                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", color: "#6b6b78", overflowWrap: "anywhere" }}>
                                    --color-danger
                                  </code>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                                  <span style={{ height: "52px", borderRadius: "12px", background: "#3b82f6", display: "block" }}></span>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Info
                                  </span>
                                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", color: "#6b6b78", overflowWrap: "anywhere" }}>
                                    --color-info
                                  </code>
                                </div>
                              </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "clamp(18px,2.2vw,26px)", background: "#fff", minWidth: "0" }}>
                              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b78" }}>
                                Componentes e estados
                              </span>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 14px", borderRadius: "10px", background: "#6a2bf0", color: "#fff", fontSize: "12px", fontWeight: "600" }}>
                                  + Novo evento
                                </span>
                                <span style={{ padding: "9px 14px", borderRadius: "10px", border: "1px solid #e7e7ee", background: "#fff", color: "#1c1c22", fontSize: "12px", fontWeight: "600" }}>
                                  Próximo
                                </span>
                                <span style={{ padding: "9px 14px", borderRadius: "10px", background: "#6a2bf0", color: "#fff", opacity: ".4", fontSize: "12px", fontWeight: "600" }}>
                                  Desabilitado
                                </span>
                              </div>
                              <div style={{ display: "inline-flex", alignSelf: "flex-start", border: "1px solid #e7e7ee", borderRadius: "10px", overflow: "hidden", fontSize: "11px", fontWeight: "500", color: "#1c1c22" }}>
                                <span style={{ padding: "7px 12px", background: "#f3f3f7" }}>
                                  Todos
                                </span>
                                <span style={{ padding: "7px 12px", borderLeft: "1px solid #e7e7ee" }}>
                                  Em aberto
                                </span>
                                <span style={{ padding: "7px 12px", borderLeft: "1px solid #e7e7ee" }}>
                                  Finalizados
                                </span>
                              </div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 9px", borderRadius: "999px", background: "#e7f8ee", color: "#15803d", fontSize: "11px", fontWeight: "600" }}>
                                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#15803d", display: "block" }}></span>
                                  Esportes
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 9px", borderRadius: "999px", background: "#e8f0fe", color: "#2563eb", fontSize: "11px", fontWeight: "600" }}>
                                  Festivais
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 9px", borderRadius: "999px", background: "#fdecec", color: "#dc2626", fontSize: "11px", fontWeight: "600" }}>
                                  Shows
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 9px", borderRadius: "999px", background: "#fce8f6", color: "#be185d", fontSize: "11px", fontWeight: "600" }}>
                                  Workshops
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 9px", borderRadius: "999px", background: "#f1f1f5", color: "#55556a", fontSize: "11px", fontWeight: "600" }}>
                                  +4
                                </span>
                              </div>
                              <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", border: "1px solid #e7e7ee", background: "#fff", fontSize: "12px", color: "#9a9aa8" }}>
                                ⌕ Buscar
                              </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "clamp(18px,2.2vw,26px)", background: "#fff", minWidth: "0" }}>
                              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#6b6b78" }}>
                                Cartões e dados
                              </span>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                <div style={{ flex: "1 1 140px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", borderRadius: "16px", background: "#fff", border: "1px solid #e7e7ee", color: "#1c1c22" }}>
                                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                                    <span style={{ color: "#6a2bf0" }}>
                                      ★
                                    </span>
                                    Total de eventos
                                  </span>
                                  <span style={{ fontSize: "11px", color: "#6b6b78" }}>
                                    Lançados por você
                                  </span>
                                  <span style={{ marginTop: "6px", fontSize: "22px", fontWeight: "700", color: "#6a2bf0", letterSpacing: "-.02em" }}>
                                    10
                                  </span>
                                </div>
                                <div style={{ flex: "1 1 140px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", borderRadius: "16px", background: "#6a2bf0", border: "1px solid #6a2bf0", color: "#fff" }}>
                                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                                    <span style={{ color: "#fff" }}>
                                      ★
                                    </span>
                                    Em aberto
                                  </span>
                                  <span style={{ fontSize: "11px", color: "#e4dbff" }}>
                                    Eventos abertos
                                  </span>
                                  <span style={{ marginTop: "6px", fontSize: "22px", fontWeight: "700", color: "#fff", letterSpacing: "-.02em" }}>
                                    04
                                  </span>
                                </div>
                              </div>
                              <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr auto", gap: "10px", alignItems: "center", padding: "9px 0", borderTop: "1px solid #e7e7ee" }}>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Festival de Inverno
                                  </span>
                                  <span style={{ height: "6px", borderRadius: "999px", background: "#ecebf3", overflow: "hidden", display: "block" }}>
                                    <span style={{ display: "block", width: "62%", height: "100%", background: "#6a2bf0", borderRadius: "999px" }}></span>
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#1c1c22", fontVariantNumeric: "tabular-nums" }}>
                                    60
                                  </span>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr auto", gap: "10px", alignItems: "center", padding: "9px 0", borderTop: "1px solid #e7e7ee" }}>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Feira de Inovação
                                  </span>
                                  <span style={{ height: "6px", borderRadius: "999px", background: "#ecebf3", overflow: "hidden", display: "block" }}>
                                    <span style={{ display: "block", width: "74%", height: "100%", background: "#6a2bf0", borderRadius: "999px" }}></span>
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#1c1c22", fontVariantNumeric: "tabular-nums" }}>
                                    72
                                  </span>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr auto", gap: "10px", alignItems: "center", padding: "9px 0", borderTop: "1px solid #e7e7ee" }}>
                                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1c22" }}>
                                    Festival de Música
                                  </span>
                                  <span style={{ height: "6px", borderRadius: "999px", background: "#ecebf3", overflow: "hidden", display: "block" }}>
                                    <span style={{ display: "block", width: "90%", height: "100%", background: "#6a2bf0", borderRadius: "999px" }}></span>
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#1c1c22", fontVariantNumeric: "tabular-nums" }}>
                                    91
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "clamp(18px,2.2vw,26px)", background: "#14121c", minWidth: "0" }}>
                              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#b9a6ff" }}>
                                No código
                              </span>
                              <pre style={{ margin: "0", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px", lineHeight: "1.7", color: "#e4e4ec", whiteSpace: "pre-wrap" }}>
                                <span style={{ color: "#8a8e99" }}>
                                  {"<!-- mesmo token, mesmo componente -->"}
                                </span>
                                {" <"}
                                <span style={{ color: "#b9a6ff" }}>
                                  BaseButton
                                </span>
                                {" variant="}
                                <span style={{ color: "#c9e3a6" }}>
                                  {'"primary"'}
                                </span>
                                {"> + Novo evento </"}
                                <span style={{ color: "#b9a6ff" }}>
                                  BaseButton
                                </span>
                                {"> <"}
                                <span style={{ color: "#b9a6ff" }}>
                                  StatCard
                                </span>
                                {" :highlight="}
                                <span style={{ color: "#c9e3a6" }}>
                                  {'"true"'}
                                </span>
                                {" /> "}
                                <span style={{ color: "#8a8e99" }}>
                                  {'/* tokens */'}
                                </span>
                                {" background: var("}
                                <span style={{ color: "#c9e3a6" }}>
                                  --color-primary
                                </span>
                                ); border-radius: var(
                                <span style={{ color: "#c9e3a6" }}>
                                  --radius-md
                                </span>
                                );
                              </pre>
                            </div>
                          </div>
                          <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                            {b.legenda}
                          </figcaption>
                        </figure>
                      </>
                    )}
                    {" "}
                    {(b.isStat) && (
                      <>
                        <figure style={{ margin: "8px 0", width: "100%", display: "flex", flexDirection: "column", gap: "12px", padding: "22px 0", borderTop: "1px solid #101014", borderBottom: "1px solid #e1e1e6" }}>
                          <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#4030ff" }}>
                            {b.contexto}
                          </span>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px clamp(16px,2.4vw,32px)" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span style={{ fontSize: "clamp(34px,3.6vw,52px)", fontWeight: "500", letterSpacing: "-.045em", lineHeight: "1", color: "#9a9aa2" }}>
                                {b.de}
                              </span>
                              <span style={{ fontSize: "14px", color: "#6b6b72" }}>
                                {b.deLabel}
                              </span>
                            </span>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4030ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "28px" }}>
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span style={{ fontSize: "clamp(34px,3.6vw,52px)", fontWeight: "500", letterSpacing: "-.045em", lineHeight: "1", color: "#101014" }}>
                                {b.para}
                              </span>
                              <span style={{ fontSize: "14px", color: "#6b6b72" }}>
                                {b.paraLabel}
                              </span>
                            </span>
                          </div>
                          <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b6b72" }}>
                            {b.legenda}
                          </figcaption>
                        </figure>
                      </>
                    )}
                  </Fragment>
                ))}
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", paddingTop: "28px", marginTop: "40px", borderTop: "1px solid #101014" }}>
                <div style={{ position: "absolute", right: "24px", bottom: "100%" }}>
                  <Mascote mode="work" size={2} />
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                    {relTitle}
                  </span>
                  <Link href="/exploracoes" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                    Todas as explorações
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "12px" }}>
                  {(related).map((r: any, i: number) => (
                    <Fragment key={i}>
                      <Link href={r.href} className="hv-1e91ec" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "18px 20px", borderRadius: "18px", background: "#fff", border: "1px solid #e6e6eb", color: "#101014" }}>
                        <span style={{ alignSelf: "flex-start", padding: "3px 9px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", background: r.bg, color: r.ink }}>
                          {r.cat}
                        </span>
                        <span style={{ fontSize: "17px", fontWeight: "500", lineHeight: "1.3", letterSpacing: "-.015em" }}>
                          {r.titulo}
                        </span>
                        <span style={{ fontSize: "13px", color: "#6b6b72" }}>
                          {r.leitura}{" de leitura"}
                        </span>
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {" "}
      <footer style={{ padding: "0 clamp(20px,5vw,80px) 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", paddingTop: "24px", borderTop: "1px solid #dcdce2", fontSize: "14px", color: "#5d5d63" }}>
          <span>
            © {ano} Eric Luz · Product Designer
          </span>
          <Link href="/#projetos" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            {"Projetos "}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}
