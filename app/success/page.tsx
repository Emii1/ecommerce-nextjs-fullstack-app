"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { useWindowSize } from "react-use";

import { useCartStore } from "@/store/cart-store";

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  const { width, height } = useWindowSize();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br   px-4 relative overflow-hidden">
      <CheckCircleIcon className="h-20 w-20 text-green-400 mb-6 mx-auto" />

      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6 text-black-300">
        Thank you for your purchase. Your order is being processed.
      </p>

      <Link
        href="/products"
        className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
