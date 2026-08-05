import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://netraform.tech'),
  title: 'Netraform Technologies | Building the Future, Together',
  description: 'Netraform Technologies is an AI, software engineering, and innovation hub empowering the next generation of innovators through intelligent solutions, startup incubation, and applied research.',
  keywords: ['Netraform', 'AI', 'software engineering', 'innovation hub', 'startup incubator', 'cloud computing', 'machine learning'],
  authors: [{ name: 'Netraform Technologies' }],
  applicationName: 'Netraform',
  icons: {
    icon: '/NT.png',
  },
  openGraph: {
    type: 'website',
    title: 'Netraform Technologies | Building the Future, Together',
    description: 'An innovation hub empowering the next generation through AI, software engineering, and applied research.',
    images: ['/og-image.jpg'],
    url: 'https://netraform.tech',
    siteName: 'Netraform Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netraform Technologies',
    description: 'Building the Future, Together',
    images: ['/og-image.jpg'],
    creator: '@netraform',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
