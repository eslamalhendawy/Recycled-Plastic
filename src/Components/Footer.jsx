import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 border-[#e4e6e7] bg-white container mx-auto px-6 lg:px-16 py-12 flex justify-between gap-8">
      <div className="text-center">
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left text-lightGreen">Another Chance</h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#979a9b] lg:text-left lg:w-4/5">Committed to a cleaner planet, one recycled product at a time. Let's build a sustainable future together.</p>
      </div>
      <div className="">
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left text-lightGreen">Links</h3>
        <ul className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left flex flex-col space-y-3">
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/collection/all">Store</Link>
          </li>
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/lookbook">Lookbook</Link>
          </li> */}
          {/* <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/sale">Sale</Link>
          </li> */}
        </ul>
      </div>
      {/* <div>
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">About</h3>
        <ul className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left text-[#979a9b]">
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/our-story">Our Story</Link>
          </li>
          
        </ul>
      </div> */}
    </div>
  );
}

export default Footer;
