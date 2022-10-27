import React from "react";

const Nav = () => {
  return (
    <div className="nav">      
      <nav className="nav__container">
        <a className="nav__link"  href=""> Home </a>
        <a className="nav__link" href=""> About </a>
        <a className="nav__link" href=""> Projects </a>
        <a className="nav__link" href=""> Contact </a>
        <button className="nav__btn" href="">
          <i className="bx bx-menu"></i>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
