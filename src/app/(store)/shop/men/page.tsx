"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
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
              className="  "
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-60 lg:h-100   object-cover "
              />
              <p className="px-[2px] font-bold">৳{product.price}</p>
              <h2 className=" px-[2px] w-40 text-[14px] truncate md:text-[16px] md:w-full   mb-4">
                {product.name}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
