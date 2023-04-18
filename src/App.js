// ! Imports
// import { Routes, Route } from "react-router-dom";
// Static components
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import SocialMedia from "./components/static/SocialMedia";
import ScrollArrow from "./components/static/ScrollArrow";
// Pages
import Home from "./pages/Home";

// ! Function
function App() {
  // * ** RETURN **
  return (
    <>
      <div className="font-montserrat text-secondary ">
        <Navbar className="" />

        <div className="grid grid-cols-11">
          <SocialMedia className="col-span-1 col-start-1 col-end-2" />

          <div className="col-span-9 grow">
            <Home />
          </div>

          <ScrollArrow className="col-span-1 col-start-11 border border-green absolute" />
        </div>

        <Footer className="" />
      </div>
    </>
  );
}

export default App;
