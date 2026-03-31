import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ persona, togglePersona }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; 
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        
        <a className="navbar-logo" href="#home" style={{textDecoration: 'none'}}>
          <div className="logo-icon">
             <span className="icon-bar purple"></span>
             <span className="icon-bar orange"></span>
          </div>
          Rishav
        </a>

        <ul className="navbar-links">
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#about" className="nav-item">About Me</a></li>
          <li><a href="#academic" className="nav-item">Education</a></li>
          <li><a href="#project" className="nav-item">Projects</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button 
            className={`theme-toggle ${darkMode ? 'dark-active' : ''}`} 
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          
          {/* THE PERSONA TOGGLE BUTTON */}
          <button onClick={togglePersona} className="chat-btn" style={{ cursor: 'pointer', border: 'none' }}>
            {persona === 'web' ? 'View Data Analyst' : 'View Web Developer'}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;