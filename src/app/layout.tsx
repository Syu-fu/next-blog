import { config } from '@fortawesome/fontawesome-svg-core';
import { GoogleAnalytics } from '@next/third-parties/google';
import { BIZ_UDPGothic } from 'next/font/google';

import Box from '@/components/box';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

import '@/app/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const bizUdpGothic = BIZ_UDPGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}
      <body className={bizUdpGothic.className}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
