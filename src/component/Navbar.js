import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ persona, togglePersona }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; 
  });
  
  // State to control the mobile hamburger menu
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`custom-navbar ${darkMode ? 'navbar-glow-dark' : 'navbar-glow-light'}`}>
      <div className="navbar-container">
        
        <a className="navbar-logo" href="#home" style={{textDecoration: 'none'}}>
          <div className="logo-icon">
             <span className="icon-bar purple"></span>
             <span className="icon-bar orange"></span>
          </div>
          Rishav
        </a>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMobileOpen ? "active" : ""}`}>
          <li><a href="#home" className="nav-item" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" className="nav-item" onClick={closeMobileMenu}>About Me</a></li>
          <li><a href="#academic" className="nav-item" onClick={closeMobileMenu}>Education</a></li>
          <li><a href="#project" className="nav-item" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#contact" className="nav-item" onClick={closeMobileMenu}>Contact</a></li>
          
          {/* Mobile-Only Actions inside the dropdown */}
          <li className="mobile-actions">
            <button onClick={() => { setDarkMode(!darkMode); closeMobileMenu(); }} className="theme-toggle mobile-theme-btn">
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <button onClick={() => { togglePersona(); closeMobileMenu(); }} className="chat-btn mobile-persona-btn">
              {persona === 'web' ? 'View Data Analyst' : 'View Web Developer'}
            </button>
          </li>
        </ul>

        {/* Desktop-Only Actions */}
        <div className="navbar-actions desktop-actions">
          <button 
            className={`theme-toggle ${darkMode ? 'dark-active' : ''}`} 
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          
          <button onClick={togglePersona} className="chat-btn" style={{ cursor: 'pointer', border: 'none' }}>
            {persona === 'web' ? 'View Data Analyst' : 'View Web Developer'}
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className={`hamburger-bar ${isMobileOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMobileOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMobileOpen ? 'open' : ''}`}></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;