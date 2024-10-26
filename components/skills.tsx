"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border flex gap-2 items-center border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={skill.id}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.title}
            {skill.icon === "FaHtml5" && <FaHtml5 size={25} />}
            {skill.icon === "FaCss3Alt" && <FaCss3Alt size={25} />}
            {skill.icon === "FaJs" && <FaJs size={25} />}
            {skill.icon === "FaReact" && <FaReact size={25} />}
            {skill.icon === "SiNextdotjs" && <SiNextdotjs size={25} />}
            {skill.icon === "FaNode" && <FaNode size={25} />}
            {skill.icon === "FaGithub" && <FaGithub size={25} />}
            {skill.icon === "SiTailwindcss" && <SiTailwindcss size={25} />}
            {skill.icon === "FaBootstrap" && <FaBootstrap size={25} />}
            {skill.icon === "SiRedux" && <SiRedux size={25} />}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
