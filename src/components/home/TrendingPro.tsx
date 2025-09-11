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
    front: "https://stylolifestyle.com/images/cargoImg.png",
    back: "https://stylolifestyle.com/images/img2a.jpg",
    slug: "product-one",
  },
  {
    id: 2,
    name: "Cargo Jeans (Light black)",
    price: "৳1,450",
    front: "https://stylolifestyle.com/images/2.1.jpg",
    back: "https://stylolifestyle.com/images/img2.jpg",
    slug: "product-two",
  },
  {
    id: 3,
    name: "Baggy Jeans (Deep black)",
    price: "৳1,250",
    front: "https://stylolifestyle.com/images/imgB2.jpg",
    back: "https://stylolifestyle.com/images/img2c.jpg",
    slug: "product-three",
  },
  {
    id: 4,
    name: "Baggy Jeans (Light black)",
    price: "৳1,250",
    front: "https://stylolifestyle.com/images/demoImg-7.png",
    back: "https://stylolifestyle.com/images/img3b.jpg",
    slug: "product-four",
  },
  {
    id: 5,
    name: "Cargo Denim (6 Pockets,Deep Blue)",
    price: "৳1,090",
    front: "https://stylolifestyle.com/images/denimZ2.jpg",
    back: "https://stylolifestyle.com/images/imgL2.jpg",
    slug: "product-four",
  },
  {
    id: 6,
    name: "Cargo Denim (6 Pockets,Deep Blue)",
    price: "৳1,090",
    front: "https://stylolifestyle.com/images/denimZ3.jpg",
    back: "https://stylolifestyle.com/images/imgL2.jpg",
    slug: "product-four",
  },
];

export default function TrendingPro() {
  return (
    <section className="md:px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Now Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-1">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Wishlist Icon */}
            <button className="absolute top-1 right-2 z-10 p-2  rounded-full  hover:bg-white transition">
              <FiHeart className="text-black " />
            </button>

            {/* Link to product page */}
            <Link href={`/shop/men`}>
              {/* <Link href={`/product/${product.slug}`}> */}
              <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer">
                {/* Front Image */}
                <Image
                  src={product.front}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Back Image */}
                <Image
                  src={product.back}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
                  className="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>

            {/* Product Info */}
            <div className="mt-3">
              <p className=" font-bold text-[14px]">{product.price}</p>
              <p className="text-gray-500 text-[12px]">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
