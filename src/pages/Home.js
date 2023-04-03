// Import Components
import Hero from "../components/home/Hero";
import Divider from "../components/static/Divider";
import Background from "../components/home/Background";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

// Import project data
import { projectData } from "../data/projectData";

export default function Home() {
  console.log("project from home", projectData);

  return (
    <>
      <div>
        <Hero id="/" />

        <Background id="background" />
        <Projects id="projects" data={projectData} />
        <Contact id="contact" />
      </div>
    </>
  );
}
