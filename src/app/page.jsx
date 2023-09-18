import ProductsSlider from "./components/ProductsSlider";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <ProductsSlider title="BestSellers" />
      <ProductsSlider title="Trending Products" />
    </>
  );
}
