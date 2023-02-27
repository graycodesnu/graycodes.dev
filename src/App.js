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

        <div className="grid grid-cols-11">
          <SocialMedia className="col-span-1 col-start-1 col-end-2" />

          <div className="col-span-9 grow">
            <Hero id="/" />
            <Divider />
            <Background id="background" />
            <Divider />
            <Projects id="projects" />
            <Divider />
            <Contact id="contact" />
            <Divider />
          </div>

          <ScrollArrow className="col-span-1 col-start-11 border border-green absolute"/>


        </div>

        <Footer className="" />
      </div>
    </>
  );
}

export default App;
