import Link from 'next/link';
import { CATEGORIES } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-cultural-light-gray sticky top-0 bg-cultural-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Branding */}
        <div className="mb-8">
          <Link href="/">
            <h1 className="font-editorial text-2xl font-bold text-cultural-black hover:opacity-70 transition-opacity">
              RARE GEMS WORLDWIDE
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 overflow-x-auto pb-4 md:pb-0">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase().replace(/\s+/g, '-').replace('/', '')}`}
              className="text-caption font-modern text-cultural-gray hover:text-cultural-black transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              {category}
            </Link>
          ))}
          <Link
            href="/gems"
            className="text-caption font-modern text-cultural-accent hover:opacity-70 transition-opacity uppercase tracking-wider whitespace-nowrap ml-auto md:ml-0 font-semibold"
          >
            GEMS 💎
          </Link>
        </nav>
      </div>
    </header>
  );
}
