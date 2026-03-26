/**
 * TikTok SVG icon component.
 * Lucide-react doesn't include a TikTok icon, so we use the official brand SVG path.
 * Usage: <TikTokIcon className="w-5 h-5 text-black" />
 */
export default function TikTokIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M14.5 0c.3 1.3 1.1 2.4 2.2 3.1 1 .7 2.1 1.1 3.3 1.2v3.1c-1.6-.1-3.1-.6-4.3-1.5v7.3c0 4-3.3 7.2-7.3 7.2s-7.4-3.2-7.4-7.2S4.2 6 8.2 6c.7 0 1.4.1 2 .3v3.2c-.6-.3-1.3-.4-2-.4-2 0-3.6 1.6-3.6 3.5s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V0h2.7z" />
    </svg>
  );
}
