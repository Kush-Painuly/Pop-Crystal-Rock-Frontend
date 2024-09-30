import React, { useState } from "react";
import logo from "/logo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 absolute top-0 z-20 flex items-center justify-between bg-transparent">
      <div className="w-1/2 p-2 flex items-center gap-2">
        <img
          src={logo}
          alt="pop-rock-crystal-logo"
          className="w-1/12 h-auto border-2 border-white py-7 rounded-full"
        />
        <h1 className="capitalize font-medium text-white">Pop Rock Crystal</h1>
      </div>

      {/* Desktop and Tablet Navigation */}
      <nav className="hidden md:block w-1/4">
        <ul className="flex items-center justify-around">
          <li className="p-2">
            <a href="#" className="text-white font-medium">
              Home
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-white font-medium">
              Shop
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-white font-medium">
              About Us
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-white font-medium">
              Help
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-white">
          <ul className="flex flex-col items-center">
            <li className="p-2">
              <a href="#" className="text-black font-medium">
                Home
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="text-black font-medium">
                Shop
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="text-black font-medium">
                About Us
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="text-black font-medium">
                Help
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div className="flex items-center justify-center gap-2">
        <span className="border border-red-600 bg-red-600 text-white p-1 rounded-full">
          00
        </span>
        <IconButton>
          <ShoppingBasketIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </header>
  );
};

export default NavBar;
