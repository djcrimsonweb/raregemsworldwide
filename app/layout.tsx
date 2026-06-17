import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rare Gems Worldwide - Cultural Discovery Platform',
  description: 'A cultural OS for internet discovery. Curating the most relevant global trends and underground movements.',
  keywords: 'culture, internet, trends, design, music, fashion, games, radio',
  authors: [{ name: 'Rare Gems Worldwide' }],
  openGraph: {
    title: 'Rare Gems Worldwide',
    description: 'A cultural OS for internet discovery',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cultural-white text-cultural-black font-modern">
        <AuthProvider>
          <Header />
          <main className="max-w-7xl mx-auto px-6 py-section">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
