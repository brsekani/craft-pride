import Image from "next/image";
import image1 from "@/public/craftPrideslider1.jpg";
import image2 from "@/public/craftPrideslider2.jpg";
import { GiHops } from "react-icons/gi";

export default function TheTaste() {
  const progressData = [
    { label: "Brewing Process", percentage: 97 },
    { label: "Filtering", percentage: 89 },
    { label: "Conditioning", percentage: 56 },
  ];

  return (
    <div className="w-full text-[#020504] px-4 md:px-6 flex flex-col md:flex-row max-w-[1400px] mx-auto gap-10 md:gap-36 mb-20">
      {/* Left Column (Images in a Row) */}
      <div className="flex flex-row gap-4 md:gap-6 w-full md:w-[50%] h-auto md:h-[500px]">
        <div className="flex-1 relative h-64 md:h-full">
          <GiHops
            size={100}
            className="absolute hidden md:block top-4 left-4 text-[#BE881D] animate-bounce opacity-70 z-10"
          />

          <Image
            src={image1}
            alt="Delicious beer in a cozy setting"
            className="rounded-tl-[40%] shadow-lg object-cover"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <div className="flex-1 relative h-64 md:h-full">
          <GiHops
            size={100}
            className="absolute hidden md:block bottom-4 right-0 text-[#BE881D] animate-bounce opacity-70 z-10"
          />
          <Image
            src={image2}
            alt="Refreshing beer served on a wooden table"
            className="rounded-br-[40%] shadow-lg object-cover"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Right Column (Text) */}
      <div className="flex flex-col justify-between gap-6 w-full md:w-[50%]">
        <p className="text-base md:text-lg text-[#E1A32E]">
          Crafting happiness in bottles
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left uppercase xl:w-[70%] w-full">
          The Taste of the Good Spirit
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 text-center md:text-left xl:w-[80%] w-full">
          Discover the essence of craft brewing with our exquisite collection of
          beers. Every sip is a celebration of flavor, tradition, and passion
          for brewing excellence. Whether you prefer a crisp lager or a bold
          stout, our beers are crafted to perfection.
        </p>
        <div className="flex flex-col gap-6">
          {progressData.map((data, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-xl text-gray-800">
                  {data.label}
                </p>
                <p className="font-semibold text-xl text-gray-800">
                  {data.percentage}%
                </p>
              </div>
              <div className="w-full h-2 bg-transparent relative overflow-hidden">
                {/* Filled Portion */}
                <div
                  className="h-full bg-[#E1A32E] absolute top-0 left-0"
                  style={{ width: `${data.percentage}%` }}
                ></div>
                {/* Unfilled Border */}
                <div
                  className="absolute top-0 right-0 h-full bg-transparent border border-black border-l-0"
                  style={{ width: `${100 - data.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
