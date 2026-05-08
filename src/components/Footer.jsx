import React from "react";
import instagram from "../assets/iceCreame/instagram.svg";
import twitter from "../assets/iceCreame/twitter.svg";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 py-12 px-10">
      {/* Glow Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold font-berkshire text-[#71341c]">
              Sweet Scoops 🍦
            </h2>
            <p className="text-gray-700 mt-2 max-w-sm">
              Crafted with love, cream, and a little bit of magic. Because life
              is better with ice cream.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-[#71341c] transition">
              About
            </a>
            <a href="#" className="hover:text-[#71341c] transition">
              Menu
            </a>
            <a href="#" className="hover:text-[#71341c] transition">
              Flavors
            </a>
            <a href="#" className="hover:text-[#71341c] transition">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <img
              src={instagram}
              className="h-10 p-2 rounded-full bg-white shadow-md hover:scale-110 transition cursor-pointer"
            />
            <img
              src={twitter}
              className="h-10 p-2 rounded-full bg-white shadow-md hover:scale-110 transition cursor-pointer"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-40"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
          <p>© {new Date().getFullYear()} Sweet Scoops. All rights reserved.</p>

          <p className="italic text-center">
            Made with milk, sugar & slightly poor life decisions 🍨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
