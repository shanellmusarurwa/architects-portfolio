import React from 'react';
import './Page.css';

function GalleryPage() {
  return (
    <div className="page gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {[...Array(6)].map((_, i) => (
          <div className="photo-placeholder" key={i}>Photo {i + 1}</div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
