// ! Imports
// Import state
import { useState } from "react";
// Import project components
import FeaturedProjectList from "./FeaturedProjectList";
import InProgressProject from "./InProgressProject";
import ProjectList from "./ProjectList";
// Import data
import { projectData } from "../../data/projectData";
import { featuredProjectData } from "../../data/featuredProjectData";
import { inProgressProjectData } from "../../data/inProgressProjectData";

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

  // * Project Cards
  // Map over project data to return ProjectList component
  const projectDataList = projectData.map((project) => (
    <ProjectList key={project.id} project={project} />
  ));

  // ** RETURN **
  return (
    <>
      <div id="projects">
        <h1 className="xl:mt-16 text-5xl font-bold tracking-tight text-secondary sm:text-7xl">
          <span className="projectHeadingUnderline">My Projects</span>
        </h1>
        {/* Featured */}
        <div className="mt-7">
          <h2 className="text-secondary text-5xl font-medium flex justify-center">
            <span className="featuredProjectsUnderline">Featured</span>
          </h2>
          {/* Grid */}
          <ul className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
            {featuredProjectDataList}
          </ul>
        </div>
        {/* In Progress */}
        <div className="mt-14">{inProgressProjectDataList}</div>
      </div>
    </>
  );
}
