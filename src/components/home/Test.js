// Import react scroll for view projects link
import { Link } from "react-scroll";
// Import animation
import { motion } from "framer-motion";
// Import data
import { heroData } from "../../data/heroData";
import heroImg from "../../assets/images/heroImg.jpg";

// Animation
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

      {/* CONTACT TEST */}
      <form
        action="#"
        method="POST"
        className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      >
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
         {/* DIV WITHOUT BUTTON */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            
            {/* FIRST NAME DIV */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* LAST NAME DIV */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* EMAIL DIV */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* PHONE DIV */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* MESSAGE DIV */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/* BUTTON DIV */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
