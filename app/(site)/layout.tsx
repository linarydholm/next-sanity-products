import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MY site',
  description: 'Built with Next and Sanity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 bg-pink-100">
          <div className="px-4">
            <nav className="max-w-5xl m-auto grid">
              <ul>
                <li>
                  <Link
                    href="/"
                    className="text-pink-600"
                  >
                    Home page
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="pt-4"></footer>
      </body>
    </html>
  );
}
