// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubIcon.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
// Import ProjectModal
import ProjectModal from "./ProjectModal";
// Import useState for modal functionality
import { useState } from "react";
// Import Data
import { projectData } from "../../data/projectData";



export default function ProjectList({ project }) {
  // Modal useState
  const [openModal, setOpenModal] = useState(false);
  // Modal data map
  const modalProjectData = projectData.map((modalProjectData) => (
    <ProjectModal
      key={modalProjectData.id}
      modalProjectData={modalProjectData}
      open={openModal}
      onClose={() => setOpenModal(false)}
    />
  ));
  // Short skill array for project preview card
  const shortSkillArray = project.skillsShort;
  console.log(
    "This is the short skills array from ProjectList!",
    shortSkillArray
  );

  // Detailed skill array for project detail card
  // const detailedSkillArray = project.skillsDetail;
  // console.log(
  //   "This is the detailed skills array from ProjectList!",
  //   detailedSkillArray
  // );

  return (
    <>
      <div className="">
        <div
          onClick={() => setOpenModal(true)}
          className="border-4 border-primary-dark bg-primary shadow-sm shadow-primary-dark h-fit px-4 md:w-128 md:ml-0  2xs:ml-20 2xs:w-96"
        >
          {/* Screenshot */}
          <div> <img src={project.screenshot}/></div>
          {/* TITLE AND LINKS */}
          <div className="flex flex-row justify-between mt-3">
          {/* Title */}
          <h5 className="text-2xl font-medium">
            <span className="projectCardTitle hover:hoverProjectCardTitle">{project.title}</span></h5>
          {/* LINKS DIV */}
          <div className="flex">
          {/* GitHub */}
          <a href={project.github} className="rounded-full text-gold-alt hover:text-gold mr-1">
            <GitHubIcon className="h-8 w-8" />
          </a>
          {/* Live Link */}
          <a href={project.live} className="rounded-full text-gold-alt hover:text-gold ml-1">
            <ArrowTopRightOnSquareIcon className="h-8 w-8" />
          </a>
          </div>
          </div>
          {/* Description */}
          <p className="flex justify-center items-center text-silver my-2 leading-relaxed">{project.description}</p>
          {/* Short Skills */}
          <div className="flex flex-row space-x-2 mt-3 mb-3  2xs:flex-wrap md:flex-nowrap">
            {shortSkillArray.map((skill) => (
              <div className="flex items-center">
              <li className="list-none py-1 px-2 rounded-full bg-primary-dark  shadow-inner shadow-blue-light">{skill}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <div>{modalProjectData}</div>
    </>
  );
}
