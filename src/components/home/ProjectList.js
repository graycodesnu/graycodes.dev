// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubIcon.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ProjectList({ project }) {
  return (
    <>
      <div className="py-7">
        <div>{project.screenshot}</div>
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <ul>
          <li>{project.responsibilities}</li>
        </ul>
        <ul>
          <li>{project.skills}</li>
        </ul>
        {/* GitHub */}
        <a href={project.github}>
          <GitHubIcon className="h-6 w-6" />
        </a>
        {/* Live Link */}
        <a href={project.live}>
          <ArrowTopRightOnSquareIcon className="h-6 w-6"/>
        </a>
      </div>
    </>
  );
}
