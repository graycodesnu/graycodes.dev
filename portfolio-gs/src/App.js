import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import SocialMedia from "./components/socialMedia";

function App() {
  return (
    <div className="font-montserrat bg-light-black text-light-grey">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialMedia/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
