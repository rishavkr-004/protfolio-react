import React from 'react';
import './Contact.css';

function Contact() {
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
              <a href="mailto:email@example.com">email@example.com</a>
            </div>
            <div className="detail-item">
              <span className="icon">📍</span>
              <span>Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@company.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">How Can I Help You?</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            
            <button type="submit" className="btn-primary form-submit-btn">
              Send Message ➔
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;