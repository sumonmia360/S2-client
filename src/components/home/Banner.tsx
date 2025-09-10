"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <div className="w-full  bg-white text-sm">
      <section className="relative w-full lg:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/image/bannerImgL1.jpg"
          // src="/image/mcBanner.png"
          alt="Hero Banner"
          fill
          className="object-cover hidden lg:block"
          priority
        />
        <div className="">
          <Image
            src="/image/bannerImgL1.jpg"
            alt="Hero Banner"
            width={400}
            height={450}
            className="w-full h-full  object-cover lg:hidden"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 " />
        <div className="absolute z-10 max-w-4xl px-6  flex flex-col items-center gap-5 lg:bottom-4 bottom-4 lg:left-8 mb-3 lg:items-start">
          <h1 className="lg:text-3xl text-xl font-bold uppercase text-white ">
            Beggy Focus
          </h1>

          <div className="flex gap-2 lg:mb-2">
            <Button variant={"customBtn"} className="">
              shop men
            </Button>
            <Button variant={"customBtn"} className="px-4">
              shop women
            </Button>
          </div>
        </div>
        {/* Content */}
      </section>
    </div>
  );
}
