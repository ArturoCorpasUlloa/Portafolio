import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { route } from '../data/route';

const icons = { done: '✓', active: '●', next: '○' };

export default function LearningRoute() {
  const { t, pick } = useLanguage();
  return (
    <section className="section section--alt" id="route" aria-labelledby="route-title">
      <div className="container">
        <SectionTitle id="route-title">{t.route.title}</SectionTitle>
        <p className="route__intro">{t.route.intro}</p>
        <ol className="route" aria-label={t.route.listLabel}>
          {route.map((n, i) => (
            <li key={i} className={`route__node route__node--${n.status}`}>
              <Reveal>
                <span className="route__dot" aria-hidden="true">{icons[n.status]}</span>
                <div className="route__card">
                  <div className="route__top">
                    <span className="route__date">{pick(n.date)}</span>
                    <span className="route__status">{t.route.status[n.status]}</span>
                  </div>
                  <h3>{pick(n.title)}</h3>
                  <p>{pick(n.detail)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
