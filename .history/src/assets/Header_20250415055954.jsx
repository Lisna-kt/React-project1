import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiHeart } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Header = () => {
  const slides = [
    { img: "/images/Header-images/Header1.webp" },
    { img: "/images/Header-images/Header2.webp" },
    { img: "/images/Header-images/Header3.webp" },
    { img: "/images/Header-images/Header4.webp" },
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        ENJOY COMPLIMENTARY DELIVERY & RETURNS
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4 md:gap-0">
        {/* Logo */}
        <div className="text-2xl font-light tracking-wide">
          <Link to="/">BARE LUXE</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-700 text-sm font-medium">
          <li><Link to="/new-arrivals" className="hover:text-black">New Arrivals</Link></li>
          <li><Link to="/shoes" className="hover:text-black">Boots</Link></li>
          <li><Link to="/modern-classics" className="hover:text-black">Bridal & Wedding</Link></li>
          <li><Link to="/icons" className="hover:text-black">Icons</Link></li>
          <li><Link to="/bridal" className="hover:text-black">Loafers</Link></li>
          <li><Link to="/sale" className="hover:text-black">Sale</Link></li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-gray-600 text-lg">
          {/* Search */}
          <div className="flex items-center border rounded px-2 py-1">
            <FiSearch className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-24 md:w-32 lg:w-40"
            />
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" title="Wishlist" className="hover:text-black">
            <FiHeart />
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>

          {/* Cart */}
          <Link to="/cart" title="Cart" className="hover:text-black">
            <FiShoppingBag />
          </Link>
        </div>
      </nav>

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
