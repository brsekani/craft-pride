import Image from "next/image";
import aboutImage1 from "@/public/aboutUs1.jpg";
import aboutImage2 from "@/public/aboutUs2.jpg";
import { GiHops } from "react-icons/gi";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full text-[#020504] px-6 flex flex-col md:flex-row max-w-[1400px] mx-auto"
    >
      {/* Text Section */}
      <div className="w-full md:w-[40%] flex flex-col md:gap-3 gap-2 mb-8 md:mb-0">
        <p className="text-lg font-medium text-[#9c6a1d]">About Us</p>
        <h1 className="text-3xl md:text-[53px] leading-tight font-medium">
          Beer Is Full A New Skill
        </h1>
        <p className="text-lg text-[#918E87]">
          At our core, we believe in crafting exceptional experiences. Our
          passion lies in creating something that brings joy, connects people,
          and leaves a lasting impression. We strive for excellence in
          everything we do, ensuring every moment is filled with quality and
          care. Join us on a journey where passion meets perfection.
        </p>
        <button className="h-14 w-[200px] text-black text-lg flex items-center justify-center border border-black rounded-md p-[3px] ">
          <div className="bg-[#BE881D] w-full h-full hover:bg-[#9c6a1d] flex items-center justify-center rounded-md transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Explore
          </div>
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <GiHops
          size={100}
          className="absolute hidden md:block top-4 left-4 text-[#BE881D] animate-bounce opacity-70 z-10"
        />
        <div className="w-full h-full relative rounded-tl-[30%] rounded-br-[30%] overflow-hidden">
          <Image
            src={aboutImage1}
            alt="About Us Image 1"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full relative rounded-tl-[30%] rounded-br-[30%] overflow-hidden">
          <Image
            src={aboutImage2}
            alt="About Us Image 2"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <GiHops
          size={100}
          className="absolute hidden md:block bottom-4 right-0 text-[#BE881D] animate-bounce opacity-70 z-10"
        />
      </div>
    </section>
  );
}
