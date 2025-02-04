"use client";

import { LuHop } from "react-icons/lu";
import Image from "next/image";
import beerbottle2 from "@/public/rb_1743.png";
import { motion } from "framer-motion"; // Import Framer Motion

const breweryData = [
  {
    name: "Sustainable Brewing",
    content:
      "We prioritize eco-friendly processes to deliver top-quality beer while protecting the planet.",
    Icon: LuHop,
  },
  {
    name: "Craftsmanship",
    content:
      "Every sip tells a story, handcrafted to perfection using traditional brewing methods.",
    Icon: LuHop,
  },
  {
    name: "Quality Ingredients",
    content:
      "From farm to glass, only the finest hops and grains make it into our brews.",
    Icon: LuHop,
  },
  {
    name: "Innovation",
    content:
      "Pushing boundaries with new flavors and brewing techniques to delight every palate.",
    Icon: LuHop,
  },
  {
    name: "Community Focus",
    content:
      "Bringing people together, one brew at a time, fostering connections and shared moments.",
    Icon: LuHop,
  },
  {
    name: "Heritage",
    content:
      "Honoring centuries of brewing traditions passed down through generations.",
    Icon: LuHop,
  },
];

export default function BreweryProcess() {
  return (
    <div className="w-full text-[#020504] px-4 md:px-6 flex flex-col max-w-[1400px] mx-auto">
      <div className="flex items-center flex-col justify-center w-full gap-4">
        <p className="text-base md:text-lg text-[#E1A32E]">Begin from inside</p>
        <h1 className="uppercase text-3xl md:text-4xl font-bold">
          Brewery Process
        </h1>
      </div>

      {/* Grid Section */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
        {/* Blurred Background Image on Mobile */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={beerbottle2}
            alt="Beer Bottle Background"
            layout="fill"
            objectFit="contain"
            className="opacity-50"
            loading="eager"
            priority
          />
        </div>

        {/* First Column - 3 items */}
        <div className="flex flex-col md:gap-16 gap-6 w-full md:w-1/3 z-10">
          {breweryData.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-center gap-4 max-w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-end">
                <h6 className="font-semibold text-lg">{item.name}</h6>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
              <item.Icon size={80} color="#E1A32E" />
            </motion.div>
          ))}
        </div>

        {/* Center Image for Larger Screens */}
        <div className="hidden md:flex w-full md:w-1/3 justify-center items-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={beerbottle2}
              alt="Beer Bottle"
              width={400}
              height={400}
              className="object-contain"
              priority
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Second Column - 3 items */}
        <div className="flex flex-col md:gap-16 gap-6 w-full md:w-1/3 z-10">
          {breweryData.slice(3).map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-center gap-4 max-w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <item.Icon size={80} color="#E1A32E" />
              <div className="text-start">
                <h6 className="font-semibold text-lg">{item.name}</h6>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
