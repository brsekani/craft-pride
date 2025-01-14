import Image from "next/image";
import heroImage from "@/public/heroImage1.jpg";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { GiHops } from "react-icons/gi";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full text-[#020504] px-6 flex flex-col md:flex-row max-w-[1400px] mx-auto relative"
    >
      <GiHops
        size={100}
        className="absolute hidden md:block top-4 left-4 text-[#BE881D] animate-bounce opacity-70"
      />
      <GiHops
        size={100}
        className="absolute hidden md:block bottom-4 right-0 text-[#BE881D] animate-bounce opacity-70"
      />
      {/* Hero Image */}
      <div className="relative w-full max-w-full md:h-[85vh] h-[90vh] overflow-hidden md:rounded-tl-[30%] md:rounded-br-[30%]  md:rounded-none">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <Image
            src={heroImage}
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority // Ensures the image is preloaded for better performance
            loading="eager" // Loads the image immediately
            placeholder="blur"
          />
        </div>

        {/* Overlay Text inside the image */}
        <div className="absolute bottom-14 left-1 flex flex-col md:gap-3 gap-2 text-white px-6 md:px-12 py-4 md:w-[50%] w-full">
          <p className="text-lg md:text-xl text-[#BE881D]">
            True spirited taste
          </p>

          <h1 className="text-xl md:text-5xl font-semibold md:leading-tight leading-snug">
            The Perfect Beer For Every Occasion
          </h1>

          {/* CTA Button */}
          <Link
            href="#cta-section" // Link to a section or any URL
            className="flex items-center justify-between md:mt-4 mt-0 px-8 py-3 bg-[#BE881D] md:h-14 h-12 text-white font-bold rounded-md shadow-lg hover:bg-[#9c6a1d] transition duration-300 ease-in-out w-max md:w-auto"
          >
            <p>Discover More</p>
            <IoArrowForward size={25} />
          </Link>
        </div>
      </div>
    </section>
  );
}
