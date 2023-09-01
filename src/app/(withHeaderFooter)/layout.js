import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function layout({ children }) {
  return (
    <div className="pt-16">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
