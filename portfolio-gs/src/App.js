// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="font-montserrat bg-primary text-secondary">
        <Navbar />
          <Hero />
          <Background />
          <Projects />
          <Contact />
        <SocialMedia/>
        <Footer />
    </div>
  );
}

export default App;
