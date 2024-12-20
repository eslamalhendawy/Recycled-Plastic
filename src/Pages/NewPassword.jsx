import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function NewPassword() {
  const navigate = useNavigate();

  const URL = "https://clothey-api.onrender.com/users/reset-password";
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = `Another Chance | New Password`;
    window.scrollTo(0, 0);
  }, []);

  const changePassword = async () => {
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
    if (password.length < 8) {
      toast.error("New Password Must Be 8 Characters Or Longer");
      return;
    }
    await axios
      .patch(URL, { email, new_password: password })
      .then((res) => {
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="bg-bgColor">
      <div className="container mx-auto flex justify-center items-center login ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-lightGreen">Change Password</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-lightGreen">Email</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-lightGreen">New Password</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter New Password" type="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="text-center mb-16">
            <button onClick={changePassword} className="bg-lightGreen hover:bg-blackColor duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
