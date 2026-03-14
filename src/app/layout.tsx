import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'fylo-data-storage-component',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased bgMobile w-full h-dvh`}>{children}</body>
    </html>
  );
}
