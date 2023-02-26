import { ReactComponent as UpArrow } from "./icons/upArrow.svg";
import { useState, useEffect } from "react";

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const ScrollArrow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (

<div className="flex flex-col ">
  <div className="fixed bottom-3 right-16">
    
 {isVisible && (
          <div
            onClick={ScrollArrow}
            className="text-green  hover:text-gold cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <UpArrow className="h-10 w-10"/>
          </div>
        )}
  </div>
</div>

  );
}
