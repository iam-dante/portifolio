"use client";

import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { GithubICon, LinkedInIcon, TwitterIcon } from "../internal/icons";

const ThemeSwitch = dynamic(
  () => import("../components/ThemeSwitch").then((mod) => mod.ThemeSwitch),
  {
    ssr: false,
  }
);

const ResumeContent = (): React.ReactElement => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className={`${enabled ? "" : "dark"} font-sans`}>
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
              className="font-bold text-3xl dark:text-white hover:opacity-80"
            >
              Brian Temu
            </Link>
            <ThemeSwitch enabled={enabled} setEnabled={setEnabled} />
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

const Resume = dynamic(() => Promise.resolve(ResumeContent), { ssr: false });

export default Resume;
