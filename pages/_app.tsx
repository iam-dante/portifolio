import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        /> */}
        <Component {...pageProps} />
        <Analytics />
      </Suspense>
    </>
  );
}
