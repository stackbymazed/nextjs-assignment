"use client";

import Link from "next/link";
import { products } from "../components/products";


export default function ProductsPage() {
  return (
    <div className="px-8 md:px-20 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Product List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-3">{product.description}</p>
            <p className="font-bold text-gray-800 mb-4">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
