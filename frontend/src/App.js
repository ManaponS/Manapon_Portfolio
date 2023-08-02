import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import MainHeader from "./shared/components/Navigation/MainHeader";
import Hero from "./shared/components/UIComponents/Hero";
import AboutMe from "./shared/components/UIComponents/AboutMe";
import Footer from "./shared/components/UIComponents/Footer";

import Skills from "./skills/page/Skills";
import Projects from "./projects/page/Projects";

import "./App.css";

function App() {
  return (
    <div className="App bg-black">
      <MainHeader />
      <Hero />

      <AboutMe />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
