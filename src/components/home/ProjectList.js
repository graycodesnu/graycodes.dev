// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
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
      <li className="col-span-1 flex flex-col divide-y divide-green rounded-lg bg-primary-light shadow">
        <div className="flex flex-1 flex-col p-8">
          <img
            className="mx-auto min-h-fit min-w-f flex-shrink-0 rounded-sm"
            src={project.screenshot}
            alt=""
          />
          <h3 className="mt-6 text-xl font-semibold">
            {project.title}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-silver">{project.description}</dd>
            <dt className="sr-only">Description</dt>
            <dd className="mt-3">
              {/* Skills */}
              <span className="justify-items-start inline-flex items-center rounded-full bg-primary-dark py-0.5 text-xs font-medium ">
                {shortSkillArray.map((skill) => (
                  <div className="flex items-center">
                    <li className="list-none py-1 px-2 rounded-full bg-orange">
                      {skill}
                    </li>
                  </div>
                ))}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          {/* ***** Links ***** */}
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={project.github}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <GitHubIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                GitHub
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={project.live}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <ArrowTopRightOnSquareIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Live Link
              </a>
            </div>
          </div>
        </div>
      </li>

      {/* Modal */}
      <div>{modalProjectData}</div>
    </>
  );
}
