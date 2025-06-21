import React from 'react';
import './Page.css';

const PhotoGallery = () => {
  // High-quality Unsplash images for the gallery
  const galleryImages = [
    // Top row images (As Siddesa)
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      
    },
    {
      id: 2,
      src: '/assets/Rectangle 23.png'
      
    },
    {
      id: 3,
      src: '/assets/Rectangle 24.png'
    
    },
    {
      id: 4,
      src: '/assets/Rectangle 25.png'
      
    },
    {
      id: 5,
      src: '/assets/Rectangle 26.png'
      
    },
    // Bottom row images (DEFEAL PROJECT)
    {
      id: 6,
      src: '/assets/Rectangle 27.png'
      
    },
    {
      id: 7,
      src: '/assets/Rectangle 28.png'
      
    },
    {
      id: 8,
      src: '/assets/Rectangle 29.png'
      
    },
    {
      id: 9,
      src: '/assets/Rectangle 30.png'
      
    },
    {
      id: 10,
      src: '/assets/Rectangle 31.png'
      
    }
  ];

  return (
    <section className="photo-gallery">
      <div className="gallery-header">
        <h1>
          <span className="faded">Photo</span><br />
          <span className="black">Gallery</span>
        </h1>
      </div>
      
      {/* Top Row - 5 images */}
      <div className="gallery-row">
        {galleryImages.slice(0, 5).map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
      
      {/* Bottom Row - 5 images */}
      <div className="gallery-row">
        {galleryImages.slice(5, 10).map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

const GalleryItem = ({ image }) => (
  <div className="gallery-item">
    <div className="image-container">
      <img src={image.src} alt={image.caption} />
    </div>
    <div className="image-caption">
      {image.caption}
    </div>
  </div>
);

export default PhotoGallery;