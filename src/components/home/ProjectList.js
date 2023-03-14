// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubIcon.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";


export default function ProjectList({ project }) {

const skillArray = project.skills
console.log(skillArray)


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
          {/* Skills */}
          <div>
            
            {skillArray.map(skill => (
              <li>{skill}</li>
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
    </>
  );
}
