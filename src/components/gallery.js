/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import galleryImage1 from '../assets/images/image01.jpg';
import galleryImage2 from '../assets/images/image02.jpg';
import galleryImage3 from '../assets/images/image03.jpg';
import galleryImage4 from '../assets/images/image04.jpg';

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="gallery__image1">
        <div id="book1">
          <h3>ZMEŇ SVOJ ŽIVOT</h3>
        </div>
        <img src={galleryImage1} alt="deal" />
      </div>
      <div className="gallery__image2">
        <img src={galleryImage2} alt="man-poiting-finger" />
      </div>
      <div className="gallery__image3">
        <img src={galleryImage3} alt="discusion" />
      </div>
      <div className="gallery__image4">
        <img src={galleryImage4} alt="smiling-guy" />
      </div>
    </div>
  );
};

export default Gallery;
