import './Home.css';  // Make sure to import your CSS file

function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Rishav Resume 2025.pdf"; // Path to your resume in the public folder
    link.download = "My_Resume.pdf"; // Name of the file after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home-container">
      <div className="home-image-container">
        <img
          src={require('../assets/image/aboutme.jpg')}  // Adjust the path to your image
          alt="Profile"
          className="home-image"
        />
      </div>
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-description">
        I am a passionate web developer who specializes in building high-quality, responsive websites.
      </p>
      <p className="home-details">
        Take a look at my projects and feel free to contact me for collaboration or freelance work.
      </p>
      <button class="button">Contact me</button>
      <button className="button" onClick={handleResumeDownload}>Resume</button>

    </div>
  );
}

export default Home;
