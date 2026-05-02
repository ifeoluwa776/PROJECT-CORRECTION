"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="py-10 text-center">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-10 items-start">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[450px] object-cover"
        />
      </div>

      <div>
        <p className="text-sm uppercase text-gray-500">{product.category}</p>

        <h1 className="text-4xl font-bold mt-2">{product.title}</h1>

        <p className="text-yellow-600 mt-3">★ {product.rating}</p>

        <p className="text-gray-600 mt-5 leading-7">{product.description}</p>

        <p className="text-3xl font-bold mt-6">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}