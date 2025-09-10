"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewArrivalComingSoon() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white text-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-2xl"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          New Arrival Coming Soon
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 px-2">
          Our New Arrivals are not ready yet. We’re preparing something fresh
          and stylish — stay tuned!
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-block w-full sm:w-auto px-6 py-2 border border-black rounded-md hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
