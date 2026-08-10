import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-gray-900">
              GIR
            </span>
            <span className="hidden text-sm text-gray-500 sm:inline">
              Institutional Ratings
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition">
              Dashboard
            </Link>
            <Link href="/methodology" className="hover:text-gray-900 transition">
              Methodology
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
