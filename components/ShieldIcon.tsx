export function ShieldIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield body */}
      <path
        d="M50 4 L92 18 L92 58 C92 88 70 108 50 116 C30 108 8 88 8 58 L8 18 Z"
        fill="#0B1F3A"
      />
      {/* Grid lines */}
      <g stroke="#C9A227" strokeWidth="1.2" opacity="0.85">
        <line x1="20" y1="28" x2="80" y2="28" />
        <line x1="20" y1="42" x2="80" y2="42" />
        <line x1="20" y1="56" x2="80" y2="56" />
        <line x1="20" y1="70" x2="80" y2="70" />
        <line x1="32" y1="18" x2="32" y2="88" />
        <line x1="50" y1="14" x2="50" y2="92" />
        <line x1="68" y1="18" x2="68" y2="88" />
      </g>
      {/* Crown */}
      <path
        d="M30 40 L38 52 L50 36 L62 52 L70 40 L66 58 L34 58 Z"
        fill="#C9A227"
      />
      {/* Chevrons */}
      <g stroke="#C9A227" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M32 78 L50 88 L68 78" />
        <path d="M36 86 L50 94 L64 86" />
        <path d="M40 94 L50 100 L60 94" />
      </g>
    </svg>
  );
}
