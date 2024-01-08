import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_components/header';
import Footer from './_components/footer';
import Box from './_components/box';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Suspense } from 'react';
import GoogleAnalytics from '@/app/_components/googleAnalytics';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Syu fu's blog",
  description: "syu fu's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Suspense fallback={<></>}>
        <GoogleAnalytics />
      </Suspense>
      <body className={inter.className}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
