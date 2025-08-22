import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link href="/privacy" className="hover:text-white">Privacy</Link>
        <Link href="/terms" className="hover:text-white">Terms</Link>
      </div>
    </footer>
  );
}
