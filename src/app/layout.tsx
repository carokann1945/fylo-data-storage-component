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
      <body
        className={`${raleway.variable} antialiased h-dvh flex justify-center items-center bgMobile md:bgDesktop bg-blue-950-custom px-[25px] md:px-[114px]`}>
        {children}
      </body>
    </html>
  );
}
