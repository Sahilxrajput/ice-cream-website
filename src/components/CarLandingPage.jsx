import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import Logo from "./assets/logo.svg";
import { Car, ChevronLeft, ChevronRight } from "lucide-react";

const images = [Img1, Img2, Img3];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

const CarLandingpage = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const prevSlide = () => {
    setIndex([
      index === 0 ? images.length - 1 : index - 1,
      -1, // 👈 moving left
    ]);
  };

  const nextSlide = () => {
    setIndex([
      index === images.length - 1 ? 0 : index + 1,
      1, // 👈 moving right
    ]);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden bg-[#030915]">
      <div className="">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            className={`h-96 rounded-2xl z-20`}
            custom={direction} // passes direction into variants.
            variants={variants} // When running enter or exit, call them with direction as the argument.
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <img src={Logo}  className="w-40 z-50 aspect-square object-cover absolute top-0 left-4"/>

        {/* Background Design */}
        <div className="bg-[#161C28] rounded-br-full h-60 aspect-square absolute top-0 left-0"></div>
        <div className="bg-[#161C28] rounded-tl-full h-100 aspect-square absolute right-0 bottom-0 "></div>
        <div className="bg-[#161C28] rounded-full h-20 aspect-square absolute left-32 bottom-8"></div>
        <div className="bg-[#161C28] rounded-full h-10 aspect-square absolute left-150 top-8 "></div>

        {/* Toggle Buttons */}
        <button
          onClick={prevSlide}
          className="bg-[#161C28] absolute left-20 flex p-4 rounded-full"
        >
          <ChevronLeft size={40} color="#f0f0f0" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#161C28] absolute right-20 flex p-4 rounded-full"
        >
          <ChevronRight size={40} color="#f0f0f0" />
        </button>
      </div>
    </div>
  );
};

export default CarLandingpage;
