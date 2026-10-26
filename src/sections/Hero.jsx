import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/profile';
import { whatsappLink } from '../components/WhatsAppButton';
import ExternalLink from '../components/ExternalLink';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="top">
      <div className="hero__orb hero__orb--1" aria-hidden="true" /><div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="container hero__inner">
        <img className="hero__photo" src="./foto.jpg" alt={t.hero.photoAlt} width="180" height="180" />
        <div>
          <h1>{profile.name}</h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__summary">{t.hero.summary}</p>
          <div className="hero__actions">
            <a className="btn btn--gold" href="#projects">{t.hero.projects}</a>
            <ExternalLink className="btn btn--ghost" href={whatsappLink(t.contact.msg)}>{t.hero.whatsapp}</ExternalLink>
            <a className="btn btn--ghost" href={`./${profile.cv}`} download>{t.hero.cv}</a>
            <ExternalLink className="btn btn--ghost" href={profile.github}>GitHub</ExternalLink>
            {profile.linkedin && <ExternalLink className="btn btn--ghost" href={profile.linkedin}>LinkedIn</ExternalLink>}
          </div>
        </div>
      </div>
    </section>
  );
}
