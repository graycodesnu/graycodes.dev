// import { Routes, Route } from "react-router-dom";
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
      <div className="font-montserrat bg-primary text-secondary w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
        {/* fixed width */}
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
          {/* Nav format */}
          <div className="sticky top-0 p-4 w-full h-full">
            <Navbar />
          </div>
        </div>
        {/* Main content */}
        <main role="main" className="w-full flex-grow pt-1 px-3">
          {/* <Hero /> */}
          <Background />
          <Projects />
          <Contact />
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
                  {/* Sidebars */}
          <div className="flex sm:flex-col px-2">
            <SocialMedia />
            <ScrollArrow />
          </div>
        </div>
        <Footer/>

      </div>
    </>
  );
}

export default App;
