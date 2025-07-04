import React from 'react';
import './Page.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Sample Project",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cta: "View More",
      image: "/assets/image 30.png"
    },
    {
      title: "GATHIC FORCE?",
      description: "Lorem Ipsum was originally dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cta: "View More",
      image: "/assets/image 32.png"
    },
     {
      title: "GATHIC FORCE?",
      description: "Lorem Ipsum was originally dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cta: "View More",
      image: "/assets/image 33.png"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="section-title">
           <span className="faded">Our</span><br />
          <span className="black">Projects</span>

        </h1>
        
        {projects.map((project, index) => (
          <div key={index} className="project-module">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href="#" className="project-cta">
                <strong>{project.cta}</strong>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;