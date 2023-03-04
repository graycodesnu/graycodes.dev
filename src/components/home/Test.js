// Import react scroll for view projects link
import { Link } from "react-scroll";
// Import animation
import { motion } from "framer-motion";
// Import data
import { heroData } from "../../data/heroData";
import heroImg from "../../assets/images/heroImg.jpg";

// Animation
const visible = { opacity: 1, y: 0, transition: { duration: 2.7 } };

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
      <div id="hero" className="ml-20 mt-0.5">
        {/* Greeting */}
        <div id="typedtext"></div>

        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.75 } }}
          variants={{
            visible: { transition: { staggerChildren: 0.45 } },
          }}
        >
          <div className="flex">
            <motion.h1
              className="py-2 w-1/3 text-6xl text-secondary font-bold heroUnderline"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible,
              }}
            >
              Hi, I'm Grayson.<span className="inline-flex animate-pulse">_</span>
            </motion.h1>
            {/* Underscore */}
            {/* <motion.span
              className="border animate-pulse py-2 w-1/3 text-6xl text-secondary font-bold "
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible,
              }}
            >
              _
            </motion.span> */}
          </div>

          {/* Bio */}
          <motion.p
            className="text-secondary"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible,
            }}
          >
            {heroBio}
          </motion.p>
          {/* Link */}
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            variants={{
              hidden: { opacity: 0 },
              visible,
            }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-base font-semibold leading-7 text-silver cursor-pointer hover:text-gold"
              variants={{
                hidden: { opacity: -10 },
                visible,
              }}
            >
              View my projects <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        {/* <motion.div
          className="
       lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 10, transition: { duration: 2 } }}
          variants={{ visible: { transition: { staggerChildren: 0.45 } } }}
        >
          <motion.img
            className=""
            src={heroImg}
            alt="Grayson Harvey"
            variants={{
              hidden: { opacity: -10 },
              visible,
            }}
          />
        </motion.div> */}
      </div>
    </>
  );
}
