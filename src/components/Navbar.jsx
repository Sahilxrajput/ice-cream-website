import React from "react";
import logo from "../assets/iceCreame/logo.avif";
import heart from "../assets/iceCreame/heart.svg";
import cart from "../assets/iceCreame/cart.svg";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-20 w-[70%] z-50 bg-white border-2 fixed top-6  left-1/2 -translate-x-1/2 border-black rounded-full font-cursive text-lg items-center justify-around flex">
      <ul class="list-none flex items-center justify-between w-[30%]">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <div className="rounded-full aspect-square h-[150%] ml-2 bg-mango flex items-center justify-center">
        <img
          src={logo}
          className="h-[80%] self-center rounded-full aspect-square"
        />
      </div>
      <ul class="list-none flex items-center justify-between w-[35%] ">
        <li>Flavors</li>
        <li>Contact Us</li>
        <li>
          <img src={heart} className="h-8" />
        </li>
        <li>
          <img src={cart} className="h-8" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
