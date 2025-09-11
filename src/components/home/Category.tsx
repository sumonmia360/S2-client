"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// categroy images with links
const categories = {
  MEN: [
    {
      name: "Baggey",
      img: "/image/shopByL5.jpg",
      link: "/shop/men/",
    },
    {
      name: "Cargo",
      img: "/image/shopByL9.png",
      link: "/shop/men/",
    },
    {
      name: "Denim",
      img: "/image/shopByL8.png",
      link: "/shop/men/",
    },
    {
      name: "Classy",
      img: "/image/shopByL4.png",
      link: "/shop/men/",
    },
    {
      name: "Trendy",
      img: "/image/shopBy1.jpg",
      link: "/shop/men/",
    },
  ],
  WOMEN: [
    {
      name: "Dresses",
      img: "/image/womensImg.png",
      link: "/#",
    },
    {
      name: "Tops",
      img: "/image/womensImg.png",
      link: "/#",
    },
    {
      name: "Jeans",
      img: "/image/womensImg.png",
      link: "/#",
    },
    {
      name: "Outerwear1",
      img: "/image/womensImg.png",
      link: "/#",
    },
    // { name: "Outerwear", img: "/image/womensImg.png", link: "/shop/women/outerwear" },
  ],
  KIDS: [
    {
      name: "Boys",
      img: "/image/kidsImg.png",
      link: "/#",
    },
    {
      name: "Girls",
      img: "/image/kidsImg.png",
      link: "/#",
    },
  ],
};

// Main function
export default function Category() {
  const [activeTab, setActiveTab] = useState<"MEN" | "WOMEN" | "KIDS">("MEN");
  // console.log(categories.KIDS[0].img);
  // categories[activeTab].map((cat) => (console.log(cat.img)))

  return (
    <div>
      <div className="w-full pb-10 max-w-7xl mx-auto flex flex-col  gap-3 pt-5 pl-4 lg:px-0">
        {/* Category heading */}
        <h1 className="text-[24px] font-bold uppercase">Shop by category</h1>
        <nav className="w-full flex gap-5   items-center ">
          <p className="text-gray-700">Filter by:</p>
          {(["MEN", "WOMEN", "KIDS"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "font-bold underline underline-offset-3 decoration-2 hover:underline   hover:underline-offset-3"
                  : "font-bold hover:underline  decoration-2 hover:underline-offset-3 "
              } transition`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Desktop View (Grid) */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 justify-center items-center lg:grid-cols-5 gap-8"
            >
              {categories[activeTab].map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.link}
                  className="relative group cursor-pointer overflow-hidden shadow hover:shadow-lg transition"
                >
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute text-[18px]  bottom-3 left-5/12  text-white font-bold  drop-shadow-lg">
                    {cat.name}
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Mobile View (Slider) */}
        <div className="w-full">
          <div className="block  lg:hidden overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar"
              >
                {categories[activeTab].map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.link}
                    className="flex-shrink-0 w-40 relative"
                  >
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      width={160}
                      height={200}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className=" absolute text-white  bottom-2 left-5/12  text-[12px] drop-shadow-lg font-bold">
                      {cat.name}
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
