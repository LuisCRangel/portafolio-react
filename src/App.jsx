import { useState } from "react";
import reactLogo from "./assets/img/perfil.jpg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">      
      <Nav />
      <section className="section__container">
        <img className="section__img" src={reactLogo} alt="Foto de perfil" />
      <About />
      </section>
      <h2 className="card__skills-title">Skills</h2>
      <Skills />
      <h2 className="projects_title">Projects</h2>
      <Projects/>
      <Footer/>      
    </div>
  );
}

export default App;
