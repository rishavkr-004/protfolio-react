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
      category: "Full-stack ML app",
      title: "Bengaluru House Price Prediction Web App",
      description: "Developed a full-stack ML web app for predicting Bengaluru house prices using Flask API and a trained Linear Regression model. Deployed backend on Render and frontend on Vercel with real-time API integration.",
      tech: ["Html/ Css/ JavaScript/ jQuery", "Python/ Flask/ Flask-CORS", "Machine Learning(Scikit-learn, Numpy, Pandas)"],
      // Update this path when you have the Projexa image!
      image: require('../assets/projectimg/bengluru_house_price_prediction.png'), 
      github: "https://github.com/rishavkr-004/bengaluru-house-price",
      live: "https://bengaluru-house-price-zeta.vercel.app/"
    },
    {
      id: 3,
      category: "Full Stack App",
      title: "Task_Manager",
      description: "Built a MERN-based task management system with JWT authentication and role-based access control, enabling task assignment, status tracking, and dashboard analytics; deployed using Vercel and Railway.",
      tech: ["MERN", "Axios", "Git/Github", "React Router DOM"],
      // Image pulled from src/assets/projectimg folder
      image: require('../assets/projectimg/task_manager.jpg'),
      github: "https://github.com/rishavkr-004/task_manager.git",
      live: "https://task-manager-pink-omega.vercel.app"
    }, 
  ];

  const dataProjects = [
    {
      id: 1,
      category: "Dashboard & Reporting",
      title: "Blinkit_Sales_Analysis",
      description: "Developed an interactive sales dashboard to analyze Blinkit's retail performance. It highlights total sales, average sales, item distribution, outlet types, and customer ratings. The dashboard helps in identifying top-performing products and outlet trends for better business decisions.",
      tech: ["Power BI", "DAX", "Excel"],
      // Image pulled from the public/images folder
      image: require('../assets/projectimg/Blinkit_Sales_Analysis.jpg'),
      github: "https://github.com/rishavkr-004/BlinkIT_Data_Analysis.git",
      live: "https://your-portfolio-link.com/sales-dashboard"
    },
    {
      id: 2,
      category: "Dashboard & Reporting",
      title: "Forcasting_Student_Result_Analysis",
      description: "Created a student performance dashboard to analyze scores based on gender, parental education, and test preparation. It helps in understanding learning patterns and identifying factors affecting student success.",
      tech: ["Tableau", "Calculated Fields", "SQL", "EDA", "ML", "Python", "Excel"],
      // Image pulled from the public/images folder
      image: require('../assets/projectimg/forcasting_Student_Result.png'),
      github: "https://github.com/rishavkr-004/Understanding_and_Forecasting_of_Student_Performance_in_India.git",
      live: "https://your-portfolio-link.com/sales-dashboard"
    },
    {
      id: 3,
      category: "Dashboard & Reporting",
      title: "Electric_Car_Sales_Analysis",
      description: "Built a comprehensive EV analysis dashboard to track total vehicles, average electric range, and adoption trends across states. It provides insights into top manufacturers, CAFV eligibility, and yearly growth of electric vehicles.",
      tech: ["Tableau", "Calculated Fields", "Excel"],
      // Image pulled from the public/images folder
      image: require('../assets/projectimg/Elec_Dashboard.png'),
      github: "https://github.com/rishavkr-004/Electrical_Vehicle_Data_Analysis_on-_Tableaue.git",
      live: "https://your-portfolio-link.com/churn-report"
    },
    {
      id: 4,
      category: "Dashboard & Reporting",
      title: "Mobile_Sales_Analysis",
      description: "Developed a mobile sales dashboard to track revenue, units sold, and customer demographics. It highlights sales trends, top brands, and payment methods to support data-driven business strategies.",
      tech: ["Tableau", "Calculated Fields", "Excel"],
      // Image pulled from the public/images folder
      image: require('../assets/projectimg/Mobile Sales Dashboard.png'),
      github: "https://github.com/rishavkr-004/Automobile_Data_Analysis.git",
      live: "https://your-portfolio-link.com/churn-report"
    },
    {
      id: 5,
      category: "Dashboard & Reporting",
      title: "Titanic_Passanger_Survival_Analysis",
      description: "Created a Titanic dataset dashboard to analyze survival rates based on gender, class, and embarkation points. It provides insights into passenger distribution and key factors influencing survival.",
      tech: ["Tableau", "Calculated Fields", "Excel"],
      // Image pulled from the public/images folder
      image: require('../assets/projectimg/Titanic_Dashboard.png'),
      github: "https://github.com/rishavkr-004/Titanic-Data-Analysis.git",
      live: "https://your-portfolio-link.com/churn-report"
    },
    {
      id: 6,
      category: "Dashboard & Reporting",
      title: "Human_Organ_Health_Analysis",
      description: "Designed a health analytics dashboard to assess risk factors such as smoking habits, BMI, and age. It provides insights into patient health conditions and helps in identifying high-risk groups for preventive care.",
      tech: ["Power BI", "DAX", "Excel"],
      // Image pulled from the public/images folder
      image: require('../assets/projectimg/Health_Dashboard.jpg'),
      github: "https://github.com/rishavkr-004/Smoking_Health_Risk_Analysis.git",
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