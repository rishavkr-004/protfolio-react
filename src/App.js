import React, { useState } from 'react';
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
import Home from './pages/Home.js'; 
import "./App.css";

function App() {
  // Tracks whether the site is in 'web' mode or 'data' mode.
  const [persona, setPersona] = useState('web'); 

  // Flips the state when called
  const togglePersona = () => {
    setPersona((prev) => (prev === 'web' ? 'data' : 'web'));
  };

  return (
    <div className="app-layout">
      {/* Pass state to Navbar so the button can use it */}
      <Navbar persona={persona} togglePersona={togglePersona} />

      <main className="main-content">
        {/* Pass state to Home so the content can change */}
        <Home persona={persona} />
      </main>

      <Footer />
    </div>
  );
}

export default App;