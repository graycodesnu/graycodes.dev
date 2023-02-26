// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import ScrollArrow from "./components/ScrollArrow";
import Hero from "./components/Hero";
import Divider from "./components/Divider";

function App() {
  return (
    <>
      <div className="font-montserrat text-secondary ">
        <Navbar />

        <div className="flex flex-row">
          <div>
            <SocialMedia />
          </div>
          <div className="grow px-10">
            <Hero id="/" />
            <Divider />
            <Background id="background" />
            <Projects id="projects" />
            <Contact id="contact" />
          </div>

          <div className="px-10 object-right">
            <ScrollArrow />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
