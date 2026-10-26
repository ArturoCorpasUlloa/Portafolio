import { createContext, useContext, useEffect, useState } from 'react';
import es from './es';
import en from './en';

const dictionaries = { es, en };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'es'; } catch { return 'es'; }
  });
  const t = dictionaries[lang];
  useEffect(() => {
    // Mantiene sincronizados el idioma del documento, el título y la descripción
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try { localStorage.setItem('lang', lang); } catch { /* sin almacenamiento */ }
  }, [lang, t]);
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));
  // pick: elige el texto según idioma en datos con forma { es, en }; si es texto plano lo devuelve igual
  const pick = (value) => (value && typeof value === 'object' && 'es' in value ? value[lang] : value);
  return <LanguageContext.Provider value={{ lang, toggle, t, pick }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
