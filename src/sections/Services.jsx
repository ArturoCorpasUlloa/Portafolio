import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

export default function Services() {
  const { t } = useLanguage();
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle id="services-title">{t.services.title}</SectionTitle>
        <div className="grid">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="card service"><div className="service__icon" aria-hidden="true">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
