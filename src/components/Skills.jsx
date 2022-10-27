import React from "react";

const Skills = () => {
  const html = {
    title: "HTML",
    icon: <i className="bx bxl-html5 icon__orange"></i>,
  };
  const css = {
    title: "CSS",
    icon: <i className="bx bxl-css3 icon__blue"></i>,
  };
  const javascript = {
    title: "Javascript",
    icon: <i className="bx bxl-javascript icon__yellow"></i>,
  };
  const react = {
    title: "React",
    icon: <i className="bx bxl-react icon__sky"></i>,
  };
  const redux = {
    title: "Redux",
    icon: <i className='bx bxl-redux icon__purple' ></i>
  };
  const nodejs = {
    title: "Node.js",
    icon: <i className="bx bxl-nodejs icon__green"></i>,
  };

  return (
    <div className="card__skills">
      <article className="card__skills-list">
        <h4>{html.icon}</h4>
        <p className="skills__p">{html.title}</p>
      </article>
      <article className="card__skills-list">
        <h4>{css.icon}</h4>
        <p className="skills__p">{css.title}</p>
      </article>
      <article className="card__skills-list">
        <h4>{javascript.icon}</h4>
        <p className="skills__p">{javascript.title}</p>
      </article>
      <article className="card__skills-list">
        <h4>{react.icon}</h4>
        <p className="skills__p">{react.title}</p>
      </article>
      <article className="card__skills-list">
        <h4>{redux.icon}</h4>
        <p className="skills__p">{redux.title}</p>
      </article>
      <article className="card__skills-list">
        <h4>{nodejs.icon}</h4>
        <p className="skills__p">{nodejs.title}</p>
      </article>
    </div>
  );
};

export default Skills;
