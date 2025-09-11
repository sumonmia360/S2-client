"use client";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedUp } from "react-icons/ti";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const paymentLogos = [
  { src: "/images/mastercard.jpg", alt: "Mastercard" },
  { src: "/images/ae.jpg", alt: "American Express" },
  { src: "/images/visa.jpg", alt: "Visa" },
  { src: "/images/rocket.jpg", alt: "Rocket" },
  { src: "/images/nagad.jpg", alt: "Nagad" },
  { src: "/images/bkash.jpg", alt: "bKash" },
];

export default function FooterTwo() {
  return (
    <div className="border-t bg-gray-100 px-6 pt-3 pb-10 relative">
      {/* Mobile Payment Icons */}
      <div className="w-full flex justify-center items-center mb-4 py-8 pl-2 md:hidden">
        <div className="flex items-center justify-center gap-3 grayscale md:hidden">
          {paymentLogos.map((logo, i) => (
            <Image
              key={i}
              className="rounded w-[50px] h-auto"
              src={logo.src}
              alt={logo.alt}
              width={200} // keep large intrinsic size
              height={100} // maintain aspect ratio
            />
          ))}
        </div>
      </div>

      <div className="mx-auto flex justify-between items-center">
        {/* Logo + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-1 flex-col items-center">
            <h1
              className={`${playfair.className} font-bold border p-3 text-lg lg:mt-3 rounded bg-black text-white`}
            >
              STYLO
            </h1>
            <p className="text-[13px] text-gray-500">© 2025 STYLO.</p>
          </div>
        </div>

        {/* Payment Icons (Desktop) */}
        <div className="flex-wrap justify-center gap-4 grayscale hidden md:flex">
          {paymentLogos.map((logo, i) => (
            <Image
              key={i}
              className="rounded w-[50px] h-auto"
              src={logo.src}
              alt={logo.alt}
              width={200} // big intrinsic size
              height={100}
            />
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 text-gray-800 text-xl">
          <Link href="">
            <FaFacebookSquare className="cursor-pointer hover:text-black" />
          </Link>
          <Link href="">
            <FaYoutube className="cursor-pointer hover:text-black" />
          </Link>
          <Link href="">
            <FaInstagram className="cursor-pointer hover:text-black" />
          </Link>
          <Link href="">
            <FaTiktok className="cursor-pointer hover:text-black" />
          </Link>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm absolute font-semibold hidden bottom-3 right-6 lg:flex justify-center items-center gap-2 text-gray-500 hover:text-black"
      >
        Back to top <TiArrowSortedUp className="text-lg" />
      </button>
    </div>
  );
}
