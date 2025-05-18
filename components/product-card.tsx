import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}
function ProductCard({ product }: Props) {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href={`/products/${product.id}`}>
      <Card className=" max-w-[400px] max-h-[470px] flex flex-col justify-between ... ">
        {product.images && product.images[0] && (
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardContent>
            <p className="text-m">{product.description}</p>
            {price && price.unit_amount && (
              <p className="text-lg font-semibold text-gray-900">
                €{(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
            <Button> View Details </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default ProductCard;
