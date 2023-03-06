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
  return (
    <>
      <div id="hero" className="relative ml-20 mt-0.5">
        <div className="mx-auto max-w-7xl">
          {/* Greeting, bio, link, polygon */}
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            {/* Greeting, bio, link */}
            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              {/* Greeting */}
              <motion.div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <motion.h1
                  className="pb-1 text-5xl font-bold tracking-tight text-secondary sm:text-6xl heroUnderline"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible,
                  }}
                >
                  Hi, I'm Grayson.<span className="inline-flex animate-pulse">_</span>
                </motion.h1>
              </motion.div>

              {/* Bio */}
              <motion.div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <motion.p className="mt-6 text-lg leading-8 text-secondary">
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
                  Psychology and International Studies.{" "}
                </motion.p>
                {/* Link */}
                <motion.div className="mt-10 flex items-center gap-x-6">
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
        <motion.div
          className="
       lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 10, transition: { duration: 2 } }}
          variants={{ visible: { transition: { staggerChildren: 0.45 } } }}
        >
          <motion.img
            className="aspect-auto object-cover rounded-lg xlg:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            src={heroImg}
            alt="Grayson Harvey"
            variants={{
              hidden: { opacity: -10 },
              visible,
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
