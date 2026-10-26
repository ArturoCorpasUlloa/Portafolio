// Marco CSS de dispositivo: type = 'phone' | 'tablet' | 'laptop'
export default function Device({ type, src, label, ariaLabel, onClick }) {
  return (
    <figure className={`device device--${type}`}>
      <button type="button" className="device__frame" onClick={onClick} aria-label={ariaLabel}>
        <img src={`./img/${src}`} alt="" loading="lazy" />
      </button>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
