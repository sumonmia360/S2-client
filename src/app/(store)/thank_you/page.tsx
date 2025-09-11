"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
};

type Order = {
  name: string;
  phone: string;
  address: string;
  cart: CartItem[];
  deliveryCharge: number;
  totalPrice: number;
};

export default function ThankYouPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("lastOrder");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
      localStorage.removeItem("lastOrder"); // clear after reading
    }
  }, []);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>
        <Link
          href="/shop/men"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Thank You!
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Your order has been placed successfully. Here are your order details:
      </p>

      <div className="mb-6 border p-4 rounded shadow-md">
        <h2 className="font-semibold text-lg mb-2">Customer Details</h2>
        <p>
          <strong>Name:</strong> {order.name}
        </p>
        <p>
          <strong>Phone:</strong> {order.phone}
        </p>
        <p>
          <strong>Shipping Address:</strong> {order.address}
        </p>
      </div>

      <div className="mb-6 border p-4 rounded shadow-md">
        <h2 className="font-semibold text-lg mb-2">Order Summary</h2>
        {order.cart.map((item) => (
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
        <p className="flex justify-between mt-4 font-semibold">
          <span>Delivery Charge:</span> <span>৳{order.deliveryCharge}</span>
        </p>
        <p className="flex justify-between mt-2 font-bold text-lg">
          <span>Total Amount:</span> <span>৳{order.totalPrice}</span>
        </p>
      </div>

      <Link
        href="/shop/men"
        className="block text-center px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
