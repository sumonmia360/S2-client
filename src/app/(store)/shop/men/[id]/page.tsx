"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Product = {
  id: number;
  name: string;
  price: number | string;
  frontImage: string;
  backImage: string;
  sizeChart: string;
  outOfStock: boolean;
};

const sizes = [
  "XS-28-29",
  "S-30-31",
  "M-32-33",
  "L-34-35",
  "XL-36-37",
  "2XL-38-39",
  "3XL-40-42",
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get("/products.json")
        .then((res) => {
          const foundProduct = res.data.find(
            (p: Product) => p.id === Number(id)
          );
          if (foundProduct) {
            setProduct(foundProduct);
            setActiveSize(null); // Reset size when changing products
          } else {
            console.error("Product not found.");
            setProduct(null);
          }
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
          setProduct(null);
        });
    }
  }, [id]);

  const addToCart = () => {
    if (!product || !activeSize) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex(
      (item: any) => item.id === product.id && item.size === activeSize
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price.toString().replace(/[^\d]/g, "")),
        image: product.frontImage,
        size: activeSize,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart"); // Navigate to cart page after adding
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className="px-3 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div className="w-full ">
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
            className="w-full h-full rounded-xl"
          >
            <SwiperSlide>
              <Image
                src={product.frontImage}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-[400px] md:h-[700px] object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={product.backImage}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-[400px] md:h-[800px] object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl font-semibold text-red-600 mb-4">
            ৳{product.price}
          </p>

          {/* Size Selection */}
          <h2 className="font-semibold mb-2 text-[16px]">Available Sizes</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-3 py-1 border rounded-md text-sm md:text-base ${
                  activeSize === size
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            disabled={!activeSize}
            className={`w-full md:w-auto px-6 py-3 text-sm md:text-base rounded-lg transition ${
              activeSize
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          {/* Product Description */}
          <div className="mt-8 ">
            <h2
              className={`${
                product.sizeChart ? "font-semibold text-[16px] mb-2" : "hidden"
              }`}
            >
              <div>
                <Image
                  src={product.sizeChart}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-[300px] h-[200px] md:h-[200px] object-cover rounded-xl"
                />
              </div>
              Product Description
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Upgrade your wardrobe with STYLO's premium collection of men's
              clothing. This {product.name} is crafted with durable materials,
              designed for comfort and long-lasting wear. Perfect for everyday
              styling and versatile enough to dress up or down...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
