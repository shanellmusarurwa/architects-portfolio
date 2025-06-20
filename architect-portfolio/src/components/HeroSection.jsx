// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // optional if you want custom styling

const HeroSection = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row align-items-center p-5">
      <div className="col-md-6 text-start">
        <h5 className="text-muted">PROJECT</h5>
        <h1 className="fw-bold">Lorum</h1>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <img
          src="/images/building.jpg"
          alt="Project"
          className="img-fluid w-100"
        />
      </div>
    </div>
  );
};

export default HeroSection;
