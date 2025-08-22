"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md bg-white px-6 py-4 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="text-2xl font-bold text-blue-600">MyApp</div>

      {/* Middle: Nav Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base font-medium transition-colors ${
              pathname === link.href
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-xl text-blue-600 border border-blue-600 hover:bg-blue-50 transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-600">☰</button>
      </div>
    </nav>
  );
}
