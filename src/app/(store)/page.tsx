"use client";

import Link from "next/link";

import Banner from "../../components/home/Banner";
import Banner2 from "../../components/home/Banner2";
import Category from "../../components/home/Category";
import GridCarts from "../../components/home/GridCarts";
import TrendingPro from "../../components/home/TrendingPro";
import StoriesSection from "@/components/home/StoriesSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white border-b text-sm">
      <nav className="w-full bg-white border-t border-b md:hidden">
        <div className="flex justify-center gap-10 py-3">
          <Link href="/shop/men" className="  font-extrabold ">
            MEN
          </Link>
          <Link href="/shop/women" className="  font-extrabold ">
            WOMEN
          </Link>
        </div>
      </nav>
      <Banner></Banner>
      <div className="w-full bg-[#f7f7f7] ">
        <Category></Category>
      </div>
      <Banner2></Banner2>
      <GridCarts></GridCarts>
      <TrendingPro></TrendingPro>
      <StoriesSection></StoriesSection>
    </div>
  );
}
