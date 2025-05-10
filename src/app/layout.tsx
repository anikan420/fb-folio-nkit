
import type { Metadata } from 'next';
import { Poppins, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Include a range of weights
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
    <html lang="en" className="dark scroll-smooth"> {/* Added 'dark' class */}
      <body className={`${poppins.variable} ${geistMono.variable} font-sans antialiased`}> {/* Used poppins variable and added font-sans */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
