// Import Components
import Hero from "../components/home/Hero";
import Divider from "../components/static/Divider";
import Background from "../components/home/Background";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

import Test from "../components/home/Test"

export default function Home() {
  return (
    <>
      <div>
            {/* <Hero id="/" /> */}
            <Divider />
            <Test/>
            <Divider/>
            <Background id="background" />
            <Divider />
            <Projects id="projects" />
            <Divider />
            <Contact id="contact" />
            <Divider />
          </div>

    </>
  );
}

