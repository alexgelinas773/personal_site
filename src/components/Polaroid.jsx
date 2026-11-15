export default function Polaroid({ src, alt, className = "", imgClassName }) {
  return (
    <figure className={`polaroid ${className}`}>
      <img src={src} alt={alt} className={imgClassName} width="600" height="600" />
    </figure>
  );
}
