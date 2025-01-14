"use client";

import { FaTwitter, FaTiktok, FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { GiHops } from "react-icons/gi";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DD940E] text-[#222] px-6 md:px-16 lg:px-32 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b-2 border-[#222] pb-10">
        {/* Left Column: Site Map */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-lg font-bold uppercase">Site Map</h1>
          <ul className="space-y-2">
            {["About", "Shop", "Bar", "News", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <li className="cursor-pointer hover:text-[#000] transition duration-300">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Center Column: Logo */}
        <Link to="home" smooth={true} duration={500} offset={-70}>
          <div className="flex flex-col items-center cursor-pointer">
            <GiHops className="text-[#222] text-6xl mb-4" />
            <h1 className="uppercase text-2xl font-bold tracking-wide">
              Craft Pride
            </h1>
          </div>
        </Link>

        {/* Right Column: Newsletter Subscription */}
        <div className="flex flex-col space-y-6 text-center md:text-right">
          <h1 className="text-lg font-bold leading-relaxed">
            Be the first to know! Get exclusive updates and offers delivered
            right to your inbox.
          </h1>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 sm:h-14 h-10  rounded-md bg-[#F6F0E3] text-[#222] border border-[#222] focus:outline-none focus:ring-2 focus:ring-[#333]"
            />
            <button
              type="submit"
              className="bg-[#222] text-[#DD940E] px-6 py-2 rounded-md hover:bg-[#000] transition duration-300 sm:h-14 h-10 "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
        {/* Social Media Links */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          {[
            { icon: <FaTwitter size={30} />, label: "Twitter" },
            { icon: <LuInstagram size={30} />, label: "Instagram" },
            { icon: <FaTiktok size={30} />, label: "TikTok" },
            { icon: <FaFacebookF size={30} />, label: "Facebook" },
          ].map(({ icon, label }) => (
            <li
              key={label}
              className="p-2 rounded-full hover:bg-[#000] hover:text-[#DD940E] transition duration-300"
            >
              {icon}
            </li>
          ))}
        </ul>

        {/* Copyright Text */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Lawal Arts. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
