'use client';
import { useEffect } from 'react';

/** Registra o Web Component <eric-mascote> no browser (uma vez por sessão). */
export function MascoteLoader() {
  useEffect(() => {
    import('./mascote-element.js');
  }, []);
  return null;
}
