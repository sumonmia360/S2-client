"use client";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Cargo Jeans (Dark black)",
    price: "1,320",
    discountPrice: 1320,
    discount: 20,
    front: "/image/cargoImg.png",
    back: "/image/img2a.jpg",
    slug: "product-one",
  },
  {
    id: 2,
    name: "Cargo Jeans (Light black)",
    price: "1,320",
    discountPrice: 1320,
    discount: 20,
    front: "/image/2.1.jpg",
    back: "/image/img2.jpg",
    slug: "product-two",
  },
  {
    id: 3,
    name: "Baggy Jeans (Deep black)",
    price: "1,250",
    front: "/image/imgB2.jpg",
    back: "/image/img2c.jpg",
    slug: "product-three",
  },
  {
    id: 4,
    name: "Baggy Jeans (Light black)",
    price: "1,250",
    front: "/image/demoImg-7.png",
    back: "/image/img3b.jpg",
    slug: "product-four",
  },
  {
    id: 5,
    name: "Cargo Denim (6 Pockets,Deep Blue)",
    price: "1,090",
    front: "/image/denimZ2.jpg",
    back: "/image/imgL2.jpg",
    slug: "product-four",
  },
  {
    id: 6,
    name: "Cargo Denim (6 Pockets,Deep Blue)",
    price: "1,090",
    front: "/image/denimZ3.jpg",
    back: "/image/imgL2.jpg",
    slug: "product-four",
  },
];

export default function TrendingPro() {
  return (
    <section className="md:px-6 px-2 py-10">
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
              <p className="text-[12px] font-semibold ml-1 ">
                BDT <span>{product.price}</span>{" "}
                <span
                  className={
                    product.discount ? "text-gray-500 line-through" : "hidden"
                  }
                >
                  BDT 1,650
                </span>{" "}
                <span className={product.discount ? "text-red-600" : "hidden"}>
                  20% OFF
                </span>
              </p>

              <p className="text-gray-500 text-[12px] ml-1">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
