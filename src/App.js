// App.js
import React from 'react';
import Header from './components/header';  
import Hero from './components/hero';      
import './styles.css';  // estilos globales

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
