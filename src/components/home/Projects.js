// ! Imports
// Import state
import { useState } from "react";
// Import project components
import FeaturedProjectList from "./FeaturedProjectList";
import InProgressProject from "./InProgressProjectList";
import ProjectList from "./OtherProjectList";
// Import data
import { otherProjectData } from "../../data/otherProjectData";
import { featuredProjectData } from "../../data/featuredProjectData";
import { inProgressProjectData } from "../../data/inProgressProjectData";
// Import Animation
import { motion } from "framer-motion";

// ! Function
export default function Projects() {
  // * Featured Projects
  const featuredProjectDataList = featuredProjectData.map((featuredProject) => (
    <FeaturedProjectList
      key={featuredProject.id}
      featuredProject={featuredProject}
    />
  ));

  console.log(featuredProjectDataList, "FEATURING DATA FROM PROJECT COMPONENT");

  // * In Progress Project
  const inProgressProjectDataList = inProgressProjectData.map(
    (inProgressProject) => (
      <InProgressProject
        key={inProgressProject.id}
        inProgressProject={inProgressProject}
      />
    )
  );

  // * Other Projects
  // Map over project data to return ProjectList component
  const otherProjectDataList = otherProjectData.map((otherProject) => (
    <ProjectList key={otherProject.id} otherProject={otherProject} />
  ));

  // * Animation
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: .75, delay: 0.4 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  // ** RETURN **
  return (
    <>
      <motion.div
        id="projects"
        className="px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        <motion.h1
          className="xl:mt-16 text-5xl font-bold tracking-tight text-secondary sm:text-7xl"
          variants={itemVariants}
        >
          <span className="projectHeadingUnderline">My Projects</span>
        </motion.h1>
        {/* Featured */}
        <div className="mt-7 py-3 px-8">
          <motion.h2
            className="text-secondary text-5xl font-semibold flex justify-center"
            variants={itemVariants}
          >
            <span className="featuredProjectsUnderline">Featured</span>
          </motion.h2>
          {/* Featured Grid */}
          <motion.ul className="mt-8 pt-6 pb-7 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
            {featuredProjectDataList}
          </motion.ul>
        </div>
        {/* In Progress */}
        <div className="">{inProgressProjectDataList}</div>
        {/* Other */}
        <div className="mt-12 py-3 px-8">
          <span>
            <h2 className="text-secondary text-5xl font-semibold flex">
              <span className="otherProjectsUnderline">Noteworthy</span>
            </h2>
            <h2 className="text-secondary text-5xl font-semibold flex">
              <span className="otherProjectsUnderline">Projects</span>
            </h2>
          </span>
          {/* Other Grid */}
          <ul
            className="mt-10 pt-6 pb-7 px-8 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
            }}
          >
            {otherProjectDataList}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
