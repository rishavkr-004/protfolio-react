import React from 'react';
import './Project.css'; 

function About({ persona }) {
  const isWeb = persona === 'web';

  return (
    <div className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <h3>{isWeb ? "Crafting Digital Experiences" : "Turning Data into Insights"}</h3>
          <p>
            {isWeb 
              ? "I am a dedicated Web Developer with a strong focus on building scalable, responsive, and user-centric applications. I enjoy tackling complex front-end layouts with React and connecting them to robust Django back-end architectures to deliver seamless digital products."
              : "I am a detail-oriented Data Analyst passionate about uncovering hidden trends and driving business decisions. I specialize in cleaning messy datasets, building complex SQL queries, and designing interactive Power BI dashboards that tell a compelling story."}
          </p>
        </div>

        <div className="skills-container">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            {isWeb ? (
              <>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">JavaScript / HTML / CSS</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Git / GitHub</span>
              </>
            ) : (
              <>
                <span className="skill-tag">Python (Pandas, NumPy)</span>
                <span className="skill-tag">SQL & Relational Databases</span>
                <span className="skill-tag">Power BI & DAX</span>
                <span className="skill-tag">Advanced Excel</span>
                <span className="skill-tag">Data Visualization</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;