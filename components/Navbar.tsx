"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 border-b">
      <Link href="/" className="text-2xl font-bold">
        ShopEase
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-600">
          Home
        </Link>

        <Link href="/cart" className="hover:text-gray-600">
          Cart ({mounted ? cart.length : 0})
        </Link>
      </div>
    </nav>
  );
}