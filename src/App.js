import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import ScrollArrow from "./components/ScrollArrow";

function App() {
  return (
    <>
      <div
        className="font-montserrat bg-primary text-secondary
      "
      >
        <Navbar />

        {/* Flex formatting */}

        {/* <div className="flex flex-col  flex-1"> */}
        {/* Sidebar start */}
        {/* <div className="w-fixed w-full h-full flex-shrink flex-grow-0 "> */}
        <SocialMedia />
        {/* </div> */}

        {/* Main start */}
        <main className="flex-growpt-1 mx-20">
          {/* <Hero /> */}
          <Background />
          <Projects />
          <Contact />
        </main>

        {/* Scroll arrow start */}
          <ScrollArrow className="flex flex-row-reverse"/>

        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
