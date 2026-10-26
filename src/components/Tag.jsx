// Etiqueta de tecnología. Se usa dentro de <ul className="tags">
export default function Tag({ children, learning = false }) {
  return <li className={`tag ${learning ? 'tag--learning' : ''}`}>{children}</li>;
}
