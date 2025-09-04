"use client";

import Link from "next/link";

import Banner from "../components/home/Banner"
import Banner2 from "../components/home/Banner2"
import Category from "../components/home/Category"



export default function HomePage() {
  

  return (
    <div className="w-full bg-white border-b text-sm">     
      <nav className="w-full bg-white border-t border-b md:hidden">
      <div className="flex justify-center gap-10 py-3">
        <Link
          href="/men"
          className="text-base font-semibold hover:text-gray-600 transition-colors"
        >
          MEN
        </Link>
        <Link
          href="/women"
          className="text-base font-semibold hover:text-gray-600 transition-colors"
        >
          WOMEN
        </Link>
      </div>
    </nav>
   <Banner></Banner>
   <div className="w-full bg-[#f7f7f7] "><Category></Category></div>

   <Banner2></Banner2>

  

    </div>
  );
}
