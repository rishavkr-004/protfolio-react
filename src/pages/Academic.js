import React, { useState } from 'react';
import './Academic.css';

function Academic() {
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
      filePath: require('../assets/certificate/bca.pdf'),
    },
    {
      id: "iti",
      degree: "ITI Certification",
      school: "Silicobyte Holy Angles Private ITI, Katni",
      year: "2018 - 2020",
      desc: "Technical training focused on practical, hands-on industrial skills and hardware proficiency.",
      fileName: "Rishav_ITI_Certificate.pdf",
      filePath: require('../assets/certificate/ITI.pdf'),
    },
    {
      id: "12th",
      degree: "Higher Secondary (12th)",
      school: "J.N College, Madhubani",
      year: "2019",
      desc: "Completed higher secondary education with a focus on core sciences and mathematics.",
      fileName: "rishav mishra 12th marksheet.pdf",
      filePath: require('../assets/certificate/12th marksheet rishav.pdf'),
    },
    {
      id: "10th",
      degree: "Secondary School (10th)",
      school: "T.N High School, Kaluahi",
      year: "2016",
      desc: "General foundational education establishing strong analytical and problem-solving skills.",
      fileName: "Rishav_10th_Certificate.pdf",
      filePath: require('../assets/certificate/10th.pdf'), // Assumes this path exists in your project!
    }
  ];

  // --- Security Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  // 1. Opens the modal instead of downloading immediately
  const handleDownloadClick = (path, name) => {
    setSelectedCert({ path, name });
    setIsModalOpen(true);
    setPin('');    // Reset the pin input
    setError('');  // Reset any previous errors
  };

  // 2. Verifies the PIN and triggers the download if correct
  const verifyAndDownload = () => {
    if (pin === '1983') {
      // Correct PIN - Execute Download
      const link = document.createElement("a");
      link.href = selectedCert.path;
      link.download = selectedCert.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close the modal
      setIsModalOpen(false);
    } else {
      // Incorrect PIN
      setError('Incorrect security code. Please try again.');
    }
  };

  return (
    <div className="section-container">
      <h2 className="section-title">Academic Education</h2>
      <p className="academic-subtitle">My formal education and academic achievements.</p>
      
      <div className="academic-card">
        {educationData.map((item) => (
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
              
              <button 
                className="btn-secondary btn-sm" 
                onClick={() => handleDownloadClick(item.filePath, item.fileName)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Secure Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- The Security Modal UI --- */}
      {isModalOpen && (
        <div className="pin-modal-overlay">
          <div className="pin-modal-content">
            <h3>🔒 Restricted Access</h3>
            <p>Please enter the 4-digit security code to download this certificate.</p>
            
            <input 
              type="password" 
              maxLength="4" 
              placeholder="Enter PIN" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className={error ? 'input-error' : ''}
              autoFocus
            />
            
            {/* Show error message if wrong PIN */}
            {error && <p className="error-text">{error}</p>}
            
            <div className="pin-modal-actions">
              <button className="btn-secondary btn-sm" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="btn-primary btn-sm" onClick={verifyAndDownload}>
                Verify & Download
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Academic;