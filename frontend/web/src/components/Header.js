import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isTokenExpired } from "../api/decode";

function Header() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  return (
    <header className="page-header">
      <div className="header-logo">
        <h2>
          <Link style={{textDecoration:"none"}}to={"/"} className="header-icon-link">
            StatChek
          </Link>
        </h2>
      </div>
      {location.pathname === '/' ? (token && !isTokenExpired(token)) ? (
        <div style={{display: "flex", alignItems:"center"}}>
          <p className="header-icon-link">{username}</p>
        </div>
      ) : (<div style={{display: "flex", alignItems:"center"}}>
        <Link style={{textDecoration:"none"}}to={'/login'}>Login</Link>
      <p>|</p>
        <Link style={{textDecoration:"none"}}to={'/register'}>Sign up</Link>
      </div>) : (
        <p>extra</p>
      )}

      
    </header>
  );
}

export default Header;