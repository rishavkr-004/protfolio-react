import React, { useState } from 'react';
import './Contact.css';

function Contact({ persona }) {
  const isWeb = persona === 'web';
  
  // State to handle the form submission status
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    // --- PASTE YOUR WEB3FORMS ACCESS KEY HERE ---
    formData.append("access_key", "8d918ca1-a7ae-4804-9674-dc3f3c39ebf5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully! 🎉");
      event.target.reset(); // Clears the form fields
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Dynamic placeholder based on persona
  const messagePlaceholder = isWeb 
    ? "Tell me about your web app idea, React project, or freelance needs..."
    : "Tell me about your dataset, dashboard needs, or analytical project...";

  return (
    <div className="section-container contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        {/* Left Side: Text and Info */}
        <div className="contact-info">
          <h3>Let's talk about everything!</h3>
          <p>
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">✉️</span>
              <a href="mailto:rishavkr11819@gmail.com">rishavkr11819@gmail.com</a>
            </div>
            <div className="detail-item">
              <span className="icon">📍</span>
              <span>Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={onSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              {/* Note the 'name' attribute - this is required for Web3Forms to read the data */}
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@company.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">How Can I Help You?</label>
              <textarea id="message" name="message" rows="5" placeholder={messagePlaceholder} required></textarea>
            </div>
            
            <button type="submit" className="btn-primary form-submit-btn">
              Send Message ➔
            </button>
            
            {/* Displays "Sending..." or "Success!" below the button */}
            {result && <p className="form-status-message">{result}</p>}
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;