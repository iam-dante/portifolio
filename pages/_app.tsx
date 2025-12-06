import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { 
  Poppins, 
  JetBrains_Mono, 
  DM_Sans, 
  Montserrat, 
  Fira_Mono, 
  Libre_Baskerville, 
  Josefin_Slab 
} from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["100", "200", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const josefinSlab = Josefin_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-josefin-slab",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // This is a Next.js custom App component that wraps the entire application.
    <div 
      className={`${poppins.variable} ${jetbrainsMono.variable} ${dmSans.variable} ${montserrat.variable} ${firaMono.variable} ${libreBaskerville.variable} ${josefinSlab.variable}`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
        <Analytics />
      </Suspense>
    </div>
  );
}
