import Link from "next/link";
import { ShieldIcon } from "./ShieldIcon";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <ShieldIcon className="h-9 w-9" />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight text-[#0B1F3A]">
                GB Institutional Ratings
              </span>
              <span className="hidden text-xs text-[#C9A227] sm:inline">
                Who still holds?
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium text-gray-600 sm:gap-6">
            <Link href="/" className="hover:text-gray-900 transition">
              Dashboard
            </Link>
            <Link href="/blog" className="hover:text-gray-900 transition">
              Blog
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
