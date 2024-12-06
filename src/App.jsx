import { useEffect } from "react";
import { useAppContext } from "./Context/AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { postData } from "./Services/apiCalls";

import Header from "./Components/Header";
import Homepage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ResetPassword from "./Pages/ResetPassword";
import ResetCode from "./Pages/ResetCode";
import NewPassword from "./Pages/NewPassword";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import SearchResults from "./Pages/SearchResults";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";

import "./App.css";

function App() {
  const { setUserData } = useAppContext();

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setUserData({loggedIn: true, firstName: localStorage.getItem("firstName"), lastName: localStorage.getItem("lastName"), phoneNumber: localStorage.getItem("phoneNumber"), email: localStorage.getItem("email"), id: localStorage.getItem("id")});
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/reset-password" exact element={<ResetPassword />} />
        <Route path="reset-code" exact element={<ResetCode />} />
        <Route path="new-password" exact element={<NewPassword />} />
        <Route path="/collection/:type" exact element={<Collection />} />
        {/* <Route path="/lookbook" exact element={<Lookbook />} /> */}
        {/* <Route path="/our-story" exact element={<OurStory />} /> */}
        <Route path="/contact" exact element={<Contact />} />
        {/* <Route path="/sale" exact element={<Sale />} /> */}
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/profile/:username" exact element={<Profile />} />
        <Route path="/search/:query" exact element={<SearchResults />} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/checkout" exact element={<Checkout />} />
      </Routes>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </Router>
  );
}

export default App;
