import Head from "next/head";
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { GithubICon, LinkedInIcon, TwitterIcon } from "../internal/icons";

const Home = (): JSX.Element => {
  const [enabled, setEnabled] = useState(true);
  const pathname = usePathname()

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
    <div className={` ${enabled ? "" : "dark"}`}>
      <div className="h-auto bg-white">
        <Head>
          <title>Hellow, Brian Here 👋 </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Author: Brian Temu, Personal Website"
          ></meta>
        </Head>

        <div className="h-screen">
          <div className="h-[10%] flex items-center dark:bg-black   px-4 md:px-16 justify-end drop-shadow-sm">
            <ThemeSwitch />
          </div>

          {/* main body*/}

          <div className="min-h-full px-6 xl:px-24 dark:bg-black bg-white">
            <div className="py-6 flex justify-center bg-white dark:bg-black">
              <div>
                <div className="flex flex-col items-center">
                  <h1 className="font-semibold text-3xl xl:text-7xl uppercase dark:text-white">
                    Brian Temu
                  </h1>
                  <h1 className="dark:text-white">
                    Data Science Major & Software Engineer
                  </h1>
                </div>
                <div className="h-12 flex space-x-8 items-center px-12 justify-center dark:text-white">
                  <GithubICon />
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>

            <div className="mt-6">

              <ul className=" space-x-4 xl:space-x-8 items-center justify-center flex">
                <li>
                
                  <Link href="/">
                  <div
                        className={
                          pathname =="/"
                            ? "bg-black text-white px-4 md:px-8 py-4 dark:text-black dark:bg-white"
                            : " border-b-2 border-black text-black px-4  md:px-8 py-4 dark:text-white dark:border-white"
                        }
                      >
                        <h1 className="text-sm text md:text-base">Projects</h1>
                      </div>
                  </Link>
                </li>
                <li>
                <Link href="/aboutMe">
                  <div
                        className={
                          pathname == "/aboutMe"
                            ? "bg-black text-white px-4 md:px-8 py-4 dark:text-black dark:bg-white"
                            : " border-b-2 border-black text-black px-4  md:px-8 py-4 dark:text-white dark:border-white"
                        }
                      >
                        <h1 className="text-sm text md:text-base">About Me</h1>
                      </div>
                  </Link>
                </li>
                <li>
                <Link href="/resume">
                  <div
                        className={
                          pathname == "/resume"
                            ? "bg-black text-white px-4 md:px-8 py-4 dark:text-black dark:bg-white"
                            : " border-b-2 border-black text-black px-4  md:px-8 py-4 dark:text-white dark:border-white"
                        }
                      >
                        <h1 className="text-sm text md:text-base">Resume</h1>
                      </div>
                  </Link>
                </li>
              </ul>


              <div className="grid  md:grid-cols-2 xl:grid-cols-3 xl:px-24 gap-10 mt-12">
                      <div>
                        <div className="border-2 border-black rounded-md hover:shadow-lg dark:border-white min-h-0">
                          <div className="h-40 bg-green-600"></div>
                          <div className="py-2 px-6 space-y-3">
                            <h1 className="font-bold text-2xl dark:text-white">
                              Vision Transformer
                            </h1>
                            <div className="flex">
                              <p className="text-sm bg-green-100 text-green-600 font-semibold px-3  rounded-full">
                                Paper Replication
                              </p>
                            </div>
                            <p className="text-black dark:text-white">
                              A vision transformer, or ViT, is a deep learning
                              architecture designed for computer vision tasks.
                              Unlike traditional convolutional neural networks
                              (CNNs), which rely on convolutional layers to
                              process image data, ViTs utilize self-attention
                              mechanisms commonly found in transformer models.{" "}
                              <a
                                href="https://arxiv.org/abs/2010.11929"
                                className="underline text-green-600"
                              >
                                Vision Transformer Paper
                              </a>{" "}
                              ViT extends the success of transformers from
                              natural language processing to image analysis,
                              demonstrating remarkable performance on various
                              image recognition tasks. This introduction will
                              provide an overview of the key concepts and
                              contributions of the Vision Transformer paper,
                              setting the stage for a deeper exploration of its
                              innovative methodology and experimental results.
                            </p>
                          </div>
                          <div className="flex p-4 justify-end">
                            <a
                              target="blank"
                              href="https://docs.iam-brian.dev/vision-transformer/intro"
                              className="uppercase border-2 border-black dark:border-white dark:text-white px-2  rounded-full"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="border-2 border-black rounded-md hover:shadow-lg dark:border-white">
                          <div className="h-40 bg-orange-600"></div>
                          <div className="py-2 px-6 space-y-3">
                            <h1 className="font-bold text-2xl dark:text-white">
                              Real Time Facemask Detection System
                            </h1>
                            <div className="flex">
                              <p className="text-sm bg-orange-200 text-orange-600 font-semibold px-3  rounded-full">
                                Computer Vision
                              </p>
                            </div>
                            <p className="text-black dark:text-white">
                              The YOLO Real Face Mask Detection System is an
                              advanced computer vision application that utilizes
                              the{" "}
                              <a
                                href="https://pjreddie.com/darknet/yolo/"
                                className="underline text-orange-700"
                              >
                                YOLO (You Only Look Once)
                              </a>{" "}
                              object detection algorithm to identify and
                              categorize whether individuals in images or video
                              streams are wearing face masks accurately and in
                              real-time. This system plays a crucial role in
                              monitoring and enforcing mask-wearing compliance,
                              especially during health crises such as the
                              COVID-19 pandemic. It provides rapid and reliable
                              detection of individuals wearing masks and those
                              who are not, contributing to public health and
                              safety efforts by minimizing the spread of
                              infectious diseases.
                            </p>
                          </div>
                          <div className="flex p-4 justify-end">
                            <a
                              target="blank"
                              href="https://github.com/iam-dante/YoloV5-Facemask-Detection"
                              className="uppercase border-2 border-black dark:border-white dark:text-white px-2  rounded-full"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="border-2 border-black rounded-md hover:shadow-lg dark:border-white">
                          <div className="h-40 bg-sky-600"></div>
                          <div className="py-2 px-6 space-y-3">
                            <h1 className="font-bold text-2xl dark:text-white">
                              Baltimore Police Department Crime
                            </h1>
                            <div className="flex">
                              <p className="text-sm bg-sky-200 text-sky-600 font-semibold px-3  rounded-full">
                                Data Analysis
                              </p>
                            </div>
                            <p className="text-black dark:text-white">
                              <a
                                href="https://data.baltimorecity.gov/datasets/baltimore::part-1-crime-data/explore"
                                className="underline text-sky-700"
                              >
                                Open Baltimore Crime Data
                              </a>{" "}
                              Open Baltimore Crime Data Analysis is a
                              data-driven project focused on exploring and
                              interpreting crime data from the city of
                              Baltimore. By leveraging various analytical
                              techniques, this initiative aims to uncover
                              trends, patterns, and insights within the dataset,
                              providing valuable information to local
                              authorities and communities. Through rigorous
                              analysis, it seeks to enhance understanding of
                              crime dynamics, contribute to informed
                              decision-making, and ultimately promote safer and
                              more secure neighborhoods in Baltimore.
                            </p>
                          </div>
                          <div className="flex p-4 justify-end">
                            <a
                              target="blank"
                              href="https://github.com/iam-dante/Open-Baltimore-Analysis"
                              className="uppercase border-2 border-black dark:border-white dark:text-white px-2  rounded-full"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="border-2 border-black rounded-md hover:shadow-lg dark:border-white min-h-0">
                          <div className="h-40 bg-red-600"></div>
                          <div className="py-2 px-6 space-y-3">
                            <h1 className="font-bold text-2xl dark:text-white">
                              Spot the Mask Challenge
                            </h1>
                            <div className="flex">
                              <p className="text-sm bg-red-200 text-red-600 font-semibold px-3  rounded-full">
                                Deep Learning
                              </p>
                            </div>
                            <p className="text-black dark:text-white">
                              The Spot the Mask Project is an exciting
                              competition-based initiative that harnesses the
                              power of machine learning to classify images
                              exclusively sourced from{" "}
                              <a
                                href="https://zindi.africa/competitions/spot-the-mask"
                                className="underline text-red-600"
                              >
                                Zindi
                              </a>
                              . In this competition, participants are tasked
                              with creating and fine-tuning image classification
                              models to discern whether individuals in these
                              images are wearing masks. It represents a
                              significant and innovative challenge within the
                              machine learning community.
                            </p>
                          </div>
                          <div className="flex p-4 justify-end">
                            <a
                              target="blank"
                              href="https://docs.iam-brian.dev/spot-the-mask/intro"
                              className="uppercase border-2 border-black dark:border-white dark:text-white px-2  rounded-full"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
