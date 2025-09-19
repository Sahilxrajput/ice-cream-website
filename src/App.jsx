import React from "react";
import Navbar from "./components/Navbar";
import wing from "./assets/iceCreame/milkSplash.svg";
import milk from "./assets/iceCreame/milk.png";
import rainbow from "./assets/iceCreame/rainbow.png";
import rectangle from "./assets/iceCreame/rectangle.svg";
import vanilasplash from "./assets/iceCreame/vanilasplash.png";
import instagram from "./assets/iceCreame/instagram.svg";
import twitter from "./assets/iceCreame/twitter.svg";
import avatar from "./assets/iceCreame/avatar.png";
import hollow from "./assets/iceCreame/hollow.png";
import icecreameicon from "./assets/iceCreame/ice-creame-icon.svg";
import coneicon from "./assets/iceCreame/cone-icon.svg";
import juiceicon from "./assets/iceCreame/juice-icon.svg";
import juice from "./assets/iceCreame/juice.png";
import trio3 from "./assets/iceCreame/trio3.png";
import trio2 from "./assets/iceCreame/trio2.png";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <img src={rainbow} className="absolute top-10/12 right-2 z-10" />
      {/* second page */}
      <div className="w-screen h-screen bg-secondary px-24 flex relative">
        <h1 className="font-black text-5xl absolute left-1/2 -translate-x-1/2 top-1/10 text-black tracking-wider text-shadow leading-tight">
          We care About You!
        </h1>

        {/* Left Side */}
        <div className="flex flex-col items-center justify-start  text-center gap-20 px-20 w-1/2">
          <img src={wing} className="pt-9 scale-150" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            distinctio quasi earum minus fugiat quaerat eius, tenetur id
            quibusdam quisquam, exercitationem ullam deleniti saepe? Obcaecati
            officia sequi voluptatum neque modi?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            distinctio quasi earum minus fugiat quaerat eius, tenetur id
            quibusdam quisquam, exercitationem ullam deleniti saepe? Obcaecati
            officia sequi voluptatum neque modi?
          </p>

          <div className="flex items-center justify-center gap-6">
            <button className="px-4 bg-mango rounded-full py-1 border-2">
              Learn more
            </button>
            <button className="px-4 bg-white rounded-full py-1 border-mango border-2">
              Try now
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col mt-40 items-center justify-center text-center gap-4 px-20 w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            distinctio quasi earum minus fugiat quaerat eius, tenetur id
            quibusdam quisquam, exercitationem ullam deleniti saepe? Obcaecati
            officia sequi voluptatum neque modi?
          </p>

          <div className="flex items-center justify-center gap-6">
            <button className="px-4 border-mango bg-white rounded-full py-1 border-2">
              Learn more
            </button>
          </div>
          <img src={milk} className="h-100" />
        </div>
      </div>

      {/* Card Page */}
      <div className="w-screen h-screen bg-primary flex justify-start pt-8 gap-8 items-center flex-col">
        <h2 className=" font-black text-4xl text-black tracking-wider text-shadow leading-tight">
          Product Range
        </h2>
        <div className="flex-1 flex gap-5 p-18">
          <Card title={"Cones"} img={trio2} icon={coneicon}/>
          <Card title={"Juices"} img={juice} icon={juiceicon} />
          <Card title={"IceCreams"} img={trio3} icon={icecreameicon}/>
        </div>
      </div>

      {/* Flavoue Page  */}
      <div className="w-screen h-screen bg-primary relative">
        {/* Buttons */}
        <button className="px-4 absolute top-14 left-20 text-xl -rotate-10 bg-vanila rounded-full border-2 font-cursive">
          Vanila
        </button>
        <button className="px-4 absolute top-4 left-80 text-xl -rotate-8 bg-blueberry rounded-full border-2 font-cursive">
          Blueberry
        </button>
        <button className="px-4 absolute -top-2 left-135 text-xl -rotate-2 bg-chocolate rounded-full border-2 font-cursive">
          Chocolate
        </button>
        <button className="px-4 absolute -top-2 left-1/2 text-xl rotate-2 bg-strawberry rounded-full border-2 font-cursive">
          Strawberry
        </button>
        <button className="px-4 absolute top-0 left-65/100 text-xl rotate-8 bg-pistachio rounded-full border-2 font-cursive">
          Pistachio
        </button>
        <button className="px-4 absolute top-6 right-60 text-xl rotate-8 bg-mango rounded-full border-2 font-cursive">
          Mango
        </button>

        <img src={rectangle} alt="" />

        {/* Circle */}
        <section className="h-6/10 top-2/10 left-40 border-60 border-primary aspect-square absolute rounded-full"></section>

        <img src={hollow} className="absolute h-6/10 top-6 left-20" />

        {/* Right Side  */}
        <div className="flex flex-col items-center justify-center absolute mr-8 w-1/2 right-0 top-2/10 px-20 gap-10">
          <img src={rainbow} className="absolute -top-4 -rotate-45 left-20" />
          <h2 className=" font-black text-5xl z-20 text-black tracking-wider text-shadow leading-tight">
            Heavenly <br /> Flavorse
          </h2>
          <p className="text-center z-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            repellat possimus quia, molestiae impedit voluptatum? Amet placeat
            aperiam molestias pariatur officiis dignissimos nostrum id, quod
            sint obcaecati, consequuntur dolorem? Facilis! <br />
            nostrum id, quod sint obcaecati, consequuntur dolorem? Facilis!
          </p>
          {/* Buttons */}
          <div className="flex justify-between gap-24">
            <button className="px-4 font-cursive text-xl bg-mango rounded-full py-1 border-2">
              Learn more
            </button>
            <button className="px-4 font-cursive text-xl bg-white rounded-full py-1 border-mango border-2">
              Try now
            </button>
          </div>
        </div>

        <img src={vanilasplash} className="z-20 absolute" />
      </div>

      {/* Contact Page */}
      <div className="bg-primary flex relative items-center justify-center gap-24 w-screen h-screen">
        {/* Left */}
        <div className="w-4/10 space-y-4 px-12">
          <div className="flex gap-2 items-center justify-between ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border-2 py-2 font-cursive px-4 text-xl outline-none  focus:ring-0 rounded-lg"
            />
            <button className="font-cursive bg-mango px-4 py-2 text-xl border-2 rounded-xl">
              Contact Us
            </button>
          </div>
          <div className="flex items-center justify-start gap-6">
            <img src={twitter} className="h-12" />
            <img src={instagram} className="h-14" />
          </div>
        </div>
        {/* Right */}
        <img src={avatar} className="h-60" />

        <Footer />
      </div>
    </div>
  );
};

export default App;
