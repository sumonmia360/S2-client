"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  

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
       <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/mcBanner.png" // তোমার banner image এখানে বসাও
        alt="Hero Banner"
        fill
        className="object-cover hidden lg:block"
        priority
      />
     <div>
       <Image
        src="/image/mcMobilBanner.png" // তোমার banner image এখানে বসাও
        alt="Hero Banner"
        fill
        className="object-cover lg:hidden"
        priority
      />
     </div>

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div
      
        className="absolute z-10 max-w-4xl px-6  flex flex-col items-center gap-6 lg:bottom-4 bottom-0 lg:left-8 mb-3 lg:items-start"
      >
        <h1 className="text-3xl font-bold uppercase text-white ">
          Beggy Focus
        </h1>
        
        <div className="flex gap-2 lg:mb-2">
          <Button
            variant={"customBtn"}
            className=""
           
          >
            shop men
          </Button>
          <Button
          variant={"customBtn"}
          className="px-4"

            
          >
            shop women
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
}
