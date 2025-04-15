import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Navbar from "../components/Navbar"; // ✅ Import the new Navbar

const Header = () => {
  const slides = [
    { img: "/images/Header-images/Header1.webp" },
    { img: "/images/Header-images/Header2.webp" },
    { img: "/images/Header-images/Header3.webp" },
    { img: "/images/Header-images/Header4.webp" },
  ];

  return (
    <div className="w-full">
      
      <Navbar />

      {/* Image Slider */}
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

      {/* Breadcrumb + Filter */}
      <div className="flex justify-between items-center px-6 py-4 text-gray-700 text-sm">
        <div>
          <Link to="/" className="hover:underline">Home</Link> &gt;
          <Link to="/collections" className="hover:underline mx-1">Collections</Link> &gt;
          <span className="text-blue-500">Spring 25</span>
        </div>
        <button className="border px-4 py-2 rounded text-sm hover:bg-gray-100">
          FILTER & SORT
        </button>
      </div>
    </div>
  );
};

export default Header;
