import { useLanguage } from '../i18n/LanguageContext';
import StatCard from '../components/StatCard';

export default function Stats() {
  const { t } = useLanguage();
  return (
    <section className="stats">
      <div className="container stats__grid">
        {t.stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </section>
  );
}
