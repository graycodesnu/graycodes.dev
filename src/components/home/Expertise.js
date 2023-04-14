// ! Imports
// Import icons
import {
  ComputerDesktopIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
// Import data
import { proficiencies } from "../../data/resumeData";
// Import animation
import { motion } from "framer-motion";

// ! Function
export default function Expertise() {
  // * Frontend
  // Not currently being used, as hard coding the data within these elements has made for easier styling
  const frontendList = proficiencies.frontend.length ? (
    proficiencies.frontend.map((frontend, index) => (
      <li key={index}>{frontend}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  // * Backend
  // Not currently being used, as hard coding the data within these elements has made for easier styling
  const backendList = proficiencies.backend.length ? (
    proficiencies.backend.map((backend, index) => (
      <li key={index}>{backend}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  // * Tools
  // Not currently being used, as hard coding the data within these elements has made for easier styling

  const toolsList = proficiencies.tools.length ? (
    proficiencies.tools.map((tools, index) => <li key={index}>{tools}</li>)
  ) : (
    <p>No data to show.</p>
  );

  // * Animation
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: .5 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  // ** RETURN **
  return (
    <>
      <motion.div
        id="expertise"
        className="px-8 py-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 3 } },
        }}
      >
        <motion.h1
          className="flex justify-center xl:mt-8 text-5xl font-bold tracking-tight text-secondary sm:text-7xl"
          variants={itemVariants}
        >
          <span className="backgroundUnderline">My Expertise </span>
        </motion.h1>
        {/* Front to Tools motion.div w/ motion.dividers */}
        <motion.div className="py-16" variants={itemVariants}>
          {/* Inner motion.div */}
          <div className="h-full pt-10 pb-5 flex flex-wrap lg:justify-between 2xs:justify-center">

            {/* Frontend */}
            <motion.div className="rounded-lg shadow-sm w-96 2xs:mb-4 xl:mb-0 p-5 bg-primary-light" variants={itemVariants}>
              <div className="px-5">
                {/* Heading with icon */}
                <motion.div className="p-2 flex flex-row justify-center items-end" variants={itemVariants}>
                  <ComputerDesktopIcon className="h-12 w-12 mr-5 " />
                  <h2 className="text-secondary text-5xl font-medium frontendUnderline">
                    Frontend
                  </h2>
                </motion.div>
                {/* Data */}
                <div className="m-4 gap-4 flex flex-row justify-around text-silver leading-8 font-inconsolata font-medium text-xl">
                  <div className="flex justify-center">
                    <ul className="">
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>Handlebars</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ul>
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>Material UI</li>
                      <li>Framer Motion</li>
                      <li>HTML</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/*  Green motion.divider */}
            <motion.div className="sm:p-3 lg:p-0 lg:flex 2xs:hidden" variants={itemVariants}>
              <div className="w-0.5 h-64 mt-6 bg-green " />
            </motion.div>

            {/* Backend */}
            <motion.div className="rounded-lg shadow-sm w-96 2xs:mb-4 xl:mb-0 p-5  bg-primary-light" variants={itemVariants}>
              <div className="px-5">
                {/* Heading with icon */}
                <motion.div className="p-2 flex flex-row justify-center items-end" variants={itemVariants}>
                  <Cog8ToothIcon className="h-12 w-12 mr-5 " />
                  <h2 className="text-secondary text-5xl font-medium backendUnderline">
                    Backend
                  </h2>
                </motion.div>
                {/* Data */}
                <div className="m-4 gap-4 flex flex-row justify-around text-silver leading-8 font-inconsolata font-medium text-xl">
                  <div className="flex justify-center">
                    <ul className="">
                      <li>MySQL</li>
                      <li>Node.js</li>
                      <li>Mongoose</li>
                      <li>Postman</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ul>
                      <li>MongoDB</li>
                      <li>Express.js</li>
                      <li>GraphQL</li>
                      <li>Inquirer.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* motion.divider */}
            <motion.div className="sm:p-3 lg:p-0 lg:flex 2xs:hidden" variants={itemVariants}>
              <div className="w-0.5 h-64 mt-6 bg-green" />
            </motion.div>

            {/* Tools */}
            <motion.div className="rounded-lg shadow-sm w-96 2xs:pt-4 xl:mr-0 xl:mt-0 p-5 bg-primary-light" variants={itemVariants}>
              <div className="px-5">
                {/* Heading with icon */}
                <motion.div className="p-2 flex flex-row justify-center items-end" variants={itemVariants}>
                  <WrenchScrewdriverIcon className="h-12 w-12 mr-5 " />
                  <h2 className="text-secondary text-5xl font-medium toolsUnderline">
                    Tools
                  </h2>
                </motion.div>
                {/* Data */}
                <div className="m-4 gap-4 flex flex-row justify-around text-silver leading-8 font-inconsolata font-medium text-xl">
                  <div className="flex justify-center">
                    <ul className="">
                      <li>Git (CLI)</li>
                      <li>GitHub Pages</li>
                      <li>Deta</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ul>
                      <li>GitHub (CI)</li>
                      <li>Heroku</li>
                      <li>Cyclic</li>
                      <li>Whimsical</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
