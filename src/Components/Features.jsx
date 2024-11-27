import { Link } from "react-router-dom";
function Features() {
  return (
    <div className="px-6 py-12 md:py-[120px] bg-cover bg-center xl:flex flex-col gap-16" style={{ backgroundImage: "url(/images/heroImage.jpg)" }}>
      <h2 className="text-center text-white text-4xl lg:text-7xl font-semibold">Better for People & the Planet</h2>
      <p className="text-center text-white text-lg md:text-xl lg:text-2xl">Turning waste into something remarkable.</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-center sm:space-x-4 mb-8">
        <Link to="/collection/all" className="px-8 py-3 font-semibold bg-lightGreen text-white hover:bg-blackColor duration-500">SHOP</Link>
        {/* <Link to="/collection/women" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP WOMEN</Link>
        <Link to="/collection/children" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP CHILDREN</Link> */}
      </div>
    </div>
  );
}

export default Features;
