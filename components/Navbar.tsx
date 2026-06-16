"use client";

import React, { useState } from "react";
import { products } from "../data/products";
import { Product } from "../data/products";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Safely cast products data list and filter items based on your typing
  const filteredItems = ((products as unknown as Product[]) || []).filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <nav style={{ 
        padding: "16px 32px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb" 
      }}>
        <h2 style={{ margin: 0, fontWeight: "bold" }}>ShopEase</h2>
        
        {/* Interactive Search Bar Box */}
        <input
          type="text"
          placeholder="Search for items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            width: "250px",
            outline: "none"
          }}
        />

        <div style={{ fontWeight: "500" }}>Cart</div>
      </nav>

      {/* Floating search dropdown panel */}
      {searchTerm && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          zIndex: 1000,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          maxHeight: "200px",
          overflowY: "auto",
          padding: "8px"
        }}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} style={{ padding: "8px", borderBottom: "1px solid #f3f4f6" }}>
                <strong style={{ color: "#111827" }}>{item.name}</strong>
                <span style={{ color: "#6b7280", marginLeft: "8px" }}>${item.price}</span>
              </div>
            ))
          ) : (
            <div style={{ padding: "8px", color: "#9ca3af", textAlign: "center" }}>
              No items found
            </div>
          )}
        </div>
      )}
    </div>
  );
}