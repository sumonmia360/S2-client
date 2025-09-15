"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));

    const storedDelivery = localStorage.getItem("deliveryCharge");
    if (storedDelivery) setDeliveryCharge(Number(storedDelivery));
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalPrice = subtotal + deliveryCharge;

  const placeOrder = async () => {
    if (!name || !phone || !address) return;

    try {
      const res = await fetch("https://api.stylolifestyle.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          address,
          cart,
          deliveryCharge,
          totalPrice,
        }),
      });

      if (!res.ok) {
        console.error("❌ Failed to save order:", await res.text());
        return;
      }

      localStorage.setItem(
        "lastOrder",
        JSON.stringify({
          name,
          phone,
          address,
          cart,
          deliveryCharge,
          totalPrice,
        })
      );

      localStorage.removeItem("cart");
      localStorage.removeItem("deliveryCharge");

      // ✅ Track purchase with Facebook Pixel & GTM
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Purchase", {
          value: totalPrice,
          currency: "BDT",
        });
      }
      window.dataLayer?.push({
        event: "purchase",
        value: totalPrice,
        currency: "BDT",
      });

      router.push("/thank_you");
    } catch (error) {
      console.error("❌ Failed to place order:", error);
    }
  };

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-500 mb-4">Your cart is empty.</p>
      </div>
    );

  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold mb-4">Shipping Details</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
            <textarea
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
        </div>

        <div className="border p-4 rounded shadow-md">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between mb-2"
            >
              <span>
                {item.name} ({item.size}) x {item.quantity}
              </span>
              <span>৳{item.price * item.quantity}</span>
            </div>
          ))}

          <p className="flex justify-between mb-2">
            <span>Subtotal:</span> <span>৳{subtotal}</span>
          </p>
          <p className="flex justify-between mb-4">
            <span>Delivery Charge:</span> <span>৳{deliveryCharge}</span>
          </p>
          <p className="flex justify-between mt-4 font-bold text-lg">
            <span>Total:</span> <span>৳{totalPrice}</span>
          </p>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
