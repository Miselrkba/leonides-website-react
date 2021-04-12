import React from 'react';
import galleryImage1 from '../assets/images/image01.jpg';
import galleryImage2 from '../assets/images/image02.jpg';
import galleryImage3 from '../assets/images/image03.jpg';
import galleryImage4 from '../assets/images/image04.jpg';

const Gallery = () => {
  return (
    <div id="gallery">
      <img className="gallery__image1" src={galleryImage1} alt="deal" />
      <img className="gallery__image2" src={galleryImage2} alt="deal" />
      <img className="gallery__image3" src={galleryImage3} alt="deal" />
      <img className="gallery__image4" src={galleryImage4} alt="deal" />
    </div>
  );
};

export default Gallery;
