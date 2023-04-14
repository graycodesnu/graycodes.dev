// ! Imports
// Icon
import { CodeBracketIcon } from "@heroicons/react/24/outline";
// Animation
import { motion } from "framer-motion";

// ! Function
export default function Divider() {
  // * Animation
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  // * ** RETURN **
  return (
    <>
      <motion.div
        className="relative py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 3 } },
        }}
      >
        {/* Gradient Divider */}
        <motion.div className="absolute inset-0 flex items-center" variants={itemVariants}>
          <div className="w-full h-0.5 bg-gradient-to-r from-blue via-primary to-blue"></div>
        </motion.div>
        {/* Bracket Icon */}
        <motion.div className="relative flex justify-center" variants={itemVariants}>
          <CodeBracketIcon className="inline-flex items-center rounded-full w-6 h-6 bg-primary text-blue" />
        </motion.div>
      </motion.div>
    </>
  );
}
