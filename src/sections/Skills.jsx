import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Tag from '../components/Tag';
import Reveal from '../components/Reveal';
import { skills } from '../data/skills';

export default function Skills() {
  const { t, pick } = useLanguage();
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle id="skills-title">{t.skills.title}</SectionTitle>
        <div className="grid">
          {skills.map((group, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className={`card ${group.learning ? 'card--learning' : ''}`}>
                <h3>{pick(group.title)}</h3>
                <ul className="tags">{group.items.map((item) => <Tag key={item} learning={group.learning}>{item}</Tag>)}</ul>
                {group.learning && <p className="card__note">{t.skills.learning}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
