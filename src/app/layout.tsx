import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';

import Box from '@/components/box';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/googleAnalytics';
import Header from '@/components/header';

import '@/app/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <GoogleAnalytics />
      <body className={inter.className}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
