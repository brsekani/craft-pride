import Image from "next/image";
import backgroundImage from "@/public/craftPrideslider5.jpg";

export default function SpecialOffer() {
  return (
    <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center text-white">
      {/* Optimized Background Image */}
      <Image
        src={backgroundImage}
        alt="Special Offer Background"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        className="z-[-1]"
      />
      <div className="bg-black bg-opacity-50 flex items-center justify-center flex-col text-center w-full h-full md:gap-7 gap-4 p-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Special Offer!
        </h1>
        <p className="text-sm md:text-lg lg:text-xl px-4 md:px-8 lg:px-32">
          Experience the finest selection of craft beers with unique flavors
          crafted to perfection. Whether you’re a fan of crisp lagers, hoppy
          IPAs, or rich stouts, we’ve got something special just for you. Enjoy
          exclusive discounts and indulge in an unforgettable journey of taste —
          only for a limited time!
        </p>
        <button className="px-6 py-3 bg-[#E1A32E] text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
}
