"use client";
import React, { useState } from "react";
import Stripe from "stripe";
import ProductCard from "./product-card";
interface Props {
  products: Stripe.Product[];
}
function ProductList({ products }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((prod) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = prod.name.toLowerCase().includes(term);
    const descriptionMatch = prod.description
      ? prod.description.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, key) => {
          return (
            <li
              key={key}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-zinc-900 hover:shadow-2xl transition duration-300 border border-zinc-800"
            >
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
