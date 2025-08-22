import Image from "next/image";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
