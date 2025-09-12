"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  discount: number;
  frontImage: string;
  backImage: string;
};

export default function MenShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="mx-auto  md:px-5  py-10">
      <h1 className="text-2xl font-bold mb-4 px-2 md:px-0 uppercase tracking-wide">
        Men's Items
      </h1>
      <div className=" px-2  md:px-0 text-[14px] mb-8 flex gap-1  tracking-wide">
        <Link
          href={"/shop/men"}
          className=" border border-black hover:bg-gray-100 hover:border-b-2 px-4 pb-[4px] pt-[2px]"
        >
          Baggy
        </Link>
        <Link
          href={"/shop/men"}
          className=" border border-black hover:bg-gray-100 hover:border-b-2 px-4 pb-[4px] pt-[2px]"
        >
          Cargos
        </Link>
        <Link
          href={"/shop/men"}
          className=" border border-black hover:bg-gray-100 hover:border-b-2 px-4 pb-[4px] pt-[2px]"
        >
          Jeans
        </Link>
        <Link
          href={"/shop/men"}
          className=" border border-black hover:bg-gray-100 hover:border-b-2 px-4 pb-[4px] pt-[2px]"
        >
          Denim
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {products.map((product) => (
            <Link
              href={`/shop/men/${product.id}`}
              key={product.id}
              className="group relative"
            >
              <Image
                src={product.frontImage}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-60 lg:h-100 object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={product.backImage}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-60 lg:h-100 object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <div className=" md:mb-10 hover:shadow-xl/20 p-1 hover:scale-101 cursor-pointer">
                <p className="px-[2px] font-bold text-[12px] ">
                  BDT <span>{product.price}</span>{" "}
                  <span
                    className={
                      product.discount ? "text-gray-500 line-through" : "hidden"
                    }
                  >
                    BDT 1,650
                  </span>{" "}
                  <span
                    className={product.discount ? "text-red-600" : "hidden"}
                  >
                    20% OFF
                  </span>
                </p>
                <h2 className="px-[2px] w-40  text-[12px] truncate md:text-[16px] md:w-full mb-4">
                  {product.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="text-gray-500 px-3">
        <h1 className="font-semibold mb-1 text-gray-600 text-[17px]">
          Men's Clothing
        </h1>
        <p className="mb-5">
          Upgrade your wardrobe with STYLOs premium collection of mens clothing,
          where craftsmanship and innovation come together. From durable staples
          to bold statement pieces, our designs are made for modern men who
          value quality and style. Whether you are dressing for casual outings
          or smart occasions, our clothing is built to keep up with your
          lifestyle and set you apart.
        </p>
        <h1 className="font-semibold mb-1 text-gray-600 text-[17px]">
          Explore Men s Jeans
        </h1>
        <p className="mb-5">
          STYLO s mens jeans are crafted with cutting-edge techniques and
          sustainable materials, offering a wide range of styles, from slim fits
          to relaxed cuts. Designed for durability and comfort, these jeans are
          perfect for both everyday wear and dressing up. Style them with a
          classic shirt or layer a jacket for an effortlessly versatile look
          that works day to night.
        </p>
        <h1 className="font-semibold mb-1 text-gray-600 text-[17px]">
          Essentials for Everyday Wear
        </h1>
        <p className="mb-5">
          STYLOs everyday wear collection offers the perfect blend of comfort
          and style. Explore men's t-shirts crafted from soft, high-quality
          fabrics that make them wardrobe essentials. Whether you prefer
          minimalist designs or bold prints, our range of t-shirts pairs
          effortlessly with denim, making them the ultimate go-to for casual
          days.
        </p>
      </div>
    </div>
  );
}
