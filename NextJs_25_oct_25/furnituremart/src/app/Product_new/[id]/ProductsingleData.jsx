import React from "react";

export default function ProductsingleData({ data }) {

  // ✅ CHANGE: first render safety
  if (!data) return <h2>Loading...</h2>;

  const { title, thumbnail, description, price } = data;

  return (
    <div className="border p-5 rounded-lg shadow-md">
      {/* ✅ CHANGE: alt me dynamic title */}
      <img src={thumbnail} alt={title} className="w-[300px]" />

      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-xl text-green-600">₹ {price}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}