"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/app/components/products";

export default function ProductDetailsPage() {
  const params = useParams();
  console.log(params)
  const router = useRouter();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="px-8 md:px-20 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-20 py-12">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto p-6 rounded-2xl shadow-md bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg mb-6 w-full h-64 object-cover"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <p className="text-gray-600 mb-4">{product.details}</p>
      </div>
    </div>
  );
}
