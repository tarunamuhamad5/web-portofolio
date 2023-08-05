import React from "react";
import Introduction from "../components/Introduction";
import Roles from "../components/Roles";
import Projects from "../components/Projects";
import WordCoworkers from "../components/WordCoworkers";

const Portofolio = () => {
  return (
    <React.Fragment>
      <div id="Introduction">
        <Introduction />
      </div>
      <div id="Roles">
        <Roles />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="ExCoworkers">
        <WordCoworkers />
      </div>
    </React.Fragment>
  );
};

export default Portofolio;
