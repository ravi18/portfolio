"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a results-driven frontend developer, I bring to the table over 3+
        years of valuable experience in the dynamic field of developing and
        delivering high-quality web and mobile applications. Throughout my
        professional journey, I have consistently demonstrated a commitment to
        achieving tangible results and ensuring the successful delivery of
        projects. My expertise lies in leveraging technology to solve intricate
        problems, and I have cultivated a specialization in React, a powerful
        JavaScript library commonly employed for building user interfaces in
        modern web and mobile applications.
      </p>
      <p>
        My passion for harnessing technology to address complex challenges fuels
        my dedication to delivering innovative and effective solutions. Whether
        it&apos;s crafting intuitive user interfaces or optimizing the
        performance of web and mobile applications, I thrive on creating
        impactful and seamless experiences. If you are looking to embark on your
        next project and seeking a software developer who not only possesses
        technical proficiency but is also deeply passionate about the
        transformative potential of technology, I invite you to connect with me.
        Let&apos;s explore how my skills and enthusiasm can contribute to
        bringing your ideas to life and achieving success in your endeavors.
      </p>
    </motion.section>
  );
}
