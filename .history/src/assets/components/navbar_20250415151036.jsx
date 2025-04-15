import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiHeart } from "react-icons/fi";
import { useSearch } from "../Context/SearchContext";

const Navbar = () => {
    const { search, setSearch } = useSearch();
    const {navigate}=useNavigate
  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        ENJOY COMPLIMENTARY DELIVERY & RETURNS
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4 md:gap-0">
        {/* Logo */}
        <div className="text-2xl font-light tracking-wide">
          <Link to="/">BARE LUXE</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-700 text-sm font-medium">
          <li><Link to="/new-arrivals" className="hover:text-black">New Arrivals</Link></li>
          <li><Link to="/boots" className="hover:text-black">Boots</Link></li>
          <li><Link to="/bridal" className="hover:text-black">Bridal & Wedding</Link></li>
          <li><Link to="/icons" className="hover:text-black">Icons</Link></li>
          <li><Link to="/loafers" className="hover:text-black">Loafers</Link></li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-gray-600 text-lg">
          <div className="flex items-center border rounded px-2 py-1">
          <FiSearch
    className="mr-2 cursor-pointer text-gray-600 hover:text-black"
    onClick={() => navigate("/products")}
  />

            <input
  type="text"
  placeholder="Search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      navigate("/products"); // Redirect to Products page
    }
  }}
  className="outline-none text-sm w-24 md:w-32 lg:w-40"
/>


          </div>

          <Link to="/wishlist" title="Wishlist" className="hover:text-black">
            <FiHeart />
          </Link>

          <Link
            to="/login"
            className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>

          <Link to="/cart" title="Cart" className="hover:text-black">
            <FiShoppingBag />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
