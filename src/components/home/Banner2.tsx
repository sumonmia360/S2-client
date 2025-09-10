"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b text-sm">
      <section className="relative w-full  flex items-center justify-center overflow-hidden">
        {/* Background Image */}
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

        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="absolute z-10 max-w-4xl px-6  flex flex-col items-center gap-6 lg:bottom-4 bottom-5 lg:left-8 mb-3 lg:items-start">
          <h1 className="md:text-3xl text-base font-semibold  uppercase text-white ">
            New Cargo Release
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
      </section>
    </div>
  );
}
