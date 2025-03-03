import './Project.css';
function Project() {
    return (
      <div>
        <h1 className="mb-4">Projects</h1>
        <div className="row">
          {/* Project Card #1 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src={require('../assets/image/download11.png')}
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project One</h5>
                <p className="card-text" style={{ color: "white" }}>
                  A brief description of Project One. Mentions technologies used and
                  how the project addresses a specific problem rishav.
                </p>
              </div>
            </div>
          </div>
  
          {/* Project Card #2 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src={require('../assets/image/download.jpg')}
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text" style={{ color: "white" }}>
                  A brief description of Project Two. Highlights challenges faced and
                  the solutions implemented.
                </p>
              </div>
            </div>
          </div>
  
          {/* Project Card #3 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src= {require('../assets/image/ProjectManagement.jpg')}
                className="card-img-top"
                alt="Project 3"
              />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text" style={{ color: "white" }}>
                  A brief description highlighting key features that distinguish this project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;
  