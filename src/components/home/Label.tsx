"use client";

import { RiExchangeBoxFill } from "react-icons/ri";
import { SiCodefresh } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
const messages = [
  {
    text: "Exchange Within 3 Days",
    icon: <RiExchangeBoxFill className="w-4 h-4 text-sm"></RiExchangeBoxFill>,
  },
  {
    text: "Explore our Fall lookbook",
    icon: (
      <p className="text-[8px] rounded text-sm  bg-black text-white  ">STYLO</p>
    ),
  },
  {
    text: "Feel Fresh, Feel Stylo",
    icon: <SiCodefresh className="w-4 h-4 text-sm"></SiCodefresh>,
  },
];

import { useEffect, useState } from "react";

export default function Label() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      icon: <p className="text-[8px] rounded  bg-black text-white  ">STYLO</p>,
      text: "Explore our Fall lookbook",
    },
    {
      icon: <SiCodefresh className="w-4 h-4  " />,
      text: "Feel Fresh, Feel Stylo",
    },
    {
      icon: <RiExchangeBoxFill className="w-4 h-4" />,
      text: "Exchange Within 3 Days",
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
            <SiCodefresh className="w-4 h-4 " />
            Feel Fresh Feel Stylo
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
