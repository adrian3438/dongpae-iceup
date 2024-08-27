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
import '/public/css/admin.css'
import Container from "components/Container";

import Script from "next/script";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dongpae iceup",
  description: "Generated by create next app"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ScrollCue>
          <Container>
            <ThemeProvider>{children}</ThemeProvider>
          </Container>
        </ScrollCue>

        <PageProgress />
        <Script
          src="https://code.jquery.com/jquery-3.7.1.js"
          strategy="afterInteractive"
        />
        {/* Bootstrap */}
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
        {/* Summernote */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
