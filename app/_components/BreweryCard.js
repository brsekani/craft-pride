import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for `Image`

const BreweryCard = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-md w-full mx-auto  shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <Image
          className="object-cover w-full h-full"
          src={imageSrc}
          alt={title}
          layout="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-800 uppercase">
          {title}
        </h1>
        <p className="text-gray-600 mt-2 leading-relaxed line-clamp-3">
          {description}
        </p>
        <button className="mt-4  font-bold text-[#E1A32E] hover:text-[#9c6a1d]">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default BreweryCard;
