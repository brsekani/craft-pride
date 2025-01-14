"use client";

import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import { Link } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header className="flex items-center justify-between w-full text-black px-6 lg:px-[120px]  py-4 bg-[#F6F0E3]">
      {/* Left navigation for large screens */}
      <ul className="hidden md:flex items-center flex-row gap-6 md:gap-12">
        <Link to="home" smooth={true} duration={500} offset={-70}>
          <li className="hover:text-[#DD940E] transition duration-300 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <li className="hover:text-[#DD940E] transition duration-300 cursor-pointer">
            About
          </li>
        </Link>
        <Link to="shop" smooth={true} duration={500} offset={-70}>
          <li className="hover:text-[#DD940E] transition duration-300 cursor-pointer">
            Shop
          </li>
        </Link>
      </ul>

      {/* Logo */}
      <Logo />

      {/* Right navigation for large screens */}
      <ul className="hidden md:flex items-center flex-row gap-6 md:gap-12">
        <Link to="bar" smooth={true} duration={500} offset={-70}>
          <li className="hover:text-[#DD940E] transition duration-300 cursor-pointer">
            Bar
          </li>
        </Link>
        <Link to="news" smooth={true} duration={500} offset={-70}>
          <li className="hover:text-[#DD940E] transition duration-300 cursor-pointer">
            News
          </li>
        </Link>

        <Link to="contact" smooth={true} duration={500} offset={-70}>
          <li className="hover:text-[#DD940E] transition duration-300 cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className={`md:hidden cursor-pointer transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "rotate-180 opacity-100" : "rotate-0 opacity-80"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-[#F6F0E3] shadow-lg z-10 transform transition-all duration-300 ease-in-out block md:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
        ref={dropDownRef}
      >
        <ul className="flex flex-col items-center gap-6 py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <li className="hover:text-gray-700 transition duration-300">
              Home
            </li>
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <li className="hover:text-gray-700 transition duration-300">
              About
            </li>
          </Link>

          <Link
            to="shop"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <li className="hover:text-gray-700 transition duration-300">
              Shop
            </li>
          </Link>

          <Link
            to="bar"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <li className="hover:text-gray-700 transition duration-300">Bar</li>
          </Link>

          <Link
            to="news"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <li className="hover:text-gray-700 transition duration-300">
              News
            </li>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <li className="hover:text-gray-700 transition duration-300">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
