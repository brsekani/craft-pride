import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

// Load Merriweather font with specific weights
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights
});

export const metadata = {
  title: "Craft Pride",
  description: "The best brew in the heart United state of America",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} antialiased bg-[#F6F0E3]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
