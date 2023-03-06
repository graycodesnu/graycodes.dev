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
              className=" border py-2 w-1/3 text-6xl text-secondary font-bold heroUnderline"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
            >
              Hi, I'm Grayson.
              <span className="inline-flex animate-pulse">_</span>
            </motion.h1>
          </div>

          <div className="border border-red flex justify-evenly items-center">
            <div>
              {/* Bio */}
              <motion.p
                className="max-w-3xl border text-silver text-xl font-light "
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
                <span className="underline decoration-blue-light font-medium">
                  MongoDB
                </span>
                ,{" "}
                <span className="underline decoration-blue-light font-medium">
                  MySQL
                </span>
                , and{" "}
                <span className="underline decoration-purple font-medium">
                  React.js
                </span>
                . I recently earned a certificate in full-stack development from
                Northwestern University, complementing my degrees in Psychology
                and International Studies.
              </motion.p>

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
                  className="relative border border-green text-base font-semibold leading-7 text-silver cursor-pointer hover:text-gold"
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
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
