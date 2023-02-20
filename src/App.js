// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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

        <div className="flex flex-row">

          <div>
            <SocialMedia />
          </div>

          <div className="grow px-10">
            <Background />
            <Projects />
            <Contact />
          </div>

          <div className="px-10">
            <ScrollArrow />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
