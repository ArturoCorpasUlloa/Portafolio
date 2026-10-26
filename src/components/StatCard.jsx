import useReveal from '../hooks/useReveal';
import useCountUp from '../hooks/useCountUp';

export default function StatCard({ value, suffix, label }) {
  const [ref, visible] = useReveal();
  const n = useCountUp(value, visible);
  return (
    <div className="stat" ref={ref}>
      {/* El número animado se oculta a lectores de pantalla; leen el valor final */}
      <strong aria-hidden="true">{n}{suffix}</strong>
      <span className="sr-only">{value}{suffix} </span>
      <span>{label}</span>
    </div>
  );
}
