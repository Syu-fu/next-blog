import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import global from './page.module.css';
import Header from './_components/header';
import Footer from './_components/footer';
import Box from './_components/box';

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
      <body className={inter.className}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
