"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Something went wrong!</h1>
      <p className="text-gray-700 mb-6">{error?.message || "Unknown error occurred."}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
