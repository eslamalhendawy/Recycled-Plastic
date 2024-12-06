import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";

import { postData } from "../Services/apiCalls";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const { setUserData } = useAppContext();

  const navigate = useNavigate();

  const regCharectars = /^[A-Za-z\s]*$/;
  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    document.title = `Another Chance | Sign Up`;
    window.scrollTo(0, 0);
  }, []);

  const attemptSignup = async () => {
    if (first_name === "") {
      toast.error("Enter First Name");
      return;
    }
    if (!regCharectars.test(first_name)) {
      toast.error("Enter Correct First Name");
      return;
    }
    if (last_name === "") {
      toast.error("Enter Last Name");
      return;
    }
    if (!regCharectars.test(last_name)) {
      toast.error("Enter Correct Last Name");
      return;
    }
    if (email === "") {
      toast.error("Enter Email");
      return;
    }
    if (!regEmail.test(email)) {
      toast.error("Enter Correct Email");
      return;
    }
    if (phone_number === "") {
      toast.error("Enter Phone Number");
      return;
    }
    if (!regNumbers.test(phone_number) || phone_number.length != 11) {
      toast.error("Enter Correct Phone Number");
      return;
    }
    if (password === "") {
      toast.error("Enter Password");
      return;
    }
    if (password.length < 8) {
      toast.error("Password Must Be At Least 8 Charrecters Long");
      return;
    }
    if (repeat === "") {
      toast.error("Repeat Password Please");
      return;
    }
    if (password != repeat) {
      toast.error("Password Does Not Match");
      return;
    }
    toast.info("Attempting Sign Up");
    const response = await postData("/users/signup", { first_name, last_name, email, password, phone_number });
    if (response.authorization_token) {
      localStorage.setItem("token", response.authorization_token);
      setUserData({ loggedIn: true, firstName: response.first_name, lastName: response.last_name, phoneNumber: response.phone_number, email: response.email, id: response.id });
      navigate("/");
      toast.success("Sign Up Successful");
    }else {
      toast.error("Error Signing Up Please Try Again");
    }
  };
  return (
    <div className="bg-bgColor">
      <div className="container mx-auto flex justify-center items-center h-[120vh] sm:h-screen px-8 py-12 md:pt-0 sm:p-0 ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-2xl sm:text-3xl mb-4 text-lightGreen">Sign Up</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-lightGreen">First Name</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter First Name" type="text" onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-lightGreen">Last Name</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Last Name" type="text" onChange={(e) => setLast(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-lightGreen">Email</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-lightGreen">Phone Number</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Phone Number" type="text" onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-4 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-lightGreen">Password</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-lightGreen">Repeat Password</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" onChange={(e) => setRepeat(e.target.value)} />
            </div>
          </div>

          <div className="text-center mb-5 sm:mb-10">
            <button onClick={attemptSignup} className="bg-lightGreen hover:bg-blackColor duration-200 text-white text-sm sm:text-lg py-3 px-16 rounded-xl inline-block">
              Sign Up
            </button>
          </div>
          <p className="text-[#212529] text-sm sm:text-base text-center">Already have and account ?</p>
          <Link to="/login">
            <p className="text-center text-lg sm:text-2xl font-bold cursor-pointer text-lightGreen hover:text-blackColor duration-200">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
