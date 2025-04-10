import React, { useState } from 'react';

const images = [
  '/images/Mainpage-images/Lady1.webp',
  '/images/Mainpage-images/Lady2.webp',
  '/images/Mainpage-images/Lady3.webp',
  '/images/Mainpage-images/Lady4.webp',
  '/images/Mainpage-images/Lady5.webp',
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
    <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-full">
      
      {/* Left main image */}
      <div className="w-full lg:w-1/3 h-[50vw] max-h-[500px] overflow-hidden">
        <img
          src={images[startIndex]}
          alt="Main"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Right carousel */}
      <div className="w-full lg:w-2/3 flex items-center">
        
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-3xl font-bold px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          ←
        </button>

        {/* Thumbnail row */}
        <div className="flex gap-4 overflow-x-auto h-[50vw] max-h-[500px] w-full px-4">
          {images.slice(startIndex, startIndex + 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="w-[30vw] lg:w-[18vw] h-full object-cover border rounded-md flex-shrink-0"
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-3xl font-bold px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}
