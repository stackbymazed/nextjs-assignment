export default function ProductHighlights() {
  return (
    <section id="products" className="px-8 md:px-20 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">⚡ Fast Performance</h3>
          <p className="text-gray-600">
            Experience lightning-fast load times and smooth interactions with Next.js.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">📱 Fully Responsive</h3>
          <p className="text-gray-600">
            Works seamlessly across all devices, ensuring great UX for everyone.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">🔒 Secure & Scalable</h3>
          <p className="text-gray-600">
            Built-in optimizations with Next.js make your site safe and scalable.
          </p>
        </div>
      </div>
    </section>
  );
}
