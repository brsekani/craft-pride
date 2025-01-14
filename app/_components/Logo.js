import { GiHops } from "react-icons/gi";

export default function Logo() {
  return (
    <div className="flex items-center flex-col">
      {/* Icon with responsive size */}
      <GiHops className="text-[#000] md:text-4xl sm:text-3xl text-2xl" />

      {/* Logo text with responsive font size */}
      <h1 className="uppercase text-base sm:text-lg md:text-xl lg:text-2xl">
        Craft Pride
      </h1>
    </div>
  );
}
