import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const navigate = useNavigate();
  const url = "https://clothey-api.onrender.com/users/send-reset-code";
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = `Another Chance | Forgot Password`;
    window.scrollTo(0, 0);
  }, []);

  const attemptReset = async () => {
    if (email === "") {
      toast.error("Enter Email");
      return;
    }
    if (!regEmail.test(email)) {
      toast.error("Enter Correct Email");
      return;
    }
    await axios
      .post(url, { email })
      .then((res) => {
        console.log(res);
        toast.info("Check Your Email");
        navigate("/reset-code");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Email Not Found In Our Database");
      });
  };

  return (
    <div className="bg-bgColor">
      <div className="container mx-auto flex justify-center items-center login">
        <div className="py-6 px-4 sm:px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-lightGreen">Reset Password</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="mb-6 text-lg font-semibold text-[#212529] text-center">Enter Email Linked to Your Profile</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="text-center mt-12">
            <button onClick={attemptReset} className="bg-lightGreen hover:bg-blackColor duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Send Retrival Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
