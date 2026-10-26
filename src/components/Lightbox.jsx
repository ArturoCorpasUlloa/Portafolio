import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// images: lista de rutas · index: imagen actual · label: nombre accesible del visor
// onChange/onClose controlan el estado desde el padre
export default function Lightbox({ images, index, label = '', onChange, onClose }) {
  const { t } = useLanguage();
  const n = images.length;
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  // Al abrir: enfoca el visor, bloquea el scroll del fondo y, al cerrar, devuelve el foco a quien lo abrió
  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, []);

  const go = (step) => onChange((index + step + n) % n);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
    if (n > 1 && e.key === 'ArrowRight') { e.preventDefault(); go(1); return; }
    if (n > 1 && e.key === 'ArrowLeft') { e.preventDefault(); go(-1); return; }
    if (e.key === 'Tab') {
      // Trampa de foco: Tab y Shift+Tab se quedan dentro del visor
      const items = dialogRef.current?.querySelectorAll('button');
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };

  return (
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label={t.close}><span aria-hidden="true">✕</span></button>
      {n > 1 && <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label={t.lightbox.prev}><span aria-hidden="true">‹</span></button>}
      <img src={`./img/${images[index]}`} alt={label ? `${label}${n > 1 ? ` (${index + 1}/${n})` : ''}` : ''} />
      {n > 1 && <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label={t.lightbox.next}><span aria-hidden="true">›</span></button>}
      {n > 1 && <p className="lightbox__count" aria-live="polite">{t.lightbox.counter(index + 1, n)}</p>}
    </div>
  );
}
