import React from "react";
import About from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Role from "./components/Role";
import FeaturedProject from "./components/FeaturedProject.js";
import { colors } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      {/* Content */}
      <div id="About Section">
        <About />
      </div>
      <div id="Role Section" >
        <Role />
      </div>
      <div>
        <FeaturedProject />
      </div>
      {/* End of Content */}
    </React.Fragment >
  );
}

export default App;
