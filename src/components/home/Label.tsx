"use client";

import { BsBoxSeam } from "react-icons/bs";
import { PiTruckThin } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
const messages = [
  {
    text: "Free 3-day returns on full-price orders",
    icon: <BsBoxSeam className="w-4 h-3 text-sm"></BsBoxSeam>,
  },
  {
    text: "Explore our Fall lookbook",
    icon: (
      <p className="text-[8px] rounded text-sm  bg-black text-white  ">STYLO</p>
    ),
  },
  {
    text: "Free shipping",
    icon: <PiTruckThin className="w-4 h-4 stroke-2 text-sm"></PiTruckThin>,
  },
];

import { useEffect, useState } from "react";

export default function Label() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // প্রতি 5 সেকেন্ড পর পরিবর্তন
    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      icon: <p className="text-[8px] rounded  bg-black text-white  ">STYLO</p>,
      text: "Explore our Fall lookbook",
    },
    {
      icon: <PiTruckThin className="w-4 h-4 stroke-2 " />,
      text: "Free shipping ",
    },
    {
      icon: <BsBoxSeam className="w-4 h-3" />,
      text: "Free 3-day returns on full-price orders",
    },
  ];

  return (
    <div className="w-full text-sm bg-white text-black ">
      <div className="max-w-7xl mx-auto h-10 md:flex items-center border-b justify-center gap-25 py-2 hidden ">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 md:hidden lg:flex  hover:text-black transition"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}

        <div className="md:flex hidden lg:hidden items-center border-b gap-30  hover:text-black transition  ">
          <p className="flex gap-2 items-center">
            {" "}
            <span className="text-[8px] rounded  bg-black text-white">
              STYLO
            </span>
            Explore our Fall lookbook
          </p>

          <p className="flex gap-2 items-center">
            <PiTruckThin className="w-4 h-4 stroke-2" />
            Free shipping
          </p>
        </div>
      </div>

      <div className="relative h-10 flex md:hidden items-center border-b ">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full flex items-center justify-center gap-2"
          >
            <span>{messages[index].icon}</span>
            <p className="text-sm ">{messages[index].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
