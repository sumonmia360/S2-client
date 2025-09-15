"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl font-bold mb-4">Wishlist Coming Soon</h1>
        <p className="text-lg mb-6">
          We're working hard to bring you this feature. Stay tuned!
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 border border-black font-semibold hover:bg-black hover:text-white transition-colors"
        >
          Go to Home
        </button>
      </motion.div>
    </div>
  );
}
