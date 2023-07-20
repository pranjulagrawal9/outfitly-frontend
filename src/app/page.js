import ProductsSlider from "./components/ProductsSlider";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-16"></div>

      <div className="max-w-[1536px] mx-auto">
        <Slider />
        <ProductsSlider title="BestSellers" />
        <ProductsSlider title="Trending Products" />
      </div>

      <Footer />
    </>
  );
}
