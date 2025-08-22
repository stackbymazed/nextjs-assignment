export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gray-50">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Build Amazing Landing Pages with <span className="text-blue-600">Next.js</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Super fast, responsive, and SEO-friendly pages powered by Next.js & TailwindCSS.
        </p>
        <a
          href="#products"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src="https://dummyimage.com/500x350/3b82f6/ffffff&text=Hero+Image"
          alt="Hero"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
