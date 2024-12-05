import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Search from "../Components/Search";
import HeroSection from "../Components/HeroSection";
import Sponsors from "../Components/Sponsors";
import Info from "../Components/Info";
import HowMade from "../Components/HowMade";
import BestSellers from "../Components/BestSellers";
import NewArrivals from "../Components/NewArrivals";
import Recycle from "../Components/Recycle";
import Testimonials from "../Components/Testimonials";
import Features from "../Components/Features";
import FeaturesSmall from "../Components/FeaturesSmall";
import Footer from "../Components/Footer";

function Homepage() {
  useEffect(() => {
    document.title = `Another Chance`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Search />
      <HeroSection />
      <Sponsors />
      <Info />
      <HowMade bg={"#f1f1ef"} />
      <BestSellers />
      {/* <div className="md:flex xl:space-x-10 xl:p-10">
        <div className="md:flex-1 bg-cover bg-center flex flex-col space-y-3 justify-center items-center px-12 py-20 xl:py-[100px]" style={{ backgroundImage: "url(/images/recycled-shoe-store-shop-men-image-thumbnail.jpg)" }}>
          <h2 className="text-white text-5xl font-semibold">Men</h2>
          <Link to="/collection/men" className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Shop For Men</Link>
        </div>
        <div className="md:flex-1 xl:py-[140px] bg-cover bg-center flex flex-col space-y-6 justify-center items-center px-12 py-20" style={{ backgroundImage: "url(/images/recycled-shoe-store-shop-women-image-tumbnail.jpg)" }}>
          <h2 className="text-white text-5xl font-semibold">Women</h2>
          <Link to="/collection/women" className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Shop For Women</Link>
        </div>
        <div className="md:flex-1 xl:py-[140px] bg-cover bg-center flex flex-col space-y-6 justify-center items-center px-12 py-20" style={{ backgroundImage: "url(/images/recycled-shoe-store-shop-women-image-tumbnail.jpg)" }}>
          <h2 className="text-white text-5xl font-semibold">Children</h2>
          <Link to="/collection/children" className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Shop For Children</Link>
        </div>
      </div> */}
      <NewArrivals />
      <Recycle />
      <Testimonials />
      <Features />
      <FeaturesSmall />
      <Footer />
    </div>
  );
}

export default Homepage;
