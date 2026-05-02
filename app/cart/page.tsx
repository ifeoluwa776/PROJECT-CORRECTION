"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-xl"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}