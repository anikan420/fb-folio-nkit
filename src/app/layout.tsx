
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google'; // Removed Bodoni_Moda
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// Gilroy will be loaded via @font-face in globals.css if available
// const gilroy = localFont({ src: '../path/to/gilroy.woff2', variable: '--font-gilroy' }) // Example if self-hosting with next/font/local

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DeepWork | Portfolio',
  description: 'A personal portfolio website built with Next.js, mirroring the style of imdeepan.com.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`${geistMono.variable} font-sans antialiased`} // Removed Bodoni Moda variable, font-sans will pick up Gilroy from Tailwind config
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
