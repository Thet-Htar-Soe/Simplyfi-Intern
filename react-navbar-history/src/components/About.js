import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="dropdown">
        <button className="dropdown-toggle" type="button">
          About Options
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link to="/home/about/something">Something</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
