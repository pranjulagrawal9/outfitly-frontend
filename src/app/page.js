import ProductsSlider from "./components/ProductsSlider";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Slider />
      <ProductsSlider title="BestSellers" />
      <ProductsSlider title="Trending Products" />
    </div>
  );
}
