import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSchool } from "react-icons/lu";

// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    heading: "BugendaiTech Private Limited",
    title: "Associate React Developer",
    location: "Remote",
    description:
      "I work as an Associate React Developer, specializing in React JS and React Native. My responsibilities include developing dynamic UIs, manage state with Redux, design components, optimize performance, integrate APIs, and collaborate with design and development teams.",
    icon: React.createElement(CgWorkAlt),
    date: "Present - 2021",
  },
] as const;

export const educationData = [
  {
    heading: "Kalinga Institute of Industrial Technology",
    title: "B.Tech",
    location: "Bhubaneshwar, Odisha",
    description:
      "I graduated in Computer Science & System Engineering.  It involves understanding algorithms, programming languages, data structures, computer architecture, and the theoretical foundations of computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    heading: "Dehradun Public School",
    title: "Senior Secondary",
    location: "Ghaziabad, Uttar Pradesh",
    description: "I completed my schooling in PCM (Science).",
    icon: React.createElement(LuSchool),
    date: "2017",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    // imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    // imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    // imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    id: 1,
    title: "HTML",
    icon: "FaHtml5",
  },
  {
    id: 2,
    title: "CSS",
    icon: "FaCss3Alt",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "FaJs",
  },
  {
    id: 4,
    title: "React",
    icon: "FaReact",
  },
  {
    id: 5,
    title: "Next.js",
    icon: "SiNextdotjs",
  },
  {
    id: 6,
    title: "Node.js",
    icon: "FaNode",
  },
  {
    id: 7,
    title: "Git",
    icon: "FaGithub",
  },
  {
    id: 8,
    title: "Tailwind",
    icon: "SiTailwindcss",
  },
  {
    id: 9,
    title: "Bootstrap",
    icon: "FaBootstrap",
  },
  {
    id: 10,
    title: "Redux",
    icon: "SiRedux",
  },
] as const;
