import React from "react";
import About from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Role from "./components/Role";
import FeaturedProject from "./components/FeaturedProject.js";
import WordsCoWorkers from "./components/WordsCoWorkers";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <React.Fragment>
      <NavigationBar />
      {/* Content */}
      <div id="About Section">
        <About />
      </div>
      <div id="Role Section">
        <Role />
      </div>
      <div id="Projects Section">
        <FeaturedProject />
      </div>
      <div id="Words From CoWorkers Section">
        <WordsCoWorkers />
      </div>
      <div>
        <Contact />
      </div>
      {/* End of Content */}
    </React.Fragment>
  );
}

export default App;
