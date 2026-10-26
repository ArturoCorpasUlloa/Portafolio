// Convierte **texto** en <strong>. Útil para párrafos traducibles con énfasis.
export default function RichText({ text }) {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
