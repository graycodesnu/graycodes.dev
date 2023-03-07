// Import react scroll for view projects link
import { Link } from "react-scroll";
// Import animation
import { motion } from "framer-motion";
// Import data
import heroImg from "../../assets/images/heroImg.jpg";
// Code bracket icon
// import { ReactComponent as CodeBracketIcon } from "../../assets/icons/codeBracket.svg";

// Animations for appearing on page
const visible = { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.4 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

// Animations for code bracket appearing
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
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
          {/* Greeting, bio, link, polygon */}
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
                className="2xs:shadow-2xl 2xs:shadow-blue 2xl:shadow-none 2xs:px-3 2xl:px-0 rounded-md 2xs:mt-6 2xl:mt-3 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
                variants={itemVariants}
              >
                <motion.p
                  className=" pt-3 text-xl leading-8 font-normal text-silver"
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
        {/* 2xs:hidden 2xl:flex */}
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

        {/* Code bracket icon */}
        <motion.div
          className="mt-10 py-20 xs:flex 1xl:hidden justify-items-center
       absolute inset-y-0 right-0 w-fit h-fit"
          variants={itemVariants}
        >
          <motion.svg
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" 2xl:invisible aspect-auto object-fill rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              stroke="#B35919"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <motion.svg
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" 2xl:invisible aspect-auto object-fill rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              stroke="#B35919"
              variants={draw}
              custom={2}
            />
          </motion.svg>
          <motion.svg
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" 2xl:invisible aspect-auto object-fill rounded-lg xl:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            variants={draw}
          >
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              stroke="#B35919"
              variants={draw}
              custom={3}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </>
  );
}
