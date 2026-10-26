import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/profile';

export function whatsappLink(msg) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// Botón flotante, visible en todas las pantallas
export default function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a className="wa-float" href={whatsappLink(t.contact.msg)} target="_blank" rel="noreferrer noopener" aria-label={`${t.contact.whatsapp} (${t.newTab})`}>
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.7 1.9 6.6L3.2 29l7.1-2.1c1.8 1 3.8 1.500 5.700 1.500 7 0 12.600-5.600 12.600-12.500S23 3 16 3zm0 22.800c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-4.200 1.200 1.200-4.100-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.600 9.800 10.200 5.300 16 5.300s10.400 4.500 10.400 10.200S21.700 25.800 16 25.800zm5.700-7.700c-.3-.2-1.800-.9-2.100-1-.3-.1-.5-.2-.7.200-.2.300-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.300-.5-2.500-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.5-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.400 4.700 3.200 1.300 3.200.9 3.800.8.600-.1 1.800-.7 2.100-1.500.3-.7.300-1.300.2-1.500-.1-.1-.3-.2-.6-.4z"/>
      </svg>
    </a>
  );
}
