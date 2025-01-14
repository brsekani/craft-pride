"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/craftPrideslider4.jpg";
import { FaRegClock } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { GiBeerStein } from "react-icons/gi";
import { GiHops } from "react-icons/gi";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="w-full text-[#020504] px-4 md:px-6 flex flex-col md:flex-row items-center md:items-start max-w-[1400px] mx-auto py-10"
    >
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 w-full space-y-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <p className="text-lg text-[#E1A32E]">All you need is a beer</p>
          <h1 className="text-4xl font-bold uppercase mt-2">Contact us</h1>
        </div>

        {/* Working Hours */}
        <div className="flex flex-row gap-3 items-start">
          <FaRegClock size={28} color="#E1A32E" />
          <div>
            <p className="font-semibold text-lg">Working Hour</p>
            <p className="text-sm">Monday/Friday: 9:00 - 23:00</p>
            <p className="text-sm">Saturday: 10:00 - 21:00</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-row gap-3 items-start">
          <LuMapPin size={28} color="#E1A32E" />
          <div>
            <p className="font-semibold text-lg">Get in touch</p>
            <p className="text-sm">Phone: 09167687211</p>
            <p className="text-sm">Email: Lawaltemidayo06@gmail.com</p>
            <p className="text-sm">
              Address: 123 Craft Brewery Lane, Beertown, USA
            </p>
          </div>
        </div>

        <button className="sm:h-14 h-10 sm:max-w-[200px] max-w-[100px] w-full text-black text-lg flex items-center justify-center border border-black rounded-md p-[3px] ">
          <div className="bg-[#BE881D] w-full h-full hover:bg-[#9c6a1d] flex items-center justify-center rounded-md transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-sm sm:text-base">
            Contact Us
          </div>
        </button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="relative md:w-1/2 w-full mt-6 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Beer Icons */}
        <motion.div
          className="absolute hidden md:block top-4 left-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <GiHops size={100} className="text-[#BE881D] opacity-70" />
        </motion.div>
        <motion.div
          className="absolute hidden md:block bottom-4 right-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <GiHops size={100} className="text-[#BE881D] opacity-70" />
        </motion.div>
        <Image
          src={image1}
          alt="Contact Us"
          className="w-full h-auto md:rounded-tl-[30%] md:rounded-br-[30%] object-cover"
          priority
          placeholder="blur"
        />
      </motion.div>
    </section>
  );
}
