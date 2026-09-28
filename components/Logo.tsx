export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7DD3FC" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#logo-g)" />
        <path
          d="M21 11.5a6 6 0 0 0-10.2 1.3M11 20.5a6 6 0 0 0 10.2-1.3"
          stroke="#04111F"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M21.6 8.4v3.6H18M10.4 23.6V20H14" stroke="#04111F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Sync<span className="text-gradient">Hub</span>
      </span>
    </span>
  );
}
