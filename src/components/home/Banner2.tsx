"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  

  return (
    <div className="w-full bg-white border-b text-sm">     
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/styloBanner2.png" 
        alt="Hero Banner"
        fill
        className="object-cover hidden lg:block"
        priority
      />
     <div className="py-3">
       <Image
        src="/image/styloBanner2.png" 
        alt="Hero Banner"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 33vw"
        className="lg:hidden"
       
      />
     </div>

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div
      
        className="absolute z-10 max-w-4xl px-6  flex flex-col items-center gap-6 lg:bottom-4 bottom-0 lg:left-8 mb-3 lg:items-start"
      >
        <h1 className="text-3xl font-semibold  uppercase text-white ">
          New Cargo Release
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
