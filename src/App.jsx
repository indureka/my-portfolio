import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";
import "./main.css";
import Contact from "./components/Contact";
import TypingEffect from "./components/TypingEffect";

import TechnologiesSection from "./components/TechnologiesSection";

const App = () => {
  return (
    <div>
      <Header />
      <TypingEffect />

      <About />

      <Skills />
      <TechnologiesSection />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
