import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import BreweryProcess from "./_components/BreweryProcess";
import OppositeScrollGallery from "./_components/OppositeScrollGallery";
import Offers from "./_components/Offers";
import BeerFlavours from "./_components/BeerFlavours";
import SpecialOffer from "./_components/SpecialOffer";
import TheTaste from "./_components/TheTaste";
import Quotes from "./_components/Quotes";
import NewsAndEvents from "./_components/NewsAndEvents";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center md:gap-20 gap-10">
      <Hero />
      <AboutUs />
      <BreweryProcess />
      <OppositeScrollGallery />
      <Offers />
      <BeerFlavours />
      <SpecialOffer />
      <TheTaste />
      {/* <Quotes /> */}
      <NewsAndEvents />
      <ContactUs />
      <Footer />
    </div>
  );
}
