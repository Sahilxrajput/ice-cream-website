import React from "react";
import logo from "../assets/iceCreame/logo.avif";
import heart from "../assets/iceCreame/heart.svg";
import cart from "../assets/iceCreame/cart.svg";

const Navbar = ({ width }) => {
  return (
    <nav
      style={{ width }}
      className="h-22 z-50 bg-white border-2 fixed top-6 left-1/2 -translate-x-1/2 border-black rounded-full px-8 flex items-center justify-between"
    >
      <ul className="flex items-center gap-10 font-thin font-cursive">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <div className="absolute left-1/2 -translate-x-1/2 h-24 w-24 bg-mango rounded-full flex items-center justify-center border-2 border-black">
        <img
          src={logo}
          alt="logo"
          className="h-[70%] w-[70%] object-contain rounded-full"
        />
      </div>

      <ul className="flex items-center gap-10 font-cursive">
        <li className="cursor-pointer">Flavors</li>
        <li className="cursor-pointer">Contact Us</li>
        <li>
          <div className="flex gap-4">
            <img src={heart} alt="heart" className="h-6 w-6 cursor-pointer" />
            <img src={cart} alt="cart" className="h-6 w-6 cursor-pointer" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
