import React from "react";
import { Navbar } from "../components/Navbar";
import { Profile } from "../components/Profile";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Portfolio } from "../components/Portfolio";

export const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m3">
            <Profile />
          </div>
          <div className="col s12 m9">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
          </div>
        </div>
      </div>
    </section>
  );
};
