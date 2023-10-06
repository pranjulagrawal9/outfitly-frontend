import "./globals.css";
import { Andada_Pro } from "next/font/google";
import { Providers } from "./store/provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const andada_pro = Andada_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Online Shopping for Women, Men, Kids Fashion & Lifestyle - Outfitly",
  description:
    "Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a variety of footwear, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store *COD *Easy returns and exchanges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={andada_pro.className + ` pt-14 lg:pt-16`}>
        <Providers>
          <Navbar />
          <div className="max-w-[1536px] min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-64px)] mx-auto">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
