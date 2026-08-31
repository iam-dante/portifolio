import { Html, Head, Main, NextScript } from "next/document";

/**
 * Resolves the theme before first paint so the page never flashes the wrong
 * one. Always adds an explicit "light" or "dark" class to <html>, which is
 * what both the CSS variables and Tailwind's dark: variant key off.
 */
const themeScript = `(function(){var e=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}e.classList.add(t)}catch(n){e.classList.add("light")}})()`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
