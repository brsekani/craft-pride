import Marquee from "react-fast-marquee";
import Image from "next/image";
import img1 from "@/public/aboutUs1.jpg";
import img2 from "@/public/aboutUs2.jpg";
import craftPrideslider1 from "@/public/craftPrideslider1.jpg";
import craftPrideslider2 from "@/public/craftPrideslider2.jpg";
import craftPrideslider3 from "@/public/craftPrideslider3.jpg";
import craftPrideslider4 from "@/public/craftPrideslider4.jpg";
import craftPrideslider5 from "@/public/craftPrideslider5.jpg";
import craftPrideslider6 from "@/public/craftPrideslider6.jpg";

const images = [
  craftPrideslider1,
  craftPrideslider2,
  craftPrideslider3,
  craftPrideslider4,
  craftPrideslider5,
  craftPrideslider6,
  img1,
  img2,
  img1,
];

export default function InfiniteScrollGallery() {
  return (
    <div className="w-full text-[#020504] flex flex-col  max-w-[1400px] mx-auto">
      <Marquee speed={50} direction="left" gradient={false}>
        {images.map((image, index) => (
          <div key={index} className="w-full sm:h-[300px] h-[150px]  ">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
              placeholder="blur"
              //   priority
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>

      <Marquee speed={50} direction="right" gradient={false}>
        {images.map((image, index) => (
          <div key={index} className="w-full sm:h-[300px] h-[150px] ">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
              placeholder="blur"
              //   priority
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
