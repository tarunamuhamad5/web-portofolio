import React from "react";
import About from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Role from "./components/Role";
import FeaturedProject from "./components/FeaturedProject.js";
import WordsCoWorkers from "./components/WordsCoWorkers";
import Contact from "./components/Contact";

function App() {
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
      <div id="Projects Section" style={{ backgroundColor: "#FAF8F7" }}>
        <FeaturedProject />
      </div>
      <div id="Words From CoWorkers Section">
        <WordsCoWorkers />
      </div>
      <div id="ContactMe" style={{ backgroundColor: "#141414" }}>
        <Contact />
      </div>
      {/* End of Content */}
    </React.Fragment>
  );
}

export default App;
