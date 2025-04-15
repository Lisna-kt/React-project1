import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const HomePage = () => {
  // Swiper slides
  const slides = [
    { img: "/images/Header-images/Header3.webp" },
    { img: "/images/Header-images/Header2.webp" },
    { img: "/images/Header-images/Header1.webp" },
    { img: "/images/Header-images/Header4.webp" },
  ];

  // Gallery images
  const galleryImages = [
    '/images/Mainpage-images/Lady1.webp',
    '/images/Mainpage-images/Lady2.webp',
    '/images/Mainpage-images/Lady3.webp',
    '/images/Mainpage-images/Lady4.webp',
    '/images/Mainpage-images/Lady5.webp',
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const handleNext = () => {
    if (startIndex < galleryImages.length - 3) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const toggleZoom = () => setZoomed(!zoomed);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        ENJOY COMPLIMENTARY DELIVERY & RETURNS
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4 md:gap-0">
        <div className="text-2xl font-light tracking-wide">
          <a href="/">BARE LUXE</a>
        </div>

        <ul className="flex space-x-4 md:space-x-6 text-gray-700 text-sm font-medium">
          <li><a href="/new-arrivals" className="hover:text-black">New Arrivals</a></li>
          <li><a href="/shoes" className="hover:text-black">Shoes</a></li>
          <li><a href="/modern-classics" className="hover:text-black">Modern Classics</a></li>
          <li><a href="/icons" className="hover:text-black">Icons</a></li>
          <li><a href="/bridal" className="hover:text-black">Bridal & Wedding</a></li>
          <li><a href="/sale" className="hover:text-black">Sale</a></li>
        </ul>

        <div className="flex space-x-4 text-gray-600 text-lg">
          <a href="/search" title="Search">🔍</a>
          <a href="/account" title="Account">👤</a>
          <a href="/cart" title="Cart">🛍️</a>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Breadcrumb & Filter */}
      <div className="flex justify-between items-center px-6 py-4 text-gray-700 text-sm">
        <div>
          <a href="/" className="hover:underline">Home</a> &gt; 
          <a href="/collections" className="hover:underline mx-1">Collections</a> &gt; 
          <span className="text-blue-500">Spring 25</span>
        </div>
        <button className="border px-4 py-2 rounded text-sm hover:bg-gray-100">FILTER & SORT</button>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col lg:flex-row gap-5 p-4 max-w-full overflow-hidden">
        {/* Left Main Image */}
        <div
          className={`w-full lg:w-1/3 h-[50vw] max-h-[500px] overflow-hidden relative cursor-${zoomed ? 'zoom-out' : 'zoom-in'}`}
          onClick={toggleZoom}
        >
          <img
            src="/images/Mainpage-images/Lady6.avif"
            alt="Main"
            className={`w-full h-full object-cover transition-transform duration-500 ${
              zoomed ? 'scale-150' : 'hover:scale-110'
            }`}
          />
        </div>

        {/* Right Gallery */}
        <div className="w-full lg:w-2/3 flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="text-3xl px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            ←
          </button>

          <div className="flex gap-4 overflow-x-auto h-[50vw] max-h-[500px] w-full px-2">
            {galleryImages.slice(startIndex, startIndex + 3).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-[30vw] lg:w-[18vw] h-full object-cover border rounded-md flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-3xl px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
