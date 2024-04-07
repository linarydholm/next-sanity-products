import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MY site',
  description: 'Built with Next and Sanity.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // get all pages:
  const pages = await getPages();

  console.log('hejsaaaaan', pages);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 bg-pink-100">
          <div className="px-4">
            <nav className="max-w-5xl m-auto grid">
              <ul className="flex gap-6">
                <li>
                  <Link
                    href="/"
                    className="text-pink-600 hover:underline"
                  >
                    Home
                  </Link>
                </li>

                <div className="m-auto" />

                {pages.map((page) => {
                  return (
                    <li key={page._id}>
                      <Link
                        href={`/${page.slug}`}
                        className="text-pink-600 hover:underline"
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
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
