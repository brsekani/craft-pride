"use client";
import { motion } from "framer-motion";
import image1 from "@/public/craftPrideslider3.jpg";
import BreweryCard from "./BreweryCard";

export default function NewsAndEvents() {
  const breweryData = [
    {
      imageSrc: image1,
      title: "Summit Brewery",
      description:
        "Discover the essence of craft brewing with our exquisite collection of beers. Every sip is a celebration of flavor, tradition, and passion for brewing excellence. Whether you prefer a crisp lager or a bold stout, our beers are crafted to perfection.",
    },
    {
      imageSrc: image1,
      title: "Mountain Lager",
      description:
        "Experience the refreshing taste of our signature lager, brewed with the finest hops and pristine mountain water. Perfect for any occasion, this crisp lager delivers a taste of the great outdoors in every sip.",
    },
    {
      imageSrc: image1,
      title: "Craft Ale",
      description:
        "Our craft ale is a true masterpiece, combining bold flavors with a smooth finish. Brewed with a dedication to quality, this ale offers a unique experience for beer enthusiasts.",
    },
    {
      imageSrc: image1,
      title: "Bold Stout",
      description:
        "Rich, robust, and unapologetically bold—our stout is crafted for those who crave a deep, velvety beer with notes of coffee and chocolate. It's a brew that commands attention.",
    },
  ];

  return (
    <section
      id="news"
      className="w-full text-[rgb(2,5,4)] px-6 flex flex-col gap-4  max-w-[1400px] mx-auto"
    >
      <motion.div
        className="flex items-center justify-between w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex sm:gap-4 gap-1 flex-col">
          <p className="text-base md:text-lg text-[#E1A32E]">Be our guest</p>
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left uppercase">
            News & Events
          </h1>
        </div>
        <button className="sm:h-14 h-10 sm:max-w-[200px] max-w-[100px] w-full text-black text-lg flex items-center justify-center border border-black rounded-md p-[3px] ">
          <div className="bg-[#BE881D] w-full h-full hover:bg-[#9c6a1d] flex items-center justify-center rounded-md transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-sm sm:text-base">
            Explore
          </div>
        </button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {breweryData.map((brewery, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <BreweryCard
              imageSrc={brewery.imageSrc}
              title={brewery.title}
              description={brewery.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
