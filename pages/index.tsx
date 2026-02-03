"use client";
import Head from "next/head";
import React, { useState } from "react";
import { GithubICon, LinkedInIcon, TwitterIcon } from "../internal/icons";
import Link from "next/link";
import Image from "next/image";

const Home = (): React.ReactElement => {
  const [enabled, setEnabled] = useState(true);

  function ThemeSwitch() {
    return (
      <button
        onClick={() => setEnabled(!enabled)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="toggle dark mode"
      >
        {enabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:text-white"
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
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </button>
    );
  }

  return (
    <div className={`${enabled ? "" : "dark"}`}>
      <div className="min-h-screen bg-white dark:bg-black">
        <Head>
          <title>Brian Temu | Software & ML Engineer</title>
          <meta
            name="description"
            content="Brian Temu | Personal Portifolio "
          />
          <meta
            name="keywords"
            content="Brian Temu, Software Engineer, Machine Learning Engineer & Data Scientist "
          />
          <meta name="author" content="Brian Temu" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://briantemu.dev/" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 md:px-16">
            <div className="relative w-10 h-10 md:w-12 md:h-12 md:hidden">
              <Image
                width={48}
                height={48}
                src="/me.jpg"
                alt="Brian Temu"
                className="rounded-full object-cover w-full h-full border-2 border-gray-200 dark:border-gray-700"
                priority
              />
            </div>

            <div className="md:block hidden">
              <Link href="/">
                <h1 className="text-lg sm:text-xl font-bold dark:text-white font-libre">
                  Brian Temu
                </h1>
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg font-libre h-16">
              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hover:border-b-2 hover:border-sky-600 py-2"
              >
                About
              </button>
              <Link
                href="/thoughts"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hover:border-b-2 hover:border-sky-600 py-2"
              >
                Thoughts
              </Link>

              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hover:border-b-2 hover:border-sky-600 py-2"
              >
                Projects
              </button>
              <Link
                href="https://drive.google.com/file/d/1GNIRtsEIIMmRFCVcAsgN5wwHjadqetcO/view?usp=sharing"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hover:border-b-2 hover:border-sky-600  py-2"
                target="_blank"
              >
                Resume
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </nav>

        {/* Glowing Circle */}
        {/* <div className="fixed top-60 right-8 w-24 h-24 rounded-full bg-purple-500/90 blur-2xl group-hover:bg-purple-500/30 transition-all duration-70 pointer-events-none"></div> */}

        <main className="relative px-4 sm:px-6 xl:px-24 font-sans overflow-hidden group">
          {/* Combined Hero & About Section */}
          <section className="md:min-h-screen flex md:items-center md:justify-center pt-12 sm:py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left side - Hero Content */}
                <div className="space-y-6 md:space-y-8 py-8 text-left order-2 md:order-1">
                  {/* Mobile Profile Image */}
                  <div className="flex justify-center md:hidden mb-6 ">
                    <div className="relative w-24 h-24 hidden">
                      <Image
                        width={600}
                        height={600}
                        src="/me.jpg"
                        alt="Brian Temu"
                        className="object-cover w-full h-full border-2 border-gray-200 dark:border-gray-700"
                        priority
                      />
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h1 className="text-5xl sm:text-3xl md:text-6xl xl:text-7xl dark:text-white font-libre">
                      ML & Software
                      <p className="block font-josefinslab text-red-500 font-extrabold">
                        Engineer
                      </p>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-dsans text-justify pr-6">
                      {"I'm"} a curious Software and Machine Learning Engineer
                      by practice with a strong foundation in development. I
                      love learning new ideas and applying statistical models
                      and ML techniques to build practical, impactful projects.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <GithubICon />

                    <LinkedInIcon />

                    <TwitterIcon />
                  </div>
                </div>

                {/* Right side - Profile Image (Desktop) */}
                <div className="order-1 md:order-2 hidden md:block">
                  <div className="relative max-w-[80%] sm:max-w-[70%] md:max-w-full mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl"></div>
                    <Image
                      width={600}
                      height={600}
                      src="/me.jpg"
                      alt="Brian Temu"
                      className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 sm:py-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 dark:text-white">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Sidees Project */}

                <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-rose-700"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">
                      Sidees - Student ID on Digital Wallets
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800 dark:bg-orange-900/50 dark:text-orange-300">
                        Application
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-ornage-800 dark:bg-orange-900/50 dark:text-rose-300 border-2 border-rose-800">
                        December 2025
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-black dark:text-white">
                      <a
                        href="https://sidees.briantemu.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-rose-600"
                      >
                        Sidees
                      </a>{" "}
                      {`is a prototype exploring the integration of student identification credentials into digital wallets 
                      (Apple Wallet and Google Wallet) using NFC technology for secure access to campus systems. The primary objective of 
                      this prototype was to evaluate the feasibility, usability, and system behavior of such an implementation through a pilot-style test case 
                      modeled on UMBC. To conclude there is futher work to be done and make it adopted national wide.`}
                    </p>
                  </div>
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={"https://sidees.briantemu.dev/"}
                      target="_blank"
                      className=" absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Eda Project */}

                <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-orange-700"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">
                      Eda AI - Learning Assistant
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
                        Application
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-ornage-800 dark:bg-orange-900/50 dark:text-orange-300 border-2 border-orange-800">
                        May 2025
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-black dark:text-white">
                      <a
                        href="https://eda.briantemu.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-orange-600"
                      >
                        Eda
                      </a>{" "}
                      {`is a  project focuses on creating an AI-powered learning 
                      assistant that uses Retrieval-Augmented Generation (RAG) to automatically 
                      generate interactive questions from academic documents like research papers, 
                      textbooks, and lecture notes. The system will process user-uploaded documents, extract key
                       information using embeddings, retrieve relevant data via ChromaDB, and employ a Large Language Model 
                       (LLM) to produce context-aware questions and responses. The research aims to evaluate the AI's effectiveness
                        in enhancing student comprehension.`}
                    </p>
                  </div>
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={"https://eda.briantemu.dev/"}
                      target="_blank"
                      className=" absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-yellow-800"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">
                      CineRecall
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                        Application
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 border-2 border-yellow-800">
                        Feb 2025
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-black dark:text-white">
                      <a
                        href="https://cinerecall.briantemu.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-yellow-600"
                      >
                        Cinerecall
                      </a>{" "}
                      {`is a web-based tool designed to help users
                      rediscover movies from their memories. If someone
                      remembers specific scenes, characters, or plot details but
                      can’t quite recall the title of the film, they can use
                      this platform to search for movies based on those
                      fragmented memories. Users can input details like specific
                      scenes, dialogue, or visual elements they remember, and
                      the site provides a list of possible movie matches. The
                      service leverages a large database of films to suggest
                      titles that align with the provided description, making it
                      easier for users to find movies they’ve seen in the past
                      but have trouble identifying.`}
                    </p>
                  </div>
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={"https://cinerecall.briantemu.dev/"}
                      target="_blank"
                      className="absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Vision Transformer Project */}
                <div className="group relative  rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-green-800"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">
                      Vision Transformer
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                        Paper Replication
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-green-800 dark:bg-green-900/50 dark:text-green-300 border-2 border-green-800">
                        Dec 2023
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-black dark:text-white">
                      A vision transformer, or ViT, is a deep learning
                      architecture designed for computer vision tasks. Unlike
                      traditional convolutional neural networks (CNNs), which
                      rely on convolutional layers to process image data, ViTs
                      utilize self-attention mechanisms commonly found in
                      transformer models.{" "}
                      <a
                        href="https://arxiv.org/abs/2010.11929"
                        target="_blank"
                        rel="noopener noreferrer"
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
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={
                        "https://docs.briantemu.dev/docs/vision-transformer/intro"
                      }
                      target="_blank"
                      className=" absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Baltimore Crime Analysis Project */}
                <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-sky-800"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-lg sm:text-2xl font-bold mb-4 dark:text-white">
                      Baltimore Police Department Crime
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300">
                        Data Analysis
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 border-2 border-sky-800">
                        October 2023
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-black dark:text-white">
                      <a
                        href="https://data.baltimorecity.gov/datasets/baltimore::part-1-crime-data/explore"
                        target="_blank"
                        rel="noopener noreferrer"
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
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={
                        "https://github.com/iam-dante/Open-Baltimore-Analysis"
                      }
                      target="_blank"
                      className=" absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Face Mask Detection Project */}
                <div className="group relative  rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-orange-800"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-lg sm:text-2xl font-bold mb-4 dark:text-white">
                      Real Time Facemask Detection System
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
                        Computer Vision
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-orange-800 dark:bg-orange-900/50 dark:text-orange-300 border-2 border-orange-800">
                        July 2022
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-black dark:text-white">
                      The YOLO Real Face Mask Detection System is an advanced
                      computer vision application that utilizes the{" "}
                      <a
                        href="https://pjreddie.com/darknet/yolo/"
                        target="_blank"
                        rel="noopener noreferrer"
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
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={
                        "https://github.com/iam-dante/YoloV5-Facemask-Detection"
                      }
                      target="_blank"
                      className=" absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Spot the Mask Project */}
                <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Color Block */}
                  <div className="w-full h-12 bg-purple-800"></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">
                      Spot the Mask Challenge
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                        Deep Learning
                      </span>
                      <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 border-2 border-purple-800">
                        June 2021
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-black dark:text-white">
                      The Spot the Mask Project is an exciting competition-based
                      initiative that harnesses the power of machine learning to
                      classify images exclusively sourced from{" "}
                      <a
                        href="https://zindi.africa/competitions/spot-the-mask"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-purple-700"
                      >
                        zindi
                      </a>{" "}
                      . In this competition, participants are tasked with
                      creating and fine-tuning image classification models to
                      discern whether individuals in these images are wearing
                      masks. It represents a significant and innovative
                      challenge within the machine learning community.
                    </p>
                  </div>
                  <div className="h-full px-6 realative py-5">
                    <Link
                      href={
                        "https://docs.briantemu.dev/docs/spot-the-mask/intro"
                      }
                      target="_blank"
                      className=" absolute bottom-4 right-4"
                    >
                      <span className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors">
                        Read More →
                      </span>
                    </Link>
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
