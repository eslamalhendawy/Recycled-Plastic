import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";

import { postData } from "../Services/apiCalls";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useAppContext();
  const navigate = useNavigate();

  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    document.title = `Another Chance | Login`;
    window.scrollTo(0, 0);
  }, []);

  const attemptLogin = async () => {
    if (email === "") {
      toast.error("Enter Email");
      return;
    }
    if (!regEmail.test(email)) {
      toast.error("Enter Correct Email");
      return;
    }
    if (password === "") {
      toast.error("Enter Password");
      return;
    }
    toast.info("Attempting Login");

    const response = await postData("/users/signin", { email, password });
    if (response.authorization_token) {
      localStorage.setItem("token", response.authorization_token);
      localStorage.setItem("firstName", response.first_name);
      localStorage.setItem("lastName", response.last_name);
      localStorage.setItem("phoneNumber", response.phone_number);
      localStorage.setItem("email", response.email);
      setUserData({ loggedIn: true, firstName: response.first_name, lastName: response.last_name, phoneNumber: response.phone_number, email: response.email });
      navigate("/");
      toast.success("Login Successful");
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="bg-bgColor">
      <div className="container mx-auto flex justify-center items-center login ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-lightGreen">Login</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-lightGreen">Email</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-lightGreen">Password</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" onChange={(e) => setPassword(e.target.value)} />
            <Link to="/reset-password" className="">
              <p className="text-right text-xs md:text-base font-bold text-lightGreen">Forgot Password ?</p>
            </Link>
          </div>
          <div className="text-center mb-16">
            <button onClick={attemptLogin} className="bg-lightGreen hover:bg-blackColor duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Login
            </button>
          </div>
          <p className="text-[#212529] text-center">Don&apos;t have and account ?</p>
          <Link className="text-center text-lg sm:text-2xl font-bold cursor-pointer text-lightGreen hover:text-blackColor duration-300 block mx-auto" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
