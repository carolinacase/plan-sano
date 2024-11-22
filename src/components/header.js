import React from 'react';
import './header.css';

function header() {
  return (
    <header className="header">
      <div className="logo">PlanSano</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#recipes">Recetas</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#Login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
