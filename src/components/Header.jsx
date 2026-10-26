import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const links = ['about', 'services', 'skills', 'experience', 'education', 'route', 'projects', 'contact'];

export default function Header() {
  const { lang, toggle, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);

  // Escape cierra el menú móvil y devuelve el foco al botón
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); burgerRef.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">Arturo Corpas Ulloa</a>
        <button ref={burgerRef} type="button" className="burger" onClick={() => setOpen(!open)} aria-label={t.menu} aria-expanded={open} aria-controls="site-nav">
          <span aria-hidden="true">☰</span>
        </button>
        <nav id="site-nav" aria-label={t.nav.label} className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {links.map((id) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t.nav[id]}</a>)}
          <button type="button" className="lang" onClick={toggle} aria-label={t.langSwitch} title={t.langSwitch}>{lang === 'es' ? 'EN' : 'ES'}</button>
        </nav>
      </div>
    </header>
  );
}
