import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="page-header">
      <div className="header-logo">
        <h2>
          <Link to={"/"} className="header-icon-link">
            Questify
          </Link>
        </h2>
      </div>
      <div className="header-app-description">
        <span>Gamify your life!</span>
      </div>
    </header>
  );
}

export default Header;