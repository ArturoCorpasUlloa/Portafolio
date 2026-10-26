import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { experience } from '../data/experience';

export default function Experience() {
  const { t, pick } = useLanguage();
  return (
    <section className="section section--alt" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle id="experience-title">{t.experience.title}</SectionTitle>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={i}>
              <div className="job">
                <h3>{pick(job.role)} · {job.company}</h3>
                <div className="job__meta">{pick(job.period)}</div>
                <ul>{job.bullets.map((b, j) => <li key={j}>{pick(b)}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
