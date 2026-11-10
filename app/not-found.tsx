import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold font-sans text-zinc-900 mb-2">404</h1>
      <p className="text-sm font-mono text-zinc-600 mb-6">Page not found.</p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

