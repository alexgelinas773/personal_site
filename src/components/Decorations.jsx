const STAR = "M50 12 61.8 35.8 88 39.6 69 58.2 73.5 84.4 50 72 26.5 84.4 31 58.2 12 39.6 38.2 35.8Z";

export function Star({ className }) {
  return (
    <svg className={`deco ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <path d={STAR} fill="#b7e1da" stroke="#b7e1da" strokeWidth="12" strokeLinejoin="round" />
    </svg>
  );
}

export function Heart({ className }) {
  return (
    <svg className={`deco ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M50 88C10 58 5 30 25 18 38 10 48 18 50 28 52 18 62 10 75 18 95 30 90 58 50 88Z"
        fill="#eab0c8"
      />
    </svg>
  );
}

export function Sparkle({ className }) {
  return (
    <svg className={`deco ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 5Q54 46 95 50 54 54 50 95 46 54 5 50 46 46 50 5Z" fill="#eab0c8" />
    </svg>
  );
}

export function Tape({ className }) {
  return <div className={`tape ${className}`} aria-hidden="true" />;
}
