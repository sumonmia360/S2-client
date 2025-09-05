// src/components/NowTrending.tsx
"use client";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Cargo Jeans (Dark black)",
    price: "৳1,450",
    front: "/image/demoImg-8.png",
    back: "/image/demoImg-7.png",
    slug: "product-one",
  },
  {
    id: 2,
    name: "Cargo Jeans (Light black)",
    price: "৳1,150",
    front: "/image/demoImg-8.png",
    back: "/image/demoImg-7.png",
    slug: "product-two",
  },
  {
    id: 3,
    name: "Baggy Jeans (Deep black)",
    price: "৳1,250",
    front: "/image/demoImg-8.png",
    back: "/image/demoImg-7.png",
    slug: "product-three",
  },
  {
    id: 4,
    name: "Baggy Jeans (Light black)",
    price: "৳1,250",
    front: "/image/demoImg-8.png",
    back: "/image/demoImg-7.png",
    slug: "product-four",
  },
  {
    id: 5,
    name: "Cargo Denim (6 Pockets,Deep Blue)",
    price: "৳1,090",
    front: "/image/demoImg-8.png",
    back: "/image/demoImg-7.png",
    slug: "product-four",
  },
];

export default function TrendingPro() {
  return (
    <section className="md:px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Now Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-1">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Wishlist Icon */}
            <button className="absolute top-2 right-2 z-10 p-2  rounded-full  hover:bg-white transition">
              <FiHeart className="text-black " />
            </button>

            {/* Link to product page */}
            <Link href={`/product/${product.slug}`}>
              <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer">
                {/* Front Image */}
                <Image
                  src={product.front}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Back Image */}
                <Image
                  src={product.back}
                  alt={product.name}
                  fill
                  className="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>

            {/* Product Info */}
            <div className="mt-3">
              <p className=" font-bold text-base">{product.price}</p>
              <p className="text-gray-500 text-base">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
