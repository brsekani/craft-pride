"use client";
import { useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quotes = [
  {
    text: "Good people drink good beer. Whether you're a philosopher, an artist, or just a person in need of refreshment, beer is the common denominator that brings us all together. There's a joy in its simplicity, and a complexity in its creation that mirrors life itself.",
    author: "Hunter S. Thompson",
  },
  {
    text: "Beer is proof that God loves us and wants us to be happy.",
    author: "Benjamin Franklin",
  },
  {
    text: "Without question, the greatest invention in the history of mankind is beer. Oh, I grant you that the wheel was also a fine invention, but the wheel does not go nearly as well with pizza.",
    author: "Dave Barry",
  },
  {
    text: "Beer brings people together in a way that no other beverage can. It is the social glue of our gatherings, the celebratory drink of life’s milestones, and a symbol of our shared humanity. When we brew, we connect to an ancient tradition; when we drink, we celebrate the moment.",
    author: "Charlie Papazian",
  },
];

export default function Quotes() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    fade: true, // Use fade transition
    dots: false, // Show dots below the carousel
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 1 slide on tablets and smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
    ],
  };

  return (
    <div className="w-full text-[rgb(2,5,4)] px-6 flex flex-row justify-between items-center max-w-[1400px] mx-auto">
      <FaAngleLeft
        onClick={() => sliderRef.current.slickPrev()} // Use sliderRef to call slickPrev
        size={35}
        className="text-[#d19227] cursor-pointer"
      />

      <div className="w-[80%]">
        <Slider ref={sliderRef} {...settings}>
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-6 text-center p-6 mx-4" // Added margin (gap between slides)
            >
              <h1 className="text-6xl text-[#E1A32E] font-bold">&quot;</h1>
              <p className="text-lg md:text-xl italic leading-relaxed">
                {quote.text}
              </p>
              <h1 className="text-2xl text-[#E1A32E] font-semibold">
                {quote.author}
              </h1>
            </div>
          ))}
        </Slider>
      </div>

      <FaAngleRight
        onClick={() => sliderRef.current.slickNext()} // Use sliderRef to call slickNext
        size={35}
        className="text-[#d19227] cursor-pointer"
      />
    </div>
  );
}
