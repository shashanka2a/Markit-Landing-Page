import { Hero } from "./components/Hero";
import { ProductsSection } from "./components/ProductsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsSection />
      <Footer />
    </div>
  );
}