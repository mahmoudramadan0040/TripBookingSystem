"use client"
import Script from "next/script";
import "./globals.css";
import { ReduxProvider } from "./Redux/ReduxProvider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor} from "./Redux/store"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Travello - Multipurpose travel and tour booking.These template is suitable for  travel agency , tour, travel website , tour operator , tourism , booking  trip or adventure website. "
        />
        <meta
          name="keywords"
          content="travel, trip booking,tour, hotel, tour guide, tourism, blog, flight, travel agency, tourism agency, accommodation, tour website"
        />
        <meta name="author" content="inittheme" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Multipurpose travel and tour booking"
        />
        <meta property="og:site_name" content="Travello" />
        <meta property="og:url" content="https://inittheme.com" />
        <meta
          property="og:image"
          content="https://inittheme.com/images/selfie.jpg"
        />
        <meta
          property="og:description"
          content="Multipurpose travel and tour booking, multipurpose template"
        />
        <meta
          name="twitter:title"
          content="Multipurpose travel and tour booking"
        />
        <meta
          name="twitter:description"
          content="Multipurpose travel and tour booking, multipurpose template"
        />
        <meta
          name="twitter:image"
          content="https://twitter.com/inittheme/photo"
        />
        <meta name="twitter:card" content="summary" />
        {/* <!-- Google site verification --> */}
        <meta name="google-site-verification" content="..." />
        <meta name="facebook-domain-verification" content="..." />
        <meta name="csrf-token" content="..." />
        <meta name="currency" content="$" />
        {/* <!-- Title --> */}
        <title>Multipurpose travel and tour booking </title>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="20x20"
          href="/assets/images/icon/favicon.png"
        />
        {/* <!-- Bootstrap --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap-5.3.0.min.css"
        />
        {/* <!-- Fonts & icon --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/remixicon.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/fonts-icon.css"
        />
        {/* <!-- Plugin --> */}
        <link rel="stylesheet" type="text/css" href="/assets/css/plugin.css" />
        {/* <!-- Main CSS --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/main-style.css"
        />
        {/* <!-- RTL CSS::When Need RTL Uncomments File --> */}
        {/* <!ReduxProvider-- <link rel="stylesheet" type="text/css" href="assets/css/rtl.css"> --</link> */}
      </head>
      <body>
        <ReduxProvider>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </ReduxProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
          strategy="beforeInteractive"
        />
        {/* Load jQuery and Bootstrap */}
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/bootstrap-5.3.0.min.js"
          strategy="beforeInteractive"
        />

        {/* Plugin and main.js */}
        <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
