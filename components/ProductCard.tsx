"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const getProductEmoji = (id: number) => {
    if (id === 1) return "🎧";
    if (id === 2) return "👟";
    if (id === 3) return "⌚";
    return "🛍️";
  };

  const { addToCart } = useCart();

  

  return (
    <div style={{
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
      position: "relative"
    }}>
      
      <span style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        fontSize: "10px",
        fontWeight: "700",
        backgroundColor: product.inStock ? "#f0fdf4" : "#fef2f2",
        color: product.inStock ? "#16a34a" : "#dc2626",
        padding: "4px 8px",
        borderRadius: "4px",
        textTransform: "uppercase",
        zIndex: 10
      }}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>

      {/* Replaced broken img tag with a beautiful local vector text element */}
      <div style={{ 
        width: "100%", 
        height: "140px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        margin: "16px 0 12px 0",
        backgroundColor: "#f9fafb",
        borderRadius: "6px",
        fontSize: "64px",
        userSelect: "none"
      }}>
        {getProductEmoji(product.id)}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
                   <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937", margin: "0 0 4px 0", lineHeight: "1.4" }}>
          <a href={`/product/${product.id}`} style={{ color: "#1f2937", textDecoration: "none" }} onMouseOver={(e) => (e.currentTarget.style.color = "#f68b1e")} onMouseOut={(e) => (e.currentTarget.style.color = "#1f2937")}>
            {product.title}
          </a>
        </h3>

          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 12px 0", fontWeight: "500" }}>
            ⭐ {product.rating} • {product.category}
          </p>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px", fontWeight: "800", color: "#111827" }}>${product.price.toFixed(2)}</span>
            <span style={{ fontSize: "12px", color: "#9ca3af", textDecoration: "line-through" }}>${(product.price * 1.2).toFixed(2)}</span>
          </div>

          <button 
  onClick={() => addToCart(product)} 
  disabled={!product.inStock}
>
  {product.inStock ? "Add to Cart" : "Sold Out"}
</button>

        </div>
      </div>
      
    </div>
  );
}
