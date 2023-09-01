import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductsSlider from "./components/ProductsSlider";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="pt-16">
      <Navbar />
      <Slider />
      <ProductsSlider title="BestSellers" />
      <ProductsSlider title="Trending Products" />
      <Footer />
    </div>
  );
}
