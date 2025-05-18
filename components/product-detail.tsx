"use client";
import React from "react";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}
function ProductDetail({ product }: Props) {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  const onRemoveItem = () => {
    removeItem(product.id);
  };

  return (
    <div className="w-full px-4 pt-6">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
        {product.images && product.images[0] && (
          <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              //className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              className="transition duration-300 hover:opacity-90"
            />
          </div>
        )}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          {product.description && (
            <p className="text-black-700 mb-4 font-semibold">
              {product.description}
            </p>
          )}
          {price && price.unit_amount && (
            <p className="text-lg font-semibold text-gray-900 relative group cursor-pointer inline-block px-2 py-1 rounded-md">
              €{(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={onRemoveItem}>
              -
            </Button>
            <span className="inline-block px-2 py-1 rounded-md bg-white  transition">
              {quantity}
            </span>
            <Button onClick={onAddItem}> +</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
