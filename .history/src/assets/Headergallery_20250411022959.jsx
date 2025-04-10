// HeaderGallery.jsx
import React, { useState } from 'react';
import './HeaderGallery.css';

const images = [
  '/images/Mainpage-images/Lady1.webp',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
];

export default function HeaderGallery() {
  const [zoomed, setZoomed] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleZoomToggle = () => setZoomed(!zoomed);

  const handleNext = () => {
    if (startIndex < images.length - 3) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <div className="header-gallery">
      <div className={`main-image ${zoomed ? 'zoomed' : ''}`} onClick={handleZoomToggle}>
        <img src="//images/Mainpage-images/Lady1.webp" alt="Main" />
      </div>
      <div className="side-gallery">
        <button onClick={handlePrev} className="arrow">←</button>
        <div className="thumbnails">
          {images.slice(startIndex, startIndex + 3).map((img, index) => (
            <img key={index} src={img} alt={`thumb-${index}`} />
          ))}
        </div>
        <button onClick={handleNext} className="arrow">→</button>
      </div>
    </div>
  );
}
