import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
import About from './pages/About.js';
import Project from './pages/Project.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js'; // Make sure to import Home if you're using it
import "./App.css"
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar appears at the top */}
      <Navbar />

      {/* Main content container */}
      <div className="container mt-4 flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
