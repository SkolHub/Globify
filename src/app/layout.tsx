import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const goldplay = localFont({
  src: [
    { path: '../fonts/Goldplay Bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/Goldplay SemiBold.otf', weight: '600', style: 'normal' }
  ],
  variable: '--font-goldplay'
});

export const metadata: Metadata = {
  title: 'Globify',
  description: 'The best geography tool'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${goldplay.variable}`}>{children}</body>
    </html>
  );
}
