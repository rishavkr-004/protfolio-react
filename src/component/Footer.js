import './Footer.css'; 
function Footer() {
    return (
      <footer className="bg-dark text-white py-3 mt-4">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Rishav Mishra | Built with React &amp; Bootstrap
          </p>
          <div className="social-icons">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://t.me" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram fa-2x"></i>
          </a>
          <a href="https://wa.me" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>

        </div>
      </footer>
    );
  }
  
  export default Footer;
  