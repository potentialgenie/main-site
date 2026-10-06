export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`arrow-nudge ${className}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7" strokeLinecap="round" />
      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

// A burst of chevron arms used as a decorative accent beside photos.
export function Burst({ className = "h-28 w-28" }: { className?: string }) {
  const arms = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="square" aria-hidden="true">
      {arms.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <path d="M50 46V4" />
          <path d="M41 36V14" />
          <path d="M59 36V14" />
        </g>
      ))}
    </svg>
  );
}
