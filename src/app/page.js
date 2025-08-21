import Hero from "./components/Hero";
import ProductHighlight from "./components/ProductHighlight";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <Hero></Hero>
      <ProductHighlight></ProductHighlight>
    </div>
  );
}
