"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [location, setLocation] = useState<"Dhaka" | "Outside" | "">("");
  const [deliveryCharge, setDeliveryCharge] = useState(70);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));

    const storedLocation = localStorage.getItem("deliveryLocation");
    const storedDelivery = localStorage.getItem("deliveryCharge");

    if (storedLocation) {
      setLocation(storedLocation as "Dhaka" | "Outside");
      if (storedDelivery) setDeliveryCharge(Number(storedDelivery));
    } else {
      setLocation("Dhaka");
      setDeliveryCharge(70);
      localStorage.setItem("deliveryLocation", "Dhaka");
      localStorage.setItem("deliveryCharge", "70");
    }
  }, []);

  const updateQuantity = (id: number, qty: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleLocationChange = (loc: "Dhaka" | "Outside") => {
    const charge = loc === "Dhaka" ? 70 : 130;
    setLocation(loc);
    setDeliveryCharge(charge);
    localStorage.setItem("deliveryLocation", loc);
    localStorage.setItem("deliveryCharge", charge.toString());
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalAmount = subtotal + deliveryCharge;

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-500 mb-4">Your cart is empty.</p>
        <Link
          href="/shop/men"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Shop Now
        </Link>
      </div>
    );

  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">
                    ৳{item.price} ({item.size})
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-16 border rounded px-2 py-1 text-center"
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-bold px-2 py-1 hover:text-red-700"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border p-4 rounded shadow-md h-max">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

          <p className="flex justify-between mb-2">
            <span>Total Items:</span> <span>{cart.length}</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Subtotal:</span> <span>৳{subtotal}</span>
          </p>

          <div className="mb-4">
            <p className="mb-2 font-semibold">Delivery Location:</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleLocationChange("Dhaka")}
                className={`px-3 py-1 border rounded ${
                  location === "Dhaka"
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Inside Dhaka (৳70)
              </button>
              <button
                onClick={() => handleLocationChange("Outside")}
                className={`px-3 py-1 border rounded ${
                  location === "Outside"
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Outside Dhaka (৳130)
              </button>
            </div>
          </div>

          <p className="flex justify-between mb-4 font-semibold">
            <span>Delivery Charge:</span> <span>৳{deliveryCharge}</span>
          </p>
          <p className="flex justify-between mb-4 font-bold text-lg">
            <span>Total Amount:</span> <span>৳{totalAmount}</span>
          </p>

          <Link
            href={location ? "/checkout" : "#"}
            onClick={() => {
              if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "InitiateCheckout", {
                  value: totalAmount,
                  currency: "BDT",
                });
              }
              window.dataLayer?.push({ event: "begin_checkout" });
            }}
            className={`block text-center py-3 rounded ${
              location
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
