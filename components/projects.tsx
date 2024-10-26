"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      {/* {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))} */}
      <h1 className="text-2xl my-56">Coming Soon</h1>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

// function Project({ title, description, tags, imageUrl }: ProjectProps) {
//   return (
//     <section className="group bg-lightGray3 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-lightGray2 transition">
//       <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
//         <h3 className="text-2xl font-semibold">{title}</h3>
//         <p className="mt-2 leading-relaxed text-darkGray">{description}</p>
//         <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//           {tags.map((tag, index) => (
//             <li
//               className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
//               key={index}
//             >
//               {tag}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }
