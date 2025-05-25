
import type { Metadata } from 'next';
import { Bodoni_Moda, Geist_Mono } from 'next/font/google'; // Changed Poppins to Bodoni_Moda
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const bodoniModa = Bodoni_Moda({ // Changed from poppins to bodoniModa
  variable: '--font-bodoni-moda', // New CSS variable
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // Bodoni Moda weights
  style: ['normal', 'italic'], // Include italic styles if available and needed
});

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
        className={`${bodoniModa.variable} ${geistMono.variable} font-sans antialiased`} // Used bodoniModa variable
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
