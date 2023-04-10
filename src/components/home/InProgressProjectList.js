// ! Imports
// Import data
import { inProgressProjectData } from "../../data/inProgressProjectData";
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
// Import screenshot
import { ReactComponent as MyPetsLogo } from "../../assets/project-screenshots/misc/my-pets-logo.svg";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

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
      <div>
        {/* Heading */}
        <div>
          <h2 className="text-secondary text-5xl font-medium flex">
            <span className="inProgressProjectUnderline">In</span>
          </h2>
          <h2 className="text-secondary text-5xl font-medium flex">
            <span className="inProgressProjectUnderline">Progress</span>
          </h2>
        </div>
        {/* Project Info Section */}
        <div>
          {/* Title */}
          <span className="inline-flex mt-4 min-w-full">
            <h3 className="text-secondary font-semibold text-2xl">
              {inProgressProject.title}
            </h3>
            <GitHubIcon className="h-8 w-8 text-green" />
          </span>
        </div>
      </div>
{/* Tailwind Div */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              {/* Project Info */}
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
                <span className="inline-flex flex-wrap justify-items-start rounded-full py-0.5 leading-relaxed text-sm font-medium font-inconsolata mt-10">
                  {shortSkillArray.map((skill) => (
                    <div className="flex items-center">
                      <li className="list-none py-1 px-2 m-1 rounded-full outline bg-blue outline-blue-light cursor-default">
                        {skill}
                      </li>
                    </div>
                  ))}
                </span>
                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gold lg:max-w-none">
                  <div key={inProgressProject.description} className="relative pl-9">
                    <dt className="inline font-semibold text-green">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {inProgressProject.description}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
              </dl> */}
              </div>
            </div>
            {/* Logo */}
            <div className="sm:px-6 lg:px-0">
              {/* <div className="relative isolate overflow-hidden bg-primary-light px-6 py-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none"> */}

              <MyPetsLogo className="h-72 w-72" />

              {/* <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden rounded-tl-xl bg-red ring-1 ring-gold">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">Blah blah blah </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
