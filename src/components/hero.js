import React from 'react';
import './hero.css';
function hero() {
  
  return (
    <section className="hero">
      <h2>¿Qué vamos a cocinar hoy?</h2>

      <div className="search-bar">
        <input type="text" placeholder="¿Qué ingredientes hay en casa?" />
        <button>Search</button>
      </div>

      <div className="hero-img"> {/* Cambié class por className */}
        <img src="/assets/portada.jpg" alt="Portada" />
      </div>
    </section>
  );
}


export default hero;
