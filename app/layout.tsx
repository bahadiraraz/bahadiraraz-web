import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  metadataBase: new URL('https://bahadiraraz.com'),
  title: {
    default: 'Bahadır Araz',
    template: '%s | Bahadır Araz',
  },
  description: 'Software developer, student, and innovator.',
  openGraph: {
    title: 'Bahadır Araz',
    description: 'Software developer, student, and innovator.',
    url: 'https://bahadiraraz.com',
    siteName: 'Bahadır Araz',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Bahadır Araz',
    card: 'summary_large_image',
  },
  verification: {
    google: '<your_google_verification_code>',
    yandex: '<your_yandex_verification_code>',
  },
};


const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        'overflow-y: auto',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-auto mb-1 mt-6">
        <main className="px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}