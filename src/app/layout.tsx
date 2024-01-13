import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';

import Box from '@/components/box';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/googleAnalytics';
import Header from '@/components/header';
import { getBlogData } from '@/lib/getBlogData';

import type { Metadata } from 'next';

import '@/app/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const data = getBlogData();
  return {
    title: data.props.site.title,
    description: data.props.site.description,
  };
}

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
