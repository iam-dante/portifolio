import Head from "next/head";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { GithubICon, LinkedInIcon, TwitterIcon } from "../internal/icons";

const Resume = (): JSX.Element => {
  const [enabled, setEnabled] = useState(true);

  var url = useRouter();
  const pathname = usePathname();

  function ThemeSwitch() {
    return (
      <Switch
        aria-label="dark mode"
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-slate-700" : "bg-white"
        } relative inline-flex h-9 w-16 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-9" : "translate-x-2"
          } flex items-center justify-center h-6 w-6 transform rounded-full bg-white dark:bg-black transition`}
        >
          {enabled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 dark:text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </span>
      </Switch>
    );
  }

  return (
    <div className={`${enabled ? "" : "dark"}`}>
      <div className="min-h-screen bg-white dark:bg-black">
        <Head>
          <title>Resume | Brian Temu</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Brian Temu's Resume" />
        </Head>

        <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
          <div className="flex items-center justify-between px-6 py-4 md:px-16">
            <Link
              href="/"
              className="font-bold text-xl dark:text-white hover:opacity-80"
            >
              Brian Temu
            </Link>
            <ThemeSwitch />
          </div>
        </nav>

        <main className="container mx-auto px-6 pt-24 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <iframe
                src="/document/Brian_Temu_Resume.pdf"
                className="w-full h-[85vh] rounded-lg"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;
