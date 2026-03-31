import React, { useState, useEffect } from 'react';
import './Project.css'; 

function About({ persona }) {
  const isWeb = persona === 'web';
  const headingText = isWeb ? "Web Developer" : "Data Analyst / Aspiring Data Scientist";

  // --- Typewriter Effect Logic ---
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); // Clear text when persona changes
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < headingText.length) {
        // Add one letter at a time
        setDisplayText(headingText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40); // 40ms per letter (adjust for typing speed!)

    // Cleanup interval on unmount
    return () => clearInterval(typingInterval);
  }, [headingText]);

  return (
    <div className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          {/* Render the typing text with a blinking cursor */}
          <h3 className="typewriter-heading">
            {displayText}
            <span className="blinking-cursor">|</span>
          </h3>
          
          {isWeb ? (
            <div className="text-reveal-container">
              <p className="reveal-text delay-1">Hi, I'm Rishav 👋 I'm a web developer who enjoys building real-world applications and constantly improving my skills.</p>
              <p className="reveal-text delay-2">I started with HTML, CSS, and JavaScript, and gradually moved into working with React, Node.js, and MongoDB.</p>
              <p className="reveal-text delay-3">One of the projects I'm proud of is CampusConnect—a platform that helps students connect, share updates, and stay informed within their campus. Working on it gave me hands-on experience in building user-friendly interfaces and handling real-time features.</p>
            </div>
          ) : (
            <div className="text-reveal-container">
              <p className="reveal-text delay-1">Hi, I'm Rishav 👋 I'm a data enthusiast with skills in Python, data analysis, and machine learning, and a strong interest in turning data into meaningful insights.</p>
              <p className="reveal-text delay-2">I have hands-on experience from my Data Science bootcamp, where I worked on data cleaning, EDA, and building models. I've also created dashboards and projects that focus on solving real-world problems using data.</p>
              <p className="reveal-text delay-3">With a background in development and a strong analytical mindset, I'm eager to grow as a data analyst and contribute to data-driven decision-making.</p>
            </div>
          )}
        </div>

        <div className="skills-container">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            {isWeb ? (
              <>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">JavaScript / HTML / CSS</span>
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
              </>
            ) : (
              <>
                <span className="skill-tag">Python (Pandas, NumPy, Matplotlib, Scikit-learn)</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Jupyter Notebook</span>
                <span className="skill-tag">PostgreSQL, SQL & Relational Databases</span>
                <span className="skill-tag">Tableau, Power BI & DAX</span>
                <span className="skill-tag">Advanced Excel</span>
                <span className="skill-tag">Data Visualization, EDA, ETL</span>
                <span className="skill-tag">Data Cleaning</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;