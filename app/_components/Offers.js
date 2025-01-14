"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import beerbottle from "@/public/rb_1743.png";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";

export default function Offers() {
  const beers = [
    {
      title: "Golden Brew",
      description:
        "A rich, smooth lager crafted with the finest ingredients for a crisp finish.",
      price: "$15",
    },
    {
      title: "Amber Delight",
      description: "A full-bodied beer with hints of caramel and toasted malt.",
      price: "$18",
    },
    {
      title: "Hoppy Bliss",
      description:
        "An aromatic IPA with bold citrus and pine notes for the adventurous drinker.",
      price: "$20",
    },
    {
      title: "Dark Velvet",
      description:
        "A creamy stout with a hint of chocolate and roasted coffee flavors.",
      price: "$22",
    },
    {
      title: "Citrus Spark",
      description:
        "A refreshing wheat beer with a burst of orange and lemon zest.",
      price: "$17",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // Run on mount to set initial state
  }, [emblaApi]);

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section
      id="shop"
      className="w-full text-[#020504] px-4 md:px-6 flex flex-col max-w-[1400px] mx-auto"
    >
      <div className="flex items-center justify-center flex-col gap-4">
        <p className="text-base md:text-lg text-[#E1A32E]">Be Chilled</p>
        <h1 className="uppercase text-3xl md:text-4xl font-bold">
          WHAT WE OFFER
        </h1>
      </div>

      <div className="relative p-4 sm:p-6">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 h-[205px] mt-5">
            {beers.map((beer, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 max-w-[400px] w-full h-[180px] rounded-tr-[30%] rounded-bl-[30%] bg-white shadow-lg"
              >
                {/* Beer Bottle Image */}
                <div className="absolute -top-14 -left-8">
                  <Image
                    src={beerbottle}
                    alt={`${beer.title} Bottle`}
                    className="w-[160px] h-[300px] object-contain"
                  />
                </div>

                {/* Content Section */}
                <div className="absolute left-24 w-[65%] h-full py-4 flex flex-col justify-between">
                  {/* Title and Description */}
                  <div className="flex flex-col gap-1">
                    <h1 className="sm:text-3xl text-2xl font-bold text-[#E1A32E]">
                      {beer.title}
                    </h1>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {beer.description}
                    </p>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <p className="sm:text-3xl text-2xl font-semibold text-[#E1A32E]">
                      {beer.price}
                    </p>
                    <div className="flex gap-2">
                      {/* Like Button */}
                      <button
                        aria-label="Add to favorites"
                        className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-500 hover:shadow-md transition duration-300"
                      >
                        <CiHeart className="h-6 w-6 text-[#E1A32E] hover:text-gray-900" />
                      </button>

                      {/* Add to Cart Button */}
                      <button
                        aria-label="Add to cart"
                        className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-500 hover:shadow-md transition duration-300"
                      >
                        <TbShoppingCart className="h-6 w-6 text-[#E1A32E] hover:text-gray-900" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {/* Pagination with Navigation Buttons */}
        <div className="flex items-center justify-center mt-6 sm:gap-10 gap-6">
          {/* Left Button */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className=" text-white p-2 transition"
            aria-label="Previous Slide"
          >
            <FaChevronLeft color="#E1A32E" />
          </button>

          {/* Pagination */}
          <div className="flex justify-center space-x-2">
            {beers.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full ${
                  selectedIndex === index
                    ? "bg-[#E1A32E]"
                    : "bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="  text-white p-2  transition"
            aria-label="Next Slide"
          >
            <FaChevronRight color="#E1A32E" />
          </button>
        </div>
      </div>
    </section>
  );
}
