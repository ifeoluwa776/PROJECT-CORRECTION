'use client';
import React from "react";
import Link from "next/link";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const resolvedParams = React.use(params);
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));
  const { addToCart } = useCart();

  if (!product) { notFound(); }
  const fakeOriginalPrice = product.price * 1.35;

  return (
    <div style={{ backgroundColor: "#f1f1f2", minHeight: "100vh", padding: "24px 16px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "left" }}>
        
        <Link href="/" style={{ fontSize: "12px", fontWeight: "bold", color: "#f68b1e", textDecoration: "none", textTransform: "uppercase" }}>
          ← Back to Marketplace
        </Link>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", backgroundColor: "#ffffff", padding: "24px", borderRadius: "4px", border: "1px solid #e5e7eb", marginTop: "12px" }}>
          
          {/* Image Box */}
          <div style={{ flex: "1", minWidth: "300px", backgroundColor: "#ffffff", border: "1px solid #f1f1f2", borderRadius: "4px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "1/1" }}>
            <img src={product.image} alt={product.title} style={{ maxWidth: "100%", maxHeight: "350px", objectFit: "contain" }} />
          </div>

          {/* Specs Box */}
          <div style={{ flex: "1", minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: "10px", fontWeight: "bold", color: "#ffffff", backgroundColor: "#75757a", padding: "2px 6px", borderRadius: "2px", alignSelf: "start", textTransform: "uppercase" }}>
              {product.category}
            </span>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#282828" , margin: "8px 0" }}>{product.title}</h1>
            
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "16px" }}>
              <span style={{ color: "#f68b1e" }}>★</span>
              <span style={{ fontSize: "12px", color: "#75757a" }}>{product.rating} / 5 Ratings</span>
            </div>

            {/* Pricing Box */}
            <div style={{ backgroundColor: "#fdf8f4", padding: "16px", borderRadius: "4px", border: "1px solid #ffe8d6", marginBottom: "20px" }}>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "#282828" }}>${product.price.toFixed(2)}</div>
              <div style={{ display: "flex", gap: "8px", fontSize: "12px", color: "#75757a", marginTop: "4px" }}>
                <span style={{ textDecoration: "line-through" }}>${fakeOriginalPrice.toFixed(2)}</span>
                <span style={{ color: "#f68b1e", fontWeight: "bold" }}>-25%</span>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "12px", color: "#75757a", margin: "0 0 4px 0", textTransform: "uppercase" }}>Description</h4>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5", margin: 0 }}>{product.description}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: product.inStock ? "#2e7d32" : "#c62828" }}></span>
              <span style={{ fontSize: "11px", fontWeight: "bold", color: "#555" }}>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</span>
            </div>

            <button 
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              style={{ width: "100%", padding: "14px 0", borderRadius: "4px", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", cursor: product.inStock ? "pointer" : "not-allowed", border: "none", color: "#ffffff", backgroundColor: product.inStock ? "#f68b1e" : "#e5e7eb" }}
            >
              {product.inStock ? "🛒 Add to Cart" : "Unavailable"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}




