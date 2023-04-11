// ! Imports
// Import data
import { inProgressProjectData } from "../../data/inProgressProjectData";
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
// Import screenshot
import { ReactComponent as MyPetsLogo } from "../../assets/project-screenshots/misc/my-pets-logo.svg";

// ! Function
export default function InProgressProject({ inProgressProject }) {
  // * Short skill array for project preview card
  const shortSkillArray = inProgressProject.skillsShort;
  console.log(
    "This is the short skills array from InProgessProject!",
    shortSkillArray
  );

  // ** Return **
  return (
    <>
      <div className="overflow-hidden py-16 ">
        {/* Section Title */}
        <h2 className="text-secondary text-5xl font-medium flex justify-center mb-12">
          <span className="inProgressProjectUnderline">In Progress</span>
        </h2>
        {/* Project Section */}
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8  flex justify-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 ml-20 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              {/* Inner Project Info */}
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                {/* Title */}
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                  {inProgressProject.title}
                </h3>

                {/* Description */}
                <div className="mt-6 text-lg leading-8 text-silver">
                  <p>{inProgressProject.description1}</p>

                  <p className="mt-4">{inProgressProject.description2}</p>
                </div>
                {/* Skills */}
                <span className="inline-flex flex-wrap justify-items-start rounded-full py-0.5 leading-relaxed text-sm font-medium font-inconsolata mt-8">
                  {shortSkillArray.map((skill) => (
                    <div className="flex items-center">
                      <li className="list-none py-1 px-2 m-1 rounded-full outline bg-blue outline-blue-light cursor-default">
                        {skill}
                      </li>
                    </div>
                  ))}
                </span>
                {/* GitHub */}
                <a href={inProgressProject.github}>
                  <button className="mt-10 inline-flex items-center justify-center min-w-full rounded-md font-medium text-md py-1 outline outline-green hover:outline-none hover:text-gold hover:bg-blue hover:shadow-lg hover:shadow-primary-light">
                    View Our Progress on GitHub{" "}
                    <GitHubIcon className="h-6 ml-3" />
                  </button>
                </a>
              </div>
            </div>
            {/* Logo */}
            <div className="mt-16  hidden lg:flex flex-col">
              <MyPetsLogo className="h-72" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
