// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubIcon.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ProjectList({ project }) {
  // Short skill array for project preview card
  const shortSkillArray = project.skillsShort;
  console.log(
    "This is the short skills array from ProjectList!",
    shortSkillArray
  );

  // Detailed skill array for project detail card
  const detailedSkillArray = project.skillsDetail;
  console.log(
    "This is the detailed skills array from ProjectList!",
    detailedSkillArray
  );

  return (
    <>
      <div className="">
        <div className="border border-green h-fit px-2">
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
          {/* Short Skills */}
          <div className="flex flex-row">
            {shortSkillArray.map((skill) => (
              <li className="list-none p-3">{skill}</li>
            ))}
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
      {/* Detailed Skills */}
      <div>
        {detailedSkillArray.map((skill) => (
          <li className="list-none px-1">{skill}</li>
        ))}
      </div>
    </>
  );
}
