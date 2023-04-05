// Import react scroll for view projects link
import { Link } from "react-scroll";
// Import animation
import { motion } from "framer-motion";
// Import data
import { heroData } from "../../data/heroData";
import heroImg from "../../assets/images/heroImg.jpg";
// Icons
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

//! Animation
const visible = { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.4 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function Hero() {
  // Data Imports
  // Bio
  const heroBio = heroData.bio.length ? (
    heroData.bio.map((bio, index) => <h1 key={index}>{bio}</h1>)
  ) : (
    <p>Data Not Found</p>
  );

  return (
    <>
      <div id="hero" className="">
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Greeting */}
          <div className="">
            <motion.h1
              className="py-2 w-1/3 text-6xl text-secondary font-bold heroUnderline"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
            >
              Hi, I'm Grayson.
              <span className="inline-flex animate-pulse">_</span>
            </motion.h1>
          </div>

          {/* Bio, Link, Img */}
          <div className="flex justify-evenly items-center">
            {/* Bio, Link */}
            <div>
              {/* Bio */}
              <div>
                <motion.p
                  className="max-w-3xl  text-silver text-2xl font-normal "
                  variants={itemVariants}
                >
                  I'm a{" "}
                  <span className="underline font-medium">
                    full-stack engineer
                  </span>{" "}
                  with strong skills in{" "}
                  <span className="underline decoration-blue-light font-medium">
                    JavaScript
                  </span>
                  ,{" "}
                  <span className="underline decoration-purple font-medium">
                    React.js
                  </span>
                  ,{" "}
                  <span className="underline decoration-purple font-medium">
                    Node.js
                  </span>
                  ,{" "}
                  <span className="underline decoration-blue-light font-medium">
                    MongoDB
                  </span>
                  , and{" "}
                  <span className="underline decoration-blue-light font-medium">
                    MySQL
                  </span>
                  . I recently earned a certificate in full-stack development
                  from Northwestern University, complementing my degrees in
                  Psychology and International Studies.
                </motion.p>
              </div>
              {/* Link */}
              <motion.div
                className="mt-10 flex items-center gap-x-6"
                variants={itemVariants}
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="relative text-lg font-semibold leading-7 text-silver cursor-pointer hover:text-gold"
                >
                  View my projects <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.img
              className=" w-96 h-45"
              src={heroImg}
              alt="Grayson Harvey"
              variants={itemVariants}
            />
          </div>
        </motion.div>
      </div>




      {/* *********************** CARD TEST *********************** */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>



{/* storing code for old cards */}
<div
        onClick={() => setOpenModal(true)}
        className="border-4 border-silver bg-primary shadow-sm shadow-primary-dark h-fit md:w-128 md:ml-0  2xs:ml-20 2xs:w-96"
      >
        {/* Screenshot */}
        <div>
          {" "}
          <img src={project.screenshot} />
        </div>
        {/* TITLE AND LINKS */}
        <div className="flex flex-row justify-between mt-3">
          {/* Title */}
          <h5 className="text-2xl font-medium">
            <span className="projectCardTitle hover:hoverProjectCardTitle">
              {project.title}
            </span>
          </h5>
          {/* LINKS DIV */}
          <div className="flex">
            {/* GitHub */}
            <a
              href={project.github}
              className="rounded-full text-gold-alt hover:text-gold mr-1"
            >
              <GitHubIcon className="h-8 w-8" />
            </a>
            {/* Live Link */}
            <a
              href={project.live}
              className="rounded-full text-gold-alt hover:text-gold ml-1"
            >
              <ArrowTopRightOnSquareIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
        {/* Description */}
        <p className="flex justify-center items-center text-silver my-2 leading-relaxed">
          {project.description}
        </p>
        {/* Short Skills */}
        <div className="flex flex-row space-x-2 mt-3 mb-3  2xs:flex-wrap md:flex-nowrap">
          {shortSkillArray.map((skill) => (
            <div className="flex items-center">
              <li className="list-none py-1 px-2 rounded-full bg-primary-dark  shadow-inner shadow-blue-light">
                {skill}
              </li>
            </div>
          ))}
        </div>
      </div>




{/* ***** CORE CARDS STORAGE ****** */}


              {/* Screenshot */}
              <div>
          {" "}
          <img src={project.screenshot} />
        </div>
        {/* TITLE AND LINKS */}
        <div className="flex flex-row justify-between mt-3">
          {/* Title */}
          <h5 className="text-2xl font-medium">
            <span className="projectCardTitle hover:hoverProjectCardTitle">
              {project.title}
            </span>
          </h5>
          {/* LINKS DIV */}
          <div className="flex">
            {/* GitHub */}
            <a
              href={project.github}
              className="rounded-full text-gold-alt hover:text-gold mr-1"
            >
              <GitHubIcon className="h-8 w-8" />
            </a>
            {/* Live Link */}
            <a
              href={project.live}
              className="rounded-full text-gold-alt hover:text-gold ml-1"
            >
              <ArrowTopRightOnSquareIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
        {/* Description */}
        <p className="flex justify-center items-center text-silver my-2 leading-relaxed">
          {project.description}
        </p>
        {/* Short Skills */}
        <div className="flex flex-row space-x-2 mt-3 mb-3  2xs:flex-wrap md:flex-nowrap">
          {shortSkillArray.map((skill) => (
            <div className="flex items-center">
              <li className="list-none py-1 px-2 rounded-full bg-primary-dark  shadow-inner shadow-blue-light">
                {skill}
              </li>
            </div>
          ))}
        </div>





        <div
        onClick={() => setOpenModal(true)}
        className="border-4 border-silver bg-primary shadow-sm shadow-primary-dark h-fit md:w-128 md:ml-0  2xs:ml-20 2xs:w-96"
      >
    </>
  );
}
