// ! Imports
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
// Import useState for modal functionality
import { useState } from "react";
// Import Data
import { featuredProjectData } from "../../data/featuredProjectData";
// Import project detail pages
import GoodWeeds from "../../pages/projects/GoodWeeds";
// Import Animation
import { motion } from "framer-motion";

// ! Function
export default function ProjectList({ featuredProject }) {
  //* Short skill array for project preview card
  const shortSkillArray = featuredProject.skillsShort;

  // * Animation
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible,
  };

  // ** RETURN **
  return (
    <>
      <motion.li
        className="col-span-3 flex flex-col rounded-lg bg-primary-light shadow-sm shadow-primary-dark hover:shadow-primary-light hover:shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        <a href={featuredProject.live} target="_blank" rel="noreferrer">
          <motion.img
            className="rounded-t-lg mx-auto flex-shrink-0 object-cover brightness-90 hover:brightness-100"
            src={featuredProject.screenshot}
            alt={featuredProject.title}
            aria-label={featuredProject.title}
            variants={itemVariants}
          />
        </a>
        <motion.div
          className="flex flex-1 flex-col px-5 py-5"
          variants={itemVariants}
        >
          <motion.h3
            className="mt-1 text-xl font-semibold"
            variants={itemVariants}
          >
            {featuredProject.title}
          </motion.h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <motion.dd
              className="text-sm text-silver mt-1"
              variants={itemVariants}
            >
              {featuredProject.description}
            </motion.dd>
            <dt className="sr-only">Description</dt>
            <dd className="sr-only">Skills</dd>
          </dl>
        </motion.div>
        {/* Skills */}
        <span className="inline-flex flex-wrap items-center rounded-full py-0.5 leading-relaxed text-sm font-medium font-inconsolata my-2 ml-1">
          {shortSkillArray.map((skill) => (
            <motion.div className="flex items-center" variants={itemVariants}>
              <li className="list-none py-1 px-2 m-1 rounded-full outline bg-blue outline-blue-light cursor-default">
                {skill}
              </li>
            </motion.div>
          ))}
        </span>
        <div>
          {/* ***** Links ***** */}
          <motion.div
            className="-mt-px flex divide-x divide-green-opaque"
            variants={itemVariants}
          >
            <div className="flex w-0 flex-1 rounded-bl-lg hover:bg-blue">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-green-opaque hover:border-none py-4 text-sm font-semibold hover:text-gold"
              >
                <GitHubIcon
                  className="h-5 w-5 text-secondary"
                  aria-hidden="true"
                />
                GitHub
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1 rounded-br-lg hover:bg-blue ">
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-green-opaque hover:border-none py-4 text-sm font-semibold text-silver hover:text-gold"
              >
                <ArrowTopRightOnSquareIcon
                  className="h-5 w-5 text-secondary"
                  aria-hidden="true"
                />
                Live Link
              </a>
            </div>
          </motion.div>
        </div>
      </motion.li>
    </>
  );
}
