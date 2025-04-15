import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi"; // React Icons
import { Link } from "react-router-dom"; // Link component from React Router

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
          <Link to="/">BARE LUXE</Link>
        </div>

        <ul className="flex space-x-4 md:space-x-6 text-gray-700 text-sm font-medium">
          <li>
            <Link to="/new-arrivals" className="hover:text-black">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/shoes" className="hover:text-black">
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/modern-classics" className="hover:text-black">
              Modern Classics
            </Link>
          </li>
          <li>
            <Link to="/icons" className="hover:text-black">
              Icons
            </Link>
          </li>
          <li>
            <Link to="/bridal" className="hover:text-black">
              Bridal & Wedding
            </Link>
          </li>
          <li>
            <Link to="/sale" className="hover:text-black">
              Sale
            </Link>
          </li>
        </ul>

        {/* Icons & Login Button */}
        <div className="flex items-center space-x-4 text-gray-600 text-lg">
          {/* Search Icon */}
          <Link to="/search" title="Search" className="hover:text-black">
            <FiSearch />
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" title="Cart" className="hover:text-black">
            <FiShoppingBag />
          </Link>
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
                <div className="absolute inset-0 flex items-center justify-center"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Breadcrumb & Filter Section */}
      <div className="flex justify-between items-center px-6 py-4 text-gray-700 text-sm">
        <div>
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link to="/collections" className="hover:underline mx-1">
            Collections
          </Link>{" "}
          &gt;{" "}
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
