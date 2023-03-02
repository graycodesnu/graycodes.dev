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
  // Greeting
  const heroGreeting = heroData.greeting.length ? (
    heroData.greeting.map((greeting, index) => <h1 key={index}>{greeting}</h1>)
  ) : (
    <p>Data Not Found</p>
  );

  // Bio
  const heroBio = heroData.bio.length ? (
    heroData.bio.map((bio, index) => <h1 key={index}>{bio}</h1>)
  ) : (
    <p>Data Not Found</p>
  );

  return (
    <>
      <div id="hero" className="relative ml-20 mt-0.5">
        <div className="mx-auto max-w-7xl">
          {/* Greeting, bio, link, polygon */}
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            {/* Polygon */}
            <svg
              className="absolute inset-y-0 right-8 hidden fill-primary h-full w-80 translate-x-1/2 transform lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            {/* Greeting, bio, link */}
            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <motion.div
                className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.75 } }}
                variants={{
                  visible: { transition: { staggerChildren: 0.45 } },
                }}
              >
                <h1 className="pb-1 text-5xl font-bold tracking-tight text-secondary sm:text-6xl heroUnderline typewriter">
                  {heroGreeting}
                </h1>
                <motion.p
                  className="mt-6 text-lg leading-8 text-secondary"
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
