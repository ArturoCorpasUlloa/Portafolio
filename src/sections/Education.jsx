import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import CertCard from '../components/CertCard';
import Lightbox from '../components/Lightbox';
import { education } from '../data/education';
import { certifications, otherCourses } from '../data/certifications';

export default function Education() {
  const { t, pick } = useLanguage();
  const [open, setOpen] = useState(null); // índice del certificado abierto en el visor
  const withImage = certifications.filter((c) => c.image);
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionTitle id="education-title">{t.education.title}</SectionTitle>
        <Reveal>
          <div className="card card--wide">
            <h3>{t.education.degrees}</h3>
            {education.map((e, i) => (
              <div className="edu" key={i}><strong>{pick(e.title)}</strong><span>{e.place} · {pick(e.period)}</span></div>
            ))}
          </div>
        </Reveal>

        <h3 className="certs__title">{t.certificates.title}</h3>
        <p className="certs__hint">{t.certificates.hint}</p>
        <div className="certs-grid">
          {withImage.map((c, i) => (
            <Reveal key={c.id} delay={(i % 4) * 80}><CertCard cert={c} onOpen={() => setOpen(i)} /></Reveal>
          ))}
        </div>

        <h3 className="certs__title certs__title--small">{t.certificates.other}</h3>
        <ul className="certs">{otherCourses.map((c) => <li key={c.es}>{pick(c)}</li>)}</ul>
      </div>
      {open !== null && (
        <Lightbox images={withImage.map((c) => c.image)} index={open} label={t.certificates.viewer} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
