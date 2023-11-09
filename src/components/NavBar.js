import logo from "../img/logo.png";
import React from 'react';
import CartWidget from "./CartWidget/CartWidget";


const NavBar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
           <img src={logo} alt="Logo" className="is-32x32" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="ntrue"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-expanded" href="/">
              Inicio
            </a>
            <a className="navbar-item" href="/">
              Productos
            </a>
            <a className="navbar-item" href="/">
              Contacto
            </a>
            <CartWidget/>
          </div>
  
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Registrarse</strong>
                </a>
                <a className="button is-light">Iniciar Sesión</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  

