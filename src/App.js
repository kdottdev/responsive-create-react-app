import { useLayoutEffect, useRef } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Components/Navbar/Navbar";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".contact p");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            willChange: "transform",
            rotateY: 30,
          },
          {
            rotateY: 0,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top center",
              scrub: 2,
            },
          }
        );
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className="App" ref={main}>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
