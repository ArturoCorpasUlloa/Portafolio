import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import ExternalLink from '../components/ExternalLink';
import { profile } from '../data/profile';
import { whatsappLink } from '../components/WhatsAppButton';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section className="section section--alt contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle id="contact-title">{t.contact.title}</SectionTitle>
        <p>{t.contact.text}</p>
        <ul className="contact__list">
          <li><ExternalLink className="contact__wa" href={whatsappLink(t.contact.msg)}>{t.contact.whatsapp} · {profile.phoneDisplay}</ExternalLink></li>
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><ExternalLink href={profile.github}>GitHub</ExternalLink></li>
          {profile.linkedin && <li><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink></li>}
        </ul>
      </div>
    </section>
  );
}
