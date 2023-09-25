import getCarouselImages from "@/lib/getCarouselImages";
import Slider from "./components/Slider";
import getProductsSlider from "@/lib/getProductsSlider";
import ProductsSlider from "./components/ProductsSlider";

export default async function Home() {
  const carouselData = getCarouselImages();
  const bestSellersData = getProductsSlider("BestSellers");
  const trendingData = getProductsSlider("Trending");

  const [carousel, bestSellers, trending] = await Promise.all([
    carouselData,
    bestSellersData,
    trendingData,
  ]);

  return (
    <>
      <div className="h-40 md:h-60 lg:h-80 xl:h-96 mt-5">
        <Slider data={carousel} />
      </div>
      <section className="mt-10">
        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold tracking-wider mb-5">
          BestSellers
        </h2>

        <ProductsSlider products={bestSellers} />
      </section>

      <section className="mt-10">
        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold tracking-wider mb-5">
          Trending
        </h2>

        <ProductsSlider products={trending} />
      </section>
    </>
  );
}
