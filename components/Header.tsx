'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/lib/data';
import { useAuth } from '@/lib/auth-context';

export function Header() {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  const isActiveTab = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top Section: Branding + Auth */}
        <div style={{ borderBottom: '1px solid #e0e0e0', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, margin: 0, cursor: 'pointer' }}>
              RARE GEMS WORLDWIDE
            </h1>
          </Link>
          
          {!loading && !user && (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Link href="/login" style={{ textDecoration: 'none', color: '#0a0a0a', fontSize: '14px', fontWeight: 500 }}>
                Sign In
              </Link>
              <Link href="/signup" style={{ textDecoration: 'none', color: 'white', backgroundColor: '#0a0a0a', padding: '8px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: 600 }}>
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <nav style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', overflow: 'auto' }}>
          {CATEGORIES.map((category) => {
            const href = `/category/${category.toLowerCase().replace(/\s+/g, '-').replace('/', '')}`;
            const isActive = isActiveTab(href);
            
            return (
              <Link
                key={category}
                href={href}
                style={{
                  padding: '16px 24px',
                  textDecoration: 'none',
                  color: isActive ? '#0a0a0a' : '#888',
                  fontSize: '12px',
                  fontWeight: isActive ? 700 : 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  borderBottom: isActive ? '2px solid #0a0a0a' : '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {category}
              </Link>
            );
          })}
          
          {/* GEMS Tab */}
          <Link
            href="/gems"
            style={{
              padding: '16px 24px',
              textDecoration: 'none',
              color: isActiveTab('/gems') ? '#d4af37' : '#888',
              fontSize: '12px',
              fontWeight: isActiveTab('/gems') ? 700 : 500,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              borderBottom: isActiveTab('/gems') ? '2px solid #d4af37' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            GEMS
          </Link>

          {/* POST Button (right side) */}
          <div style={{ marginLeft: 'auto' }}>
            <Link
              href="/create-post"
              style={{
                display: 'inline-block',
                padding: '16px 24px',
                textDecoration: 'none',
                color: '#0a0a0a',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap',
                borderBottom: '2px solid transparent',
                transition: 'all 0.2s ease'
              }}
            >
              + POST
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
