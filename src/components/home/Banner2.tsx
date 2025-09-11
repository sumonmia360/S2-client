"use client";
import Image from "next/image";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b text-sm">
      <section className="relative w-full  flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Link href={`/shop/men`}>
          {" "}
          <Image
            src="/image/styloBanner2.png"
            alt="Hero Banner"
            fill
            className="object-cover hidden lg:block"
            priority
          />
          <div className="">
            <Image
              src="/image/storiesZ5.jpg"
              alt="Hero Banner"
              width={400}
              height={400}
              className="w-full h-[300px] "
            />
          </div>
        </Link>

        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="absolute z-10 max-w-4xl px-6  flex flex-col items-center gap-6 lg:bottom-4 bottom-5 lg:left-8 mb-3 lg:items-start">
          <h1 className="md:text-3xl text-base font-semibold  uppercase text-white ">
            New Cargo Release
          </h1>
          <div className="flex gap-2 lg:mb-2">
            <Link
              href={`/shop/men`}
              className="bg-white h-8 text-black pt-1 font-semibold text-sm rounded-none font-med border-2 border-white hover:text-white hover:bg-transparent px-6"
            >
              shop men
            </Link>
            <Link
              href={`/shop/women`}
              className="bg-white h-8 text-black pt-1 font-semibold text-sm rounded-none font-med border-2 border-white hover:text-white hover:bg-transparent px-6"
            >
              shop women
            </Link>
            <img
              src="/image/bannerImgL1.jpg"
              alt="Banner"
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
