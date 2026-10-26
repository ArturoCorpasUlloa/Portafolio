import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import RichText from '../components/RichText';
import Reveal from '../components/Reveal';

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="section section--alt about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionTitle id="about-title">{t.about.title}</SectionTitle>
          {t.about.paragraphs.map((text, i) => <p key={i}><RichText text={text} /></p>)}
        </Reveal>
      </div>
    </section>
  );
}
