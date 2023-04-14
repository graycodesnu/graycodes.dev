// ! Imports
// Import data
import { inProgressProjectData } from "../../data/inProgressProjectData";
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
// Import screenshot
import { ReactComponent as MyPetsLogo } from "../../assets/project-screenshots/misc/my-pets-logo.svg";
// Import Animation
import { motion } from "framer-motion";

// ! Function
export default function InProgressProject({ inProgressProject }) {
  // * Short skill array for project preview card
  const shortSkillArray = inProgressProject.skillsShort;

  // * Animation
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible,
  };

  // ** Return **
  return (
    <>
      <motion.div
        className="overflow-hidden py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-secondary text-5xl font-semibold flex justify-center mb-12"
          variants={itemVariants}
        >
          <span className="inProgressProjectUnderline">In Progress</span>
        </motion.h2>
        {/* Project Section */}
        <motion.div className="mx-auto max-w-7xl md:px-6 lg:px-8  flex justify-center" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 ml-20 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              {/* Inner Project Info */}
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                {/* Title */}
                <motion.h3
                  className="mt-1 text-3xl font-bold tracking-tight text-secondary sm:text-4xl"
                  variants={itemVariants}
                >
                  {inProgressProject.title}
                </motion.h3>

                {/* Description */}
                <div className="mt-6 text-lg leading-8 text-silver">
                  <motion.p variants={itemVariants}>
                    {inProgressProject.description1}
                  </motion.p>

                  <motion.p className="mt-4" variants={itemVariants}>
                    {inProgressProject.description2}
                  </motion.p>
                </div>
                {/* Skills */}
                <span className="inline-flex flex-wrap justify-items-start rounded-full py-0.5 leading-relaxed text-sm font-medium font-inconsolata mt-8">
                  {shortSkillArray.map((skill) => (
                    <motion.div
                      className="flex items-center"
                      variants={itemVariants}
                    >
                      <li className="list-none py-1 px-2 m-1 rounded-full outline bg-blue outline-blue-light cursor-default">
                        {skill}
                      </li>
                    </motion.div>
                  ))}
                </span>
                {/* GitHub */}
                <a href={inProgressProject.github}>
                  <motion.button
                    className="mt-10 inline-flex items-center justify-center min-w-full rounded-md font-semibold text-md py-1 outline outline-green hover:outline-none hover:text-gold hover:bg-blue hover:shadow-lg hover:shadow-primary-light"
                    variants={itemVariants}
                  >
                    View Our Progress on GitHub
                    <GitHubIcon className="h-6 ml-3" />
                  </motion.button>
                </a>
              </div>
            </div>
            {/* Logo */}
            <motion.div
              className="mt-12  hidden lg:flex flex-col"
              variants={itemVariants}
            >
              <MyPetsLogo className="h-72" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
