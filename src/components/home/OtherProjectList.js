// ! Imports
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
// Import Data
import { otherProjectData } from "../../data/otherProjectData";

// ! Function
export default function OtherProjectList({ otherProject }) {
  //* Short skill array for project preview card
  const shortSkillArray = otherProject.skillsShort;
  console.log(
    "This is the short skills array from ProjectList!",
    shortSkillArray
  );

  //? Detailed skill array for project detail card
  // const detailedSkillArray = project.skillsDetail;
  // console.log(
  //   "This is the detailed skills array from ProjectList!",
  //   detailedSkillArray
  // );

  // ! Display detail switch case
  // const [view, setView] = useState("ProjectList")

  // function displayPage() {
  //   switch(view) {
  //     case "ProjectList":
  //       return <ProjectList />
  //     case "GoodWeeds":
  //       return <GoodWeeds/>
  //     default:
  //     return <ProjectList />
  //   }
  // }

  return (
    <>
      <li className="col-span-3 flex flex-col rounded-lg bg-primary-light shadow-sm shadow-primary-dark hover:shadow-primary-light hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <div className="flex flex-1 flex-col px-5 py-5 brightness-100">
          <h3 className="mt-1 text-xl font-semibold">{otherProject.title}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-silver mt-1">
              {otherProject.description}
            </dd>
            <dt className="sr-only">Description</dt>
            <dd className="sr-only">Skills</dd>
          </dl>
        </div>
        {/* Skills */}
        <span className="inline-flex flex-wrap items-center rounded-full py-0.5 leading-relaxed text-sm font-medium font-inconsolata mb-2 ml-1 ">
          {shortSkillArray.map((skill) => (
            <div className="flex items-center">
              <li className="list-none py-1 px-2 m-1 rounded-full outline bg-blue outline-blue-light cursor-default">
                {skill}
              </li>
            </div>
          ))}
        </span>
        <div>
          {/* ***** Links ***** */}
          <div className="-mt-px flex divide-x divide-green-opaque">
            <div className="flex w-0 flex-1 rounded-bl-lg hover:bg-blue">
              <a
                href={otherProject.github}
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
                href={otherProject.live}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-green-opaque hover:border-none py-4 text-sm font-semibold text-silver hover:text-gold"
              >
                <ArrowTopRightOnSquareIcon
                  className="h-5 w-5 text-secondary"
                  aria-hidden="true"
                />
                Live Link
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
