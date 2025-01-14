import { Link } from "react-scroll";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#DD940E] text-[#222]">
      <h1 className="text-6xl font-bold mb-4">404: Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#222] text-[#DD940E] rounded-lg hover:bg-[#000] transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
