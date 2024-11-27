import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-20 bg-cover bg-center" style={{ backgroundImage: "url(/images/heroImage2.jpg)" }}>
      <div className="text-white w-full md:w-2/4">
        <h2 className="text-5xl lg:text-7xl text-left font-bold mb-8">Transforming Plastic Waste into a Sustainable Future</h2>
        <p className="mb-6 text-xl xl:text-3xl text-left font-semibold">Join us in reducing plastic pollution by turning discarded materials into innovative, eco-friendly solutions.</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-start sm:space-x-4 mb-8">
          <Link to="/collection/all" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP</Link>
          {/* <Link to="/collection/women" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP WOMEN</Link> */}
          {/* <Link to="/collection/children" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP CHILDREN</Link> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
