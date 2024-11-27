import { Link } from "react-router-dom";
function Info() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col gap-10 md:gap-16 md:flex-row items-center">
      <div className="flex-1">
        <img src="/images/infoImage.jpg" alt="" />
      </div>
      <div className="flex-1">
        <span className="text-[#6e7051] font-medium text-lg">ABOUT US</span>
        <h2 className="text-[#212529] text-3xl lg:text-5xl md:w-3/4 my-6 md:my-2 lg:my-6 font-semibold">Designed with Sustainability and Innovation</h2>
        <p className="mb-6 md:mb-2 lg:mb-6 md:w-3/4 text-[#979a9b] text-lg">Our products embody the perfect blend of eco-conscious materials and thoughtful design, transforming recycled plastics into durable, sustainable solutions for a greener future.</p>
        <Link to="/our-story" className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#6e7051]">READ MORE</Link>
      </div>
    </div>
  );
}

export default Info;
