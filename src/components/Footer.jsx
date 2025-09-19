import React from "react";
import logo from "../assets/iceCreame/logo2.svg";

const Footer = () => {
  return (
    <div className="w-screen absolute  bottom-0 bg-mango">
      <div className="w-screen flex items-center justify-center gap-16">
        <img src={logo} className="h-40" />
        <ul class="list-none flex flex-col items-start px-6 justify-around border-r-2 border-l-2 w-[20%]">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-6 items-center  justify-center ">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border-2 py-2 font-cursive px-4 text-xl outline-none  focus:ring-0 rounded-lg"
          />
          <button className="font-cursive text-mango bg-black border-white px-6 py-2 text-xl border-2 rounded-xl">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-10 bg-black text-white flex items-center justify-center tracking-wide">
      &copy; 2025 &nbsp; <span className="text-mango"> Rainbow</span> &nbsp; Ice<span className="text-strawberry">creame</span> &nbsp; Landing Page Designed by &nbsp; <span className="text-mango">Sahil Rajput</span>
      </div>
    </div>
  );
};

export default Footer;
