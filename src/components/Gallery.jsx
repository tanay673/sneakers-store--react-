import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="galleryItem">
        <h1 className="galleryTitle">be Yourself</h1>
        <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="model image" className="galleryImage" />
      </div>
      <div className="galleryItem">
        <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="model image" className="galleryImage" />
        <h1 className="galleryTitle">Classy and Trendy Designs</h1>
      </div>
      <div className="galleryItem">
        <h1 className="galleryTitle">For Everything</h1>
        <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="model image" className="galleryImage" />
      </div>
    </div>
  );
};

export default Gallery;