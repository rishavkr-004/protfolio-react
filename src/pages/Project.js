import React, { useState, useEffect } from 'react';
import './Project.css';

function Project({ persona }) {
  const isWeb = persona === 'web';

  // --- 1. Project Data Arrays ---
  const webProjects = [
    {
      id: 1,
      category: "Full Stack App",
      title: "CampusConnect",
      description: "A comprehensive platform designed to streamline communication and resource sharing within college campuses. Built with secure user authentication and real-time updates.",
      tech: ["MERN", "Socket.io", "Git/Github", "Cloudinary"],
      // Image pulled from src/assets/projectimg folder
      image: require('../assets/projectimg/campusconnect.jpg'), 
      github: "https://github.com/SanskarSaurabh/Projexa-College-Project",
      live: "https://krmuconnect.vercel.app/"
    },
    {
      id: 2,
      category: "Web Application",
      title: "Projexa",
      description: "A collaborative project management tool allowing teams to track tasks, manage workflows, and handle version control seamlessly in one unified dashboard.",
      tech: ["JavaScript", "Python", "CSS3"],
      // Update this path when you have the Projexa image!
      image: require('../assets/projectimg/campusconnect.jpg'), 
      github: "https://github.com/SanskarSaurabh/Projexa-College-Project",
      live: "https://krmuconnect.vercel.app/"
    }
  ];

  const dataProjects = [
    {
      id: 1,
      category: "Dashboard & Reporting",
      title: "Sales CAGR Tracker",
      description: "Designed a dynamic, interactive dashboard utilizing custom DAX measures to track Compound Annual Growth Rate (CAGR) and highlight regional sales deficiencies.",
      tech: ["Power BI", "DAX", "Excel"],
      // Image pulled from the public/images folder
      image: "/images/sales.png", 
      github: "https://github.com/yourusername/sales-cagr",
      live: "https://your-portfolio-link.com/sales-dashboard"
    },
    {
      id: 2,
      category: "Data Pipeline",
      title: "Customer Churn Analysis",
      description: "Extracted and cleaned historical customer data using complex SQL indexing, then applied predictive Python scripts to identify primary keys associated with high churn risk.",
      tech: ["SQL", "Python", "Pandas"],
      // Image pulled from the public/images folder
      image: "/images/churn.png", 
      github: "https://github.com/yourusername/churn-analysis",
      live: "https://your-portfolio-link.com/churn-report"
    }
  ];

  // --- 2. Slider Logic ---
  const currentProjects = isWeb ? webProjects : dataProjects;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset slider to the first slide when the persona changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [persona]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === currentProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentProjects.length - 1 : prev - 1));
  };

  return (
    <div className="section-container">
      <h2 className="section-title">
        {isWeb ? "Web Development Projects" : "Data Analytics Projects"}
      </h2>
      
      {/* --- 3. The Slider UI --- */}
      <div className="slider-wrapper">
        
        {/* Left Arrow */}
        <button className="slider-arrow left-arrow" onClick={prevSlide}>
          ❮
        </button>

        {/* Viewport hides the overflowing slides */}
        <div className="slider-viewport">
          {/* Track moves left/right based on currentIndex */}
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {currentProjects.map((project) => (
              <div className="slide-item" key={project.id}>
                <div className="premium-project-card">
                  
                  {/* Image Section with Hover Overlay */}
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay"></div>
                  </div>

                  {/* Content Section */}
                  <div className="project-details">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-tech">
                      {project.tech.map((t, index) => (
                        <span key={index}>{t}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary btn-sm">
                        Live Preview ↗
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary btn-sm">
                        GitHub Source
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="slider-arrow right-arrow" onClick={nextSlide}>
          ❯
        </button>

      </div>

      {/* Slide Indicators (Dots) */}
      <div className="slider-dots">
        {currentProjects.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default Project;