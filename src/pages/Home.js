// Import Components
import Hero from "../components/home/Hero";
import Divider from "../components/static/Divider";
import Expertise from "../components/home/Expertise";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
// Import project data
// import { projectData } from "../data/projectData";

export default function Home() {
  // console.log("project from home", projectData);

  return (
    <>
      <div>
        <Hero id="/"/>

        <Expertise id="expertise" className="" />
        <Projects id="projects"  />
        <Contact id="contact" />
      </div>
    </>
  );
}
