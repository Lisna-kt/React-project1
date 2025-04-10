import React, { useState } from 'react';

const images = [
  '/images/Mainpage-images/Lady1.webp',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
];

export default function HeaderGallery() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < images.length - 3) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-full overflow-hidden">
      
      {/* Left main image with hover zoom effect */}
      <div className="flex-1 w-full lg:w-1/3 h-[50vw] overflow-hidden relative">
        <img
          src={images[startIndex]}
          alt="Main"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Right thumbnails in row with arrows */}
      <div className="flex flex-col w-full lg:w-2/3 items-center">
        <div className="flex justify-between w-full px-2">
          <button
            onClick={handlePrev}
            className="text-xl font-bold px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-xl font-bold px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            →
          </button>
        </div>

        <div className="flex overflow-x-auto gap-4 mt-4 px-2">
          {images.slice(startIndex, startIndex + 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="w-[30vw] lg:w-[18vw] h-[25vw] object-cover border rounded-md flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
