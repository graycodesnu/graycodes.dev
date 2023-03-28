// Animation
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.75 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function Contact() {
  return (
    <>
      <div id="contact">
        <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
          <span className="contactHeadingUnderline">Say Hello!</span>
        </h1>
      </div>
    </>
  );
}
