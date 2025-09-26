import React from "react";
import doodleIcon from "../assets/iceCreame/doodleIcon.png";
import trio from "../assets/iceCreame/trio.png";
import { ArrowLeft, ArrowRight } from "lucide-react";


const Hero = () => {

 

  return (
    <div className="h-screen w-screen flex justify-center bg-cover overflow-hidden pt-8 bg-primary">
      {/* Left Side */}
      <section className="flex-1/2 flex flex-col justify-center items-center gap-8 relative">
        <h1 className=" font-melted text-chocolate text-8xl font-thin tracking-wider text-shadow text-">
          Grab The <br /> Best Ice
          <br /> Creame
        </h1>
        <img
          src={doodleIcon}
          className="h-16 absolute -rotate-15 right-55 top-85"
        />
        <img
          src={doodleIcon}
          className="h-20 absolute rotate-35 right-42 top-80"
        />
        <img
          src={doodleIcon}
          className="h-16 absolute rotate-110 right-45 top-95"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel <br />{" "}
          error expedita voluptate quae cupiditate cumque <br /> quod obcaecati
          quasi, nemo cum, assumenda commodi in <br /> possimus. Consectetur eum
          doloremque animi laboriosam quam!
        </p>
        <button className="bg-mango font-cursive border-2 w-3xs py-3 text-lg border-black rounded-full">
          Learn More
        </button>
      </section>

      {/* Right Side */}
      <section className="flex-1/2 flex-col flex items-center justify-center">
        <img src={trio} className="h-[90%] pt-2 -rotate-40" />
        <div className="flex justify-center items-center ml-30 self-baseline gap-6">
          <button className="p-2 border-1 rounded-full bg-mango">
            <ArrowLeft />
          </button>
          <button className="p-2 border-1 rounded-full bg-mango">
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
