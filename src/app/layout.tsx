import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import '@/lib/fontawesome/css/fa.css';

const eudoxus = localFont({
  src: [
    {
      path: '../fonts/EudoxusSansGX.ttf',
      style: 'normal'
    }
  ],
  variable: '--font-eudoxus'
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
      <body className={`${eudoxus.className} bg-black`}>{children}</body>
    </html>
  );
}
