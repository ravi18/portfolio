"use client";

import Image from "next/image";
import React from "react";
import ProfilePicture from "@/public/profile-picture.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={ProfilePicture}
            alt="Ravi Pratap Singh"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="w-80 h-80 object-cover blob"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-4 mt-4 px-4 text-2xl font-medium sm:text-4xl">
          Hi I'm
          <span className="mb-5 mt-4 px-4 text-2xl font-bold sm:text-4xl">
            Ravi Pratap Singh
          </span>
        </h1>
        <span className="text-xl font-bold sm:text-2xl">
          <Typewriter
            words={[
              "Frontend Developer",
              "React JS Developer",
              "React Native Developer",
            ]}
            loop={true}
            cursor
            cursorStyle={"|"}
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-5 flex flex-row items-center justify-center gap-2 px-2 text-lg font-medium"
      >
        <a
          className="group bg-black3 hover:bg-darkMain text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer dark:bg-white/10"
          href="/Ravi_Pratap_Singh_Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-darkGray flex items-center gap-2 rounded-full border focus:scale-[1.15] hover:scale-[1.15] hover:text-black2 active:scale-[1.15] transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ravi-pratap-singh-092b5218b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-darkGray flex items-center gap-2 text-[1.35rem] rounded-full border focus:scale-[1.15] hover:scale-[1.15] hover:text-black2 active:scale-[1.15] transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ravi18"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
