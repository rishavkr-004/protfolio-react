import React from 'react';
import './Home.css'; 

import About from './About.js';
import Academic from './Academic.js'; 
import Project from './Project.js'; 
import Contact from './Contact.js'; 

function Home({ persona }) {
  const isWebDev = persona === 'web';
  
  // Dynamic Text
  const heroTitle = isWebDev ? "Freelance Web Developer" : "Data Analyst & Strategist";
  
  const heroDescription = isWebDev 
    ? "I am a passionate web developer who specializes in building high-quality, responsive React websites. Take a look at my projects and feel free to contact me for collaboration."
    : "I transform complex datasets into actionable insights using Python, SQL, and Power BI. Explore my analytical projects and reach out for data-driven solutions.";
    
  // Dynamic Resume Link & Download Name
  const resumeFile = isWebDev ? "/Rishav_Web_Resume.pdf" : "/Rishav_Data_Resume.pdf";
  const downloadName = isWebDev ? "Rishav_Web_Developer_CV.pdf" : "Rishav_Data_Analyst_CV.pdf";

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile; 
    // This ensures the downloaded file has the correct role in the filename!
    link.download = downloadName; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      
      <section id="home" className="hero-section">
        <div className="hero-content">
          <span className="greeting-badge">Hi! I'm Rishav</span>
          
          <h1 className="hero-title">{heroTitle}</h1>
          <p className="hero-description">{heroDescription}</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary" style={{textDecoration: 'none'}}>Hire Me</a>
            <button className="btn-secondary" onClick={handleResumeDownload}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h2>{isWebDev ? "2" : "10+"}</h2>
              <p>{isWebDev ? "Live Website" : "Datasets Analyzed"}</p>
            </div>
            <div className="stat-item">
              <h2>{isWebDev ? "5" : "5"}</h2>
              <p>{isWebDev ? "Project Done" : "Dashboards Created"}</p>
            </div>
            <div className="stat-item">
              <h2>{isWebDev ? "0" : "0"}</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="background-text">RISHAV</div>
            <img
              src={require('../assets/image/aboutme.png')} 
              alt="Profile"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Passing the state down to the next sections */}
      <section id="about">
        <About persona={persona} />
      </section>

      {/* NEW ACADEMIC SECTION ADDED HERE */}
      <section id="academic">
        <Academic />
      </section>

      <section id="project">
        <Project persona={persona} />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default Home;