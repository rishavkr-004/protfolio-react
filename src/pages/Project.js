import React from 'react';
import './Project.css';

function Project({ persona }) {
  const isWeb = persona === 'web';

  return (
    <div className="section-container">
      <h2 className="section-title">
        {isWeb ? "Web Development Projects" : "Data Analytics Projects"}
      </h2>
      
      <div className="projects-grid">
        {isWeb ? (
          <>
            {/* WEB PROJECTS */}
            <div className="project-card">
              <div className="project-content">
                <span className="project-category">Full Stack App</span>
                <h3>CampusConnect</h3>
                <p>A comprehensive platform designed to streamline communication and resource sharing within college campuses. Built with secure user authentication and real-time updates.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Django</span>
                  <span>Git</span>
                </div>
                <button className="project-link">View Source ➔</button>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <span className="project-category">Web Application</span>
                <h3>Projexa</h3>
                <p>A collaborative project management tool allowing teams to track tasks, manage workflows, and handle version control seamlessly in one unified dashboard.</p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>CSS3</span>
                </div>
                <button className="project-link">View Source ➔</button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* DATA PROJECTS */}
            <div className="project-card">
              <div className="project-content">
                <span className="project-category">Dashboard & Reporting</span>
                <h3>Sales CAGR & Performance Tracker</h3>
                <p>Designed a dynamic, interactive dashboard utilizing custom DAX measures to track Compound Annual Growth Rate (CAGR) and highlight regional sales deficiencies.</p>
                <div className="project-tech">
                  <span>Power BI</span>
                  <span>DAX</span>
                  <span>Excel</span>
                </div>
                <button className="project-link">View Dashboard ➔</button>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <span className="project-category">Data Pipeline</span>
                <h3>Customer Churn Analysis</h3>
                <p>Extracted and cleaned historical customer data using complex SQL indexing, then applied predictive Python scripts to identify primary keys associated with high churn risk.</p>
                <div className="project-tech">
                  <span>SQL</span>
                  <span>Python</span>
                  <span>Pandas</span>
                </div>
                <button className="project-link">View Analysis ➔</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Project;