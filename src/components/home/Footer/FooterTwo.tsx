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

export default function FooterTwo() {
  return (
    <div className=" border-t bg-gray-100 px-6 pt-3 pb-10 relative">
      <div className="w-full flex  justify-center items-center  mb-4 py-8 pl-2  md:hidden">
        <div className=" flex   items-center  justify-center gap-3 grayscale md:hidden  ">
          <Image
            className="rounded  h-full w-[50px]"
            src="/image/mastercard.jpg"
            alt="iDEAL"
            width={40}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/ae.jpg"
            alt="Klarna"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/visa.jpg"
            alt="PayPal"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/rocket.jpg"
            alt="American Express"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/nagad.jpg"
            alt="Mastercard"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/bkash.jpg"
            alt="Visa"
            width={50}
            height={24}
          />
        </div>
      </div>
      <div className="mx-auto flex justify-between items-center">
        {/* App Store + Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-1 flex-col items-center">
            <h1
              className={`${playfair.className} font-bold border p-3 text-lg lg:mt-3 rounded  bg-black text-white`}
            >
              STYLO
            </h1>
            <p className="text-[13px] text-gray-500">© 2025 STYLO.</p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className=" flex-wrap justify-center gap-4 grayscale hidden md:flex">
          <Image
            className="rounded"
            src="/image/mastercard.jpg"
            alt="iDEAL"
            width={40}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/ae.jpg"
            alt="Klarna"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/visa.jpg"
            alt="PayPal"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/rocket.jpg"
            alt="American Express"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/nagad.jpg"
            alt="Mastercard"
            width={50}
            height={24}
          />
          <Image
            className="rounded"
            src="/image/bkash.jpg"
            alt="Visa"
            width={50}
            height={24}
          />
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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm absolute font-semibold hidden bottom-3 right-6 lg:flex  justify-center  items-center gap-2 text-gray-500 hover:text-black"
      >
        Back to top <TiArrowSortedUp className="text-lg" />
      </button>
    </div>
  );
}
