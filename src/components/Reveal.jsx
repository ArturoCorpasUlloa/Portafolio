import useReveal from '../hooks/useReveal';

// Envuelve contenido y lo anima (fade-up) al entrar en pantalla
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal--in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
