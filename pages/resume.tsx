import Head from "next/head";
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
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

        <div className="h-screen  ">
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
                        pathname == "/"
                          ? "bg-black text-white px-4 md:px-8 py-4 dark:text-black dark:bg-white"
                          : " border-b-2 border-black text-black px-4  md:px-8 py-4 dark:text-white dark:border-white"
                      }
                    >
                      <h1 className="text-sm text md:text-base">Projects</h1>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutme">
                    <div
                      className={
                        pathname == "/aboutme"
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

              <div>
                <div className="flex items-center justify-center pb-12 mt-12">
                  <iframe
                    src="/document/Resume_Brian_Temu.pdf"
                    className=" w-5/6 xl:w-3/4 h-screen xl:h-[1160px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
