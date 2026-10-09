import type { Post } from '@/content/types';

/**
 * Tempo de leitura como no protótipo: palavras (2+ letras) de todos os textos
 * dos blocos ÷ 200 wpm, arredondado, mínimo 1. `post.leitura` tem prioridade.
 */
export function tempoLeitura(post: Post): string {
  if (post.leitura) return post.leitura;
  const txt = JSON.stringify(post.conteudo ?? []).replace(/"[a-zA-Z]+":/g, ' ');
  const palavras = (txt.match(/[A-Za-zÀ-ú]{2,}/g) ?? []).length;
  return Math.max(1, Math.round(palavras / 200)) + ' min';
}

export function metaPost(post: Post): string {
  return [post.empresa, post.data, tempoLeitura(post) + ' de leitura'].filter(Boolean).join(' · ');
}
