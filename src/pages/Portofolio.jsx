import React from "react";
import Introduction from "../components/Introduction";
import Roles from "../components/Roles";
import Projects from "../components/Projects";
import WordCoworkers from "../components/WordCoworkers";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Portofolio = () => {
    return (
        <React.Fragment>
            <NavBar />
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
            <div id="Contact">
                <Contact />
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </React.Fragment>
    );
};

export default Portofolio;
