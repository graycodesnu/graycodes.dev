// Animation
import { motion } from "framer-motion";


const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export default function Contact() {
  return (
    <>
      <motion.div id="contact"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
      <motion.h1 
      className="text-6xl text-secondary font-bold p-6"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible
      }}
      >Contact</motion.h1>

      </motion.div>
    </>
  );
}
