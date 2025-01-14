"use client";

import Image from "next/image";
import heroImage from "@/public/heroImage1.jpg";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { GiHops } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Hero() {
  // Variants for the text and button animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="w-full text-[#020504] px-6 flex flex-col md:flex-row max-w-[1400px] mx-auto relative"
      initial="hidden"
      animate="visible"
    >
      {/* Animated Hops Icons */}
      <motion.div
        className="absolute hidden md:block top-4 left-4 text-[#BE881D] opacity-70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <GiHops size={100} className="animate-bounce" />
      </motion.div>
      <motion.div
        className="absolute hidden md:block bottom-4 right-0 text-[#BE881D] opacity-70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <GiHops size={100} className="animate-bounce" />
      </motion.div>

      {/* Hero Image */}
      <div className="relative w-full max-w-full md:h-[85vh] h-[90vh] overflow-hidden md:rounded-tl-[30%] md:rounded-br-[30%] md:rounded-none">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <Image
            src={heroImage}
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
            loading="eager"
            placeholder="blur"
          />
        </div>

        {/* Overlay Text inside the image */}
        <motion.div
          className="absolute bottom-14 left-1 flex flex-col md:gap-3 gap-2 text-white px-6 md:px-12 py-4 md:w-[50%] w-full"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg md:text-xl text-[#BE881D]">
            True spirited taste
          </p>

          <h1 className="text-xl md:text-5xl font-semibold md:leading-tight leading-snug">
            The Perfect Beer For Every Occasion
          </h1>

          {/* CTA Button with Hover Effect */}
          <motion.div
            variants={textVariants}
            whileHover="hover"
            className="flex items-center justify-between md:mt-4 mt-0 px-8 py-3 bg-[#BE881D] cursor-pointer md:h-14 h-12 text-white font-bold rounded-md shadow-lg w-max md:w-auto"
          >
            <Link href="#cta-section" className="flex items-center gap-2">
              <p>Discover More</p>
              <IoArrowForward size={25} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
