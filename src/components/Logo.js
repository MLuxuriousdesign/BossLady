export default function Logo({ size = 44 }) {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Crown */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Boss Lady crown"
      >
        <g fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinejoin="round">
          {/* base */}
          <path d="M10 46 L54 46" stroke="var(--gold)" />
          {/* crown body */}
          <path d="M12 46 L20 22 L32 36 L44 18 L52 46 Z" fill="rgba(212,175,55,0.15)" />
          {/* gems */}
          <circle cx="20" cy="22" r="3" fill="var(--gold)" />
          <circle cx="32" cy="36" r="3" fill="var(--gold)" />
          <circle cx="44" cy="18" r="3" fill="var(--gold)" />
        </g>
      </svg>

      {/* Wordmark */}
      <span className="text-cream font-extrabold tracking-[0.3em] text-xl">
        BOSS&nbsp;&nbsp;LADY
      </span>
    </div>
  );
}