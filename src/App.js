import React from "react";
import About from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Role from "./components/Role";
import FeaturedProject from "./components/FeaturedProject.js";

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
      <div id="Projects Section">
        <FeaturedProject />
      </div>
      {/* End of Content */}
    </React.Fragment>
  );
}

export default App;
