import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navBar">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} width="60" alt="" className="icon" />
            </NavLink>
            <h3>mov_e</h3>
          </div>
          
          
          
          <div className="menu">
            <NavLink to="busqueda" className="busqueda accion">
              <i className="bi bi-search"></i>
            </NavLink>
            <NavLink to="favoritos" className="favoritos accion">
              Favoritos
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
