import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="card">
        <div className="img"></div>
        <h1 className="proyect__title">Weather Api</h1>
        <p className="proyect__p"></p>
        <button className="proyect__btn">Deploy</button>
      </div>
      <div className="card">
        <div className="img1"></div>
        <h1 className="proyect__title">Crud User</h1>
        <p className="proyect__p"></p>
        <button className="proyect__btn">Deploy</button>
      </div>
      <div className="card">
        <div className="img2"></div>
        <h1 className="proyect__title">Rick And Morty Api</h1>
        <p className="proyect__p"></p>
        <button className="proyect__btn">Deploy</button>
      </div>
      <div className="card">
        <div className="img3"></div>
        <h1 className="proyect__title">Poke Api</h1>
        <p className="proyect__p"></p>
        <button className="proyect__btn">Deploy</button>
      </div>
    </div>
  );
};

export default Projects;
