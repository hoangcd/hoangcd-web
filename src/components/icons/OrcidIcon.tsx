export default function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="Arial, sans-serif">iD</text>
    </svg>
  );
}
