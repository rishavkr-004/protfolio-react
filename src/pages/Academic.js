import React from 'react';
import './Academic.css';

function Academic() {
  // Array holding all your educational data
  const educationData = [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      school: "K.R Mangalam University, Gurgaon",
      year: "2024 - 2026",
      desc: "Advanced studies in software engineering, system architecture, and complex database management.",
      fileName: "Rishav_MCA_Certificate.pdf",
      filePath: "/certificates/mca.pdf",
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Rani Durgavati Vishwavidyalaya, Jabalpur",
      year: "2020 - 2023",
      desc: "Core foundation in programming languages, web technologies, and software development lifecycles.",
      fileName: "Rishav_BCA_Certificate.pdf",
      filePath: "/certificates/bca.pdf"
    },
    {
      id: "iti",
      degree: "ITI Certification",
      school: "Silicobyte Holy Angles Private ITI, Katni",
      year: "2018 - 2020",
      desc: "Technical training focused on practical, hands-on industrial skills and hardware proficiency.",
      fileName: "Rishav_ITI_Certificate.pdf",
      filePath: "/certificates/iti.pdf"
    },
    {
      id: "12th",
      degree: "Higher Secondary (12th)",
      school: "J.N College, Madhubani",
      year: "2019",
      desc: "Completed higher secondary education with a focus on core sciences and mathematics.",
      fileName: "Rishav_12th_Certificate.pdf",
      filePath: "/certificates/12th.pdf"
    },
    {
      id: "10th",
      degree: "Secondary School (10th)",
      school: "T.N High School, Kaluahi",
      year: "2016",
      desc: "General foundational education establishing strong analytical and problem-solving skills.",
      fileName: "Rishav_10th_Certificate.pdf",
      filePath: "/certificates/10th.pdf"
    }
  ];

  // Function to handle the certificate downloads
  const handleDownload = (path, name) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="section-container">
      <h2 className="section-title">Academic Education</h2>
      <p className="academic-subtitle">My formal education and academic achievements.</p>
      
      <div className="academic-card">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={item.id}>
            
            {/* Left Side: School & Year */}
            <div className="timeline-left">
              <h4 className="school-name">{item.school}</h4>
              <p className="school-year">{item.year}</p>
            </div>

            {/* Center: The Colored Divider Line */}
            <div className="timeline-divider">
              <span className="timeline-dot"></span>
            </div>

            {/* Right Side: Degree, Desc, & Download Button */}
            <div className="timeline-right">
              <h3 className="degree-name">{item.degree}</h3>
              <p className="degree-desc">{item.desc}</p>
              
              {/* Button styling borrowed from your Home.js btn-secondary */}
              <button 
                className="btn-secondary btn-sm" 
                onClick={() => handleDownload(item.filePath, item.fileName)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Certificate
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;