import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Header = () => {
  // Slide data: image + title + optional link
  const slides = [
    {
      img: "/images/Header-images/Header3.webp",
      
      
    },
    {
      img: "/images/Header-images/Header2.webp",
      

    },
    {
      img: "/images/Header-images/Header1.webp",
     
    },
    {
      img: "/images/Header-images/Header4.webp",
      
    },
  ];

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

      {/* Hero Swiper with Image + Title per slide */}
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
                {/* Overlay title */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={slide.link}
                    className="text-white text-4xl md:text-5xl font-light bg-black/40 px-6 py-3 rounded hover:underline transition"
                  >
                    
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Breadcrumb & Filter Section */}
      <div className="flex justify-between items-center px-6 py-4 text-gray-700 text-sm">
        <div>
          <a href="/" className="hover:underline">Home</a> &gt; 
          <a href="/collections" className="hover:underline mx-1">Collections</a> &gt; 
          <span className="text-blue-500">Spring 25</span>
        </div>
        <button className="border px-4 py-2 rounded text-sm hover:bg-gray-100">FILTER & SORT</button>
      </div>
    </div>
  );
};

export default Header;
