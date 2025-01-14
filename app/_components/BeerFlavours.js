"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BeerFlavours() {
  const BeerFlavours = [
    {
      title: "Doppel",
      price: "$12",
      description:
        "A rich, smooth lager crafted with the finest ingredients for a crisp finish.",
    },
    {
      title: "Golden Brew",
      price: "$15",
      description: "A crisp lager with a golden hue and refreshing taste.",
    },
    {
      title: "Amber Delight",
      price: "$18",
      description: "A full-bodied beer with hints of caramel and toasted malt.",
    },
    {
      title: "Hoppy Bliss",
      price: "$20",
      description: "An aromatic IPA with bold citrus and pine notes.",
    },
    {
      title: "Dark Velvet",
      price: "$22",
      description:
        "A creamy stout with a hint of chocolate and roasted coffee.",
    },
    {
      title: "Citrus Spark",
      price: "$17",
      description: "A refreshing wheat beer with a burst of orange zest.",
    },
    {
      title: "Mellow Malt",
      price: "$14",
      description: "A smooth malt beer with a balanced sweetness.",
    },
    {
      title: "Tropical Zest",
      price: "$19",
      description: "An exotic beer infused with tropical fruit flavors.",
    },
    {
      title: "Velvet Porter",
      price: "$21",
      description: "A dark porter with notes of vanilla and cocoa.",
    },
    {
      title: "Spicy Amber",
      price: "$16",
      description: "A spiced amber ale with hints of cinnamon and nutmeg.",
    },
    {
      title: "Wild Hops",
      price: "$23",
      description: "A robust beer with a bold hop-forward profile.",
    },
    {
      title: "Classic Pilsner",
      price: "$13",
      description: "A traditional pilsner with a crisp, clean finish.",
    },
  ];

  return (
    <section
      id="bar"
      className="w-full text-[#020504] px-4 md:px-6 flex flex-col gap-4 sm:gap-6 max-w-[1400px] mx-auto"
    >
      <div className="flex items-center justify-center flex-col gap-4">
        <p className="text-base md:text-lg text-[#E1A32E]">
          Taste the Adventure
        </p>
        <h1 className="uppercase text-3xl md:text-4xl font-bold">
          OUR BEER FLAVOUR
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BeerFlavours.map((beer, index) => (
          <motion.div
            key={index}
            className="p-4 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-[#E1A32E]">{beer.title}</h2>
              <p className="text-lg font-semibold text-gray-700">
                {beer.price}
              </p>
            </div>
            <hr className="border-t-2 border-yellow-500 mb-3" />
            <p className="text-sm text-gray-600">{beer.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
