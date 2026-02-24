import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import ScrollCue from "./scroll-cue";
import ThemeProvider from "theme/ThemeProvider";

import PageProgress from "components/common/PageProgress";

// animate css
import "animate.css";
// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// video player css
import "plyr-react/plyr.css";
// glightbox css
import "glightbox/dist/css/glightbox.css";
// custom scrollcue css
import "plugins/scrollcue/scrollCue.css";
// Bootstrap and custom scss
import "assets/scss/style.scss";
import Container from "components/Container";

import Script from "next/script";
import ReduxContainer from "components/ReduxContainer";
import { cookies } from "next/headers";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://iceup.co.kr"),
  title: "ICEUP",
  description: "Flake Type Ice Maker",
  keywords: ["purifier", "ice maker"],
  authors: [{ name: "ICEUP", url: "https://iceup.co.kr" }],
  openGraph: {
    title: "ICEUP",
    description: "Global leader in ICE MAKER",
    url: "https://iceup.co.kr",
    siteName: "ICEUP",
    images: [
      {
        url: "/og-image.png",  // 이제 절대경로가 아니어도 됨!
        width: 1200,
        height: 630,
        alt: "ICEUP Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICEUP",
    description: "ICE MAKER World Leader",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookie = cookies()
  const cookieVaule : any = cookie.get('dissid') || '';
  return (
    <html lang="en">
      <head>
          {/* Google tag (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JX7BMH8K3E"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JX7BMH8K3E');
              `}
          </Script>
        </head>
      <body className={manrope.className}>
        {/* <ScrollCue> */}
        <ReduxContainer>
          <Container ssid={cookieVaule?.value}>
            <ThemeProvider>{children}</ThemeProvider>
          </Container>
        </ReduxContainer>
        {/* </ScrollCue> */}

        <PageProgress />
      </body>
    </html>
  );
}
