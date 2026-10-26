import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/profile';

export default function Footer() {
  const { t } = useLanguage();
  return <footer className="footer"><div className="container">© {new Date().getFullYear()} {profile.name} · {t.footer}</div></footer>;
}
