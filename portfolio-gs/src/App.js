import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="font-montserrat bg-light-black text-light-grey">
        <Navbar />
          <Home />
          <Background />
          <Projects />
          <Contact />
        <SocialMedia/>
        <Footer />
    </div>
  );
}

export default App;
