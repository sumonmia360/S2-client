"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = {
  men: [
    { name: "Jeans", image: "/image/stylo1.png" },
    { name: "Pants", image: "/image/stylo1.png" },
    { name: "Jackets", image: "/image/stylo1.png" },
    { name: "Sweaters", image: "/image/stylo1.png" },
    { name: "T-Shirts & Polos", image: "/image/stylo1.png" },
  ],
  women: [
    { name: "Dresses", image: "/image/stylo1.png" },
    { name: "Tops", image: "/image/stylo1.png" },
    { name: "Jeans", image: "/image/stylo1.png" },
    // { name: "Jeans", image: "/image/stylo1.png" },
  ],
  kids: [
    { name: "Boys", image: "/image/stylo1.png" },
    { name: "Girls", image: "/image/stylo1.png" },
  ],
};

export default function ShopByCategory() {
  const [active, setActive] = useState<"men" | "women" | "kids">("men");

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">SHOP BY CATEGORY</h2>
        <div className="flex space-x-4 mb-6 text-sm font-semibold">
          {["men", "women", "kids"].map((cat) => (
            <button
              key={cat}
              className={`uppercase ${
                active === cat ? "text-black border-b-2 border-black" : "text-gray-500"
              }`}
              onClick={() => setActive(cat as "men" | "women" | "kids")}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile View (Slider) */}
        <div className="block md:hidden overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar"
            >
              {categories[active].map((cat) => (
                <div key={cat.name} className="flex-shrink-0 w-40">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={160}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <p className="mt-2 text-center font-semibold">{cat.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6">
          {categories[active].map((cat) => (
            <div key={cat.name} className="text-center">
              <Image
                src={cat.image}
                alt={cat.name}
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
              <p className="mt-2 font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
