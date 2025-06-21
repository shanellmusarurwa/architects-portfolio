// src/components/ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  return (
    <div className="container py-5">
      <h3 className="mb-4">Our Projects</h3>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card text-white bg-dark h-100">
            <img src="/images/sample.jpg" className="card-img" alt="Sample Project" />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">Sample Project</h5>
              <p className="card-text">View More →</p>
            </div>
          </div>
        </div>

        {/* 4 smaller thumbnails */}
        <div className="col-md-3 col-sm-6">
          <img src="/images/proj1.jpg" className="img-fluid" alt="Proj1" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src="/images/proj2.jpg" className="img-fluid" alt="Proj2" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src="/images/proj3.jpg" className="img-fluid" alt="Proj3" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src="/images/proj4.jpg" className="img-fluid" alt="Proj4" />
        </div>
      </div>
      <div className="mt-4 text-end">
        <button className="btn btn-dark">All Projects →</button>
      </div>
    </div>
  );
};

export default ProjectsSection;
