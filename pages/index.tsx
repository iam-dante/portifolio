import Head from "next/head";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { GithubICon, LinkedInIcon, TwitterIcon } from "../internal/icons";
import Link from "next/link";

const Home = (): JSX.Element => {
  const [enabled, setEnabled] = useState(true);

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
          <title>Brian Temu | Software & ML Engineer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Brian Temu - Data Scientist & Software Engineer Portfolio"
          />
        </Head>

        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
          <div className="flex items-center justify-between px-6 py-4 md:px-16">
            <h1 className="font-bold text-xl dark:text-white">Brian Temu</h1>
            <div className="flex items-center gap-6">
              <a
                href="#about"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Projects
              </a>
              <Link
                href="/resume"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Resume
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </nav>

        <main className="px-6 xl:px-24">
          {/* Combined Hero & About Section */}
          <section className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Hero Content */}
                <div className="space-y-8 text-left order-2 md:order-1">
                  <div>
                    <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl dark:text-white mb-4">
                      Software & ML
                      <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                        Engineer
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                      As a dedicated software engineer with a strong background
                      in software development and a deep passion for data
                      science, I craft intelligent solutions at the intersection
                      of both fields.
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      Currently pursuing a Master's degree in Data Science, with
                      expertise in:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm md:text-base">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                        Machine Learning
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-violet-500 rounded-full"></span>
                        Computer Vision
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                        Data Analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-violet-500 rounded-full"></span>
                        Software Development
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href="https://github.com/iam-dante"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 dark:text-white"
                    >
                      <GithubICon />
                    </a>
                    <a
                      href="https://linkedin.com/in/brian-temu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 dark:text-white"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://twitter.com/briantemu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 dark:text-white"
                    >
                      <TwitterIcon />
                    </a>
                  </div>
                </div>

                {/* Right side - Profile Image */}
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl"></div>
                    <img
                      src="/me.jpg"
                      alt="Brian Temu"
                      className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 dark:text-white">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Vision Transformer Project */}
                <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                        Paper Replication
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Vision Transformer
                    </h3>
                    <p className="text-black dark:text-white">
                      A vision transformer, or ViT, is a deep learning
                      architecture designed for computer vision tasks. Unlike
                      traditional convolutional neural networks (CNNs), which
                      rely on convolutional layers to process image data, ViTs
                      utilize self-attention mechanisms commonly found in
                      transformer models.{" "}
                      <a
                        href="https://arxiv.org/abs/2010.11929"
                        className="underline text-green-600"
                      >
                        Vision Transformer Paper
                      </a>{" "}
                      ViT extends the success of transformers from natural
                      language processing to image analysis, demonstrating
                      remarkable performance on various image recognition tasks.
                      This introduction will provide an overview of the key
                      concepts and contributions of the Vision Transformer
                      paper, setting the stage for a deeper exploration of its
                      innovative methodology and experimental results.
                    </p>
                  </div>
                </div>

                {/* Face Mask Detection Project */}
                <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-200 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
                        Computer Vision
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Real Time Facemask Detection System
                    </h3>
                    <p className="text-black dark:text-white">
                      The YOLO Real Face Mask Detection System is an advanced
                      computer vision application that utilizes the{" "}
                      <a
                        href="https://pjreddie.com/darknet/yolo/"
                        className="underline text-orange-700"
                      >
                        YOLO (You Only Look Once)
                      </a>{" "}
                      object detection algorithm to identify and categorize
                      whether individuals in images or video streams are wearing
                      face masks accurately and in real-time. This system plays
                      a crucial role in monitoring and enforcing mask-wearing
                      compliance, especially during health crises such as the
                      COVID-19 pandemic. It provides rapid and reliable
                      detection of individuals wearing masks and those who are
                      not, contributing to public health and safety efforts by
                      minimizing the spread of infectious diseases.
                    </p>
                  </div>
                </div>

                {/* Baltimore Crime Analysis Project */}
                <div className="group relative bg-gradient-to-br from-sky-50 to-sky-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-200 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300">
                        Data Analysis
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Baltimore Police Department Crime
                    </h3>
                    <p className="text-black dark:text-white">
                      <a
                        href="https://data.baltimorecity.gov/datasets/baltimore::part-1-crime-data/explore"
                        className="underline text-sky-700"
                      >
                        Open Baltimore Crime Data
                      </a>{" "}
                      Open Baltimore Crime Data Analysis is a data-driven
                      project focused on exploring and interpreting crime data
                      from the city of Baltimore. By leveraging various
                      analytical techniques, this initiative aims to uncover
                      trends, patterns, and insights within the dataset,
                      providing valuable information to local authorities and
                      communities. Through rigorous analysis, it seeks to
                      enhance understanding of crime dynamics, contribute to
                      informed decision-making, and ultimately promote safer and
                      more secure neighborhoods in Baltimore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer with updated design */}
          <footer className="py-12 text-center border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Brian Temu. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;
