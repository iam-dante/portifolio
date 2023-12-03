import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> */}
      <Component {...pageProps} />

      {/* <Analytics /> */}
    </>
  );
}
