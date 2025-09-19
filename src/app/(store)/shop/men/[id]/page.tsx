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
  outOfStock?: boolean;
  availableSizes?: string[];
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
  const [error, setError] = useState<string>(""); // ✅ NEW STATE FOR ERROR

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
            setActiveSize(null);
            setError(""); // clear error on new product
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
    if (!activeSize) {
      setError("⚠️ Please select a size first!");
      return;
    }

    if (!product) return;

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
    router.push("/cart");
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
        <div className="w-full">
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
                className="w-full h-[450px] md:h-[700px] object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={product.backImage}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-[450px] md:h-[800px] object-cover rounded-xl"
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
          <div className="flex flex-wrap gap-2 mb-2">
            {sizes.map((size) => {
              const inStock =
                product.availableSizes?.length === 0
                  ? false
                  : product.availableSizes?.includes(size);

              return (
                <button
                  key={size}
                  disabled={!inStock}
                  onClick={() => {
                    setActiveSize(size);
                    setError(""); // ✅ clear error when selecting size
                  }}
                  className={`px-3 py-1 border rounded-md text-sm md:text-base transition
                    ${
                      !inStock
                        ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed line-through"
                        : activeSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-400 text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={addToCart}
            className={`w-full md:w-auto px-6 py-3 text-sm md:text-base rounded-lg transition 
              ${
                activeSize
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-black text-white"
              }`}
          >
            Add to Cart
          </button>

          {/* Product Description */}
          <div className="mt-8">
            {product.sizeChart && (
              <div className="mb-4">
                <Image
                  src={product.sizeChart}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-[300px] h-[200px] md:h-[200px] object-cover rounded-xl"
                />
              </div>
            )}
            <h2 className="font-semibold text-[16px] mb-2">
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
