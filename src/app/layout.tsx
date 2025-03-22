import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
///import "../../public/assets/vendor/aos/aos.css";
import "../../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../../public/assets/vendor/swiper/swiper-bundle.min.css";
import "../../public/assets/css/main.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/vendor/php-email-form/validate.js"></Script >
        <Script src="assets/vendor/aos/aos.js"></Script >
        <Script src="assets/vendor/waypoints/noframework.waypoints.js"></Script >
        <Script src="assets/vendor/glightbox/js/glightbox.min.js"></Script >
        <Script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></Script >
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script >
        <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script >
      </body>
    </html>
  );
}
