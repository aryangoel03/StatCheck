import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="page-header">
      <div className="header-logo">
        <h2>
          <Link style={{textDecoration:"none"}}to={"/"} className="header-icon-link">
            StatChek
          </Link>
        </h2>
      </div>
      <div style={{display: "flex", alignItems:"center"}}>
        <Link style={{textDecoration:"none"}}to={'/login'}>Login</Link>
      <p>|</p>
        <Link style={{textDecoration:"none"}}to={'/register'}>Sign up</Link>
      </div>
    </header>
  );
}

export default Header;