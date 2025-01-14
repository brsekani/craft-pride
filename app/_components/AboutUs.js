"use client";

import Image from "next/image";
import aboutImage1 from "@/public/aboutUs1.jpg";
import aboutImage2 from "@/public/aboutUs2.jpg";
import { GiHops } from "react-icons/gi";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="about"
      className="w-full text-[#020504] px-6 flex flex-col md:flex-row max-w-[1400px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when in view
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-[40%] flex flex-col md:gap-3 gap-2 mb-8 md:mb-0"
        variants={textVariants}
      >
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
        <motion.button
          className="h-14 w-[200px] text-black text-lg flex items-center justify-center border border-black rounded-md p-[3px]"
          variants={buttonVariants}
          whileHover="hover"
        >
          <div className="bg-[#BE881D] w-full h-full hover:bg-[#9c6a1d] flex items-center justify-center rounded-md transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Explore
          </div>
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        variants={imageVariants}
      >
        <GiHops
          size={100}
          className="absolute hidden md:block top-4 left-4 text-[#BE881D] animate-bounce opacity-70 z-10"
        />
        <motion.div
          className="w-full h-full relative rounded-tl-[30%] rounded-br-[30%] overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src={aboutImage1}
            alt="About Us Image 1"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            priority
            loading="eager"
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          className="w-full h-full relative rounded-tl-[30%] rounded-br-[30%] overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src={aboutImage2}
            alt="About Us Image 2"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <GiHops
          size={100}
          className="absolute hidden md:block bottom-4 right-0 text-[#BE881D] animate-bounce opacity-70 z-10"
        />
      </motion.div>
    </motion.section>
  );
}
