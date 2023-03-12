// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubIcon.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ProjectList({ project }) {
  return (
    <>
      <div className="border border-red py-4">
        <div className="border">
        {/* Screenshot */}
        <div>{project.screenshot}</div>
        {/* Title */}
        <h5 className="text-xl font-medium">{project.title}</h5>
        {/* Description */}
        <p>{project.description}</p>
        {/* Reponsibilities */}
        <ul>
          <li>{project.responsibilities}</li>
        </ul>
        {/* Skills */}
        <div className="">
         <span className="border">
            {project.skills}
          </span>
        </div>
        {/* GitHub */}
        <a href={project.github}>
          <GitHubIcon className="h-6 w-6" />
        </a>
        {/* Live Link */}
        <a href={project.live}>
          <ArrowTopRightOnSquareIcon className="h-6 w-6" />
        </a>
        </div>
      </div>
    </>
  );
}
