import { ArrowRight } from "lucide-react";
import React from "react";

const Card = ({
  icon,
  title,
  img,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis esse dolorem voluptates dolorum. Iure.",
}) => {
  return (
    <div className="bg-secondary relative rounded-2xl h-[85%] w-xs flex flex-col p-6 gap-4 items-center justify-end">
      <img src={img} className="w-60 absolute -top-16" />
      <h3 className="font-cursive text-3xl font-bold">{title}</h3>
      <img src={icon} className="w-10" />
      <h4 className="text-center">{description}</h4>
      <button className="bg-primary border-2 rounded-full p-2">
        <ArrowRight />
      </button>
    </div>
  );
};

export default Card;
