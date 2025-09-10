"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function GridCarts() {
  return (
    <div className="w-full ">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="relative">
          <Image
            src="/image/categoryH8.png"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[768px] object-cover hidden lg:block group-hover:scale-110 transition duration-300 "
          />
          <Image
            src="/image/categoryH8.png"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[450px]  block lg:hidden object-cover group-hover:scale-110 transition duration-300"
          />

          <div className="absolute z-10 max-w-4xl right-2 left-2  flex flex-col items-center gap-6 lg:bottom-4 bottom-5  lg:left-8 mb-3 lg:items-start">
            <h1 className="md:text-2xl text-[16px] text-base font-semibold  uppercase text-white ">
              Baggy, Be You
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
        </div>
        <div className="relative">
          <Image
            src="/image/categoryH1.png"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[768px] object-cover hidden lg:block group-hover:scale-110 transition duration-300 "
          />
          <Image
            src="/image/categoryH1.png"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[450px] block lg:hidden object-cover group-hover:scale-110 transition duration-300"
          />

          <div className="absolute z-10 max-w-4xl right-2 left-2  flex flex-col items-center gap-6 lg:bottom-4 bottom-5  lg:left-8 mb-3 lg:items-start">
            <h1 className="md:text-2xl text-[16px] text-base font-semibold  uppercase text-white ">
              Awesome Cargo outfit
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
        </div>
        <div className="relative">
          <Image
            src="/image/categoryH9.png"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[768px] object-cover hidden lg:block group-hover:scale-110 transition duration-300 "
          />
          <Image
            src="/image/categoryH9.png"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[450px] block lg:hidden object-cover group-hover:scale-110 transition duration-300"
          />

          <div className="absolute z-10 max-w-4xl right-2 left-2  flex flex-col items-center gap-6 lg:bottom-4 bottom-5  lg:left-8 mb-3 lg:items-start">
            <h1 className="md:text-2xl text-[16px] text-base font-semibold  uppercase text-white ">
              Crafted In Denim
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
        </div>
        <div className="relative">
          <Image
            src="/image/categoryH3.jpg"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[768px] object-cover hidden lg:block group-hover:scale-110 transition duration-300 "
          />
          <Image
            src="/image/categoryH3.jpg"
            alt="beggy"
            width={400}
            height={400}
            className="w-full h-[450px] block lg:hidden object-cover group-hover:scale-110 transition duration-300"
          />

          <div className="absolute z-10 max-w-4xl right-2 left-2  flex flex-col items-center gap-6 lg:bottom-4 bottom-5  lg:left-8 mb-3 lg:items-start">
            <h1 className="md:text-2xl text-[16px] text-base font-semibold  uppercase text-white ">
              Fall lookbook
            </h1>
            <div className="flex gap-2 lg:mb-2">
              <Button variant={"customBtn"} className="">
                explore men
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
