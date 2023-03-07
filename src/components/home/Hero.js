// Import react scroll for view projects link
import { Link } from "react-scroll";
// Import animation
import { motion } from "framer-motion";
// Import data
import heroImg from "../../assets/images/heroImg.jpg";

// Animations for elements to appear on page
const visible = { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.4 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

// Animations for icon draw
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Hero() {
  return (
    <>
      <motion.div
        id="hero"
        className="relative ml-20 mt-0.5 h-screen"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <div className="mx-auto max-w-7xl">
          {/* Greeting, bio, link */}
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            {/* Greeting, bio, link */}
            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              {/* Greeting */}
              <div className=" mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <motion.h1
                  className="2xs:pb-3 2xl:pb-0 text-5xl font-bold tracking-tight text-secondary sm:text-6xl "
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible,
                  }}
                >
                  <span className="heroUnderline">
                    Hi, I'm Grayson.
                    <span className="inline-flex animate-pulse">_</span>
                  </span>
                </motion.h1>
              </div>

              {/* Bio */}
              <motion.div
                className=" z-50 2xs:shadow-2xl 2xs:shadow-blue 2xl:shadow-none 2xs:px-3 2xl:px-0 rounded-md 2xs:mt-6 2xl:mt-3 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
                variants={itemVariants}
              >
                <motion.p
                  className="pt-3 text-xl leading-8 font-normal text-silver"
                  variants={itemVariants}
                >
                  I'm a{" "}
                  <span className="bioUnderline tracking-wider	font-inconsolata">
                    full-stack engineer
                  </span>{" "}
                  with strong skills in{" "}
                  <span className="bioDataUnderline tracking-wider font-inconsolata">
                    JavaScript
                  </span>
                  ,{" "}
                  <span className="bioDataUnderline tracking-wider font-inconsolata">
                    React.js
                  </span>
                  ,{" "}
                  <span className="bioDataUnderline tracking-wider font-inconsolata">
                    Node.js
                  </span>
                  ,{" "}
                  <span className="bioDataUnderline tracking-wider  font-inconsolata">
                    MongoDB
                  </span>
                  , and{" "}
                  <span className="bioDataUnderline tracking-wider font-inconsolata">
                    MySQL
                  </span>
                  . I recently earned a certificate in full-stack development
                  from Northwestern University, complementing my degrees in
                  Psychology and International Studies.{" "}
                </motion.p>
                {/* Link */}
                <motion.div
                  className="mt-10 pb-2 flex items-center gap-x-6"
                  variants={itemVariants}
                >
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-base font-semibold leading-7 text-silver cursor-pointer hover:text-gold"
                  >
                    View my projects <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="2xs:hidden 2xl:flex 
       lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <motion.img
            className="brightness-75 drop-shadow-xl aspect-auto object-cover rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            src={heroImg}
            alt="Grayson Harvey"
            variants={itemVariants}
          />
        </div>

        {/* Icons */}
        <motion.div
          className=" z-0 flex flex-col mt-28 xl:mr-14 xs:flex 1xl:hidden 
       absolute inset-y-0 right-0 w-fit h-fit"
          variants={itemVariants}
        >
          {/* Square Stack SVG */}
          {/* <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.75"
            stroke="rgba(179, 89, 25, 0.35)"
            className="2xl:invisible aspect-auto object-contain rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              variants={draw}
              custom={1}
            />
          </motion.svg> */}
          {/* Bracket SVG */}
          {/* <motion.svg
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width=".75"
            stroke="currentColor"
            className=" 2xl:invisible aspect-auto object-contain rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              stroke="rgba(11, 121, 116, 0.35)"
              variants={draw}
              custom={2}
            />
          </motion.svg> */}

          {/* Light Bulb SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width=".5"
            className="2xl:invisible aspect-auto object-contain rounded-lg xl:aspect-auto lg:h-64 lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              stroke="rgba(216, 157, 70, 0.5)"
              variants={draw}
              custom={5}
            />
          </motion.svg>

          

          {/* Solid Square Stack SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0e0e0e"
            stroke-width=".5"
            className="2xl:invisible aspect-auto object-contain rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"
              stroke="rgba(160, 64, 72, 0.75)"
              variants={draw}
              custom={1}
            />
            <motion.path
              d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"
              stroke="rgba(95, 76, 154, 0.75)"
              variants={draw}
              custom={2.5}
            />
            <motion.path
              d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z"
              variants={draw}
              custom={4}
              stroke="rgba(179, 89, 25, 0.75)"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </>
  );
}
