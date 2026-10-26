import { useLanguage } from '../i18n/LanguageContext';

export default function CertCard({ cert, onOpen }) {
  const { t, pick } = useLanguage();
  const title = pick(cert.title);
  return (
    <article className="cert">
      <button type="button" className="cert__thumb" onClick={onOpen} aria-label={t.certificates.view(title)}>
        <img src={`./img/${cert.image}`} alt="" loading="lazy" />
      </button>
      <div className="cert__body">
        <span className="cert__group">{t.certificates.groups[cert.group]}</span>
        <h4>{title}</h4>
        <p>{cert.issuer}</p>
        <p className="cert__meta">{t.certificates.hours(cert.hours)} · {pick(cert.date)}</p>
      </div>
    </article>
  );
}
