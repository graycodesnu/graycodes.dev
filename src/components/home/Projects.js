// ! Imports
// Import state
import { useState } from "react";
// Import project components
import FeaturedProjectList from "./FeaturedProjectList"
import ProjectList from "./ProjectList";
// Import data
import { projectData } from "../../data/projectData";
import { featuredProjectData } from "../../data/featuredProjectData";

// ! Function
export default function Projects() {
  
  // * Featured Projects
  const featuredProjectDataList = featuredProjectData.map((featuredProject) => (
    <FeaturedProjectList key={featuredProject.id} featuredProject={featuredProject} />

  ))
  
  console.log(featuredProjectDataList, "FEATURING DATA FROM PROJECT COMPONENT")

  
  // * Project Cards
  // Map over project data to return ProjectList component
  const projectDataList = projectData.map((project) => (
    <ProjectList key={project.id} project={project} />
  ));

  // ** RETURN **
  return (
    <>
      <div id="projects">
        <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
          <span className="projectHeadingUnderline">My Projects</span>
        </h1>
{/* Featured */}
        <div className="">
          <h2 className="text-secondary text-5xl font-medium ">
            <span className="frontendUnderline">Featured</span>
          </h2>
{featuredProjectDataList}
        </div>

{/* Grid */}
        <ul className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
            {projectDataList}
          </ul>
      </div>
    </>
  );
}
