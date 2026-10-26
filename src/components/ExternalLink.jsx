import { useLanguage } from '../i18n/LanguageContext';

// Enlace externo: avisa a lectores de pantalla que abre una pestaña nueva
export default function ExternalLink({ href, className, ariaLabel, children }) {
  const { t } = useLanguage();
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel ? `${ariaLabel} (${t.newTab})` : undefined}
    >
      {children}
      {!ariaLabel && <span className="sr-only"> ({t.newTab})</span>}
    </a>
  );
}
