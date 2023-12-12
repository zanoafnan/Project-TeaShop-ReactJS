import React from "react";
import Button from "../layouts/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <img className=" rounded-lg" src={props.img} alt="img" />
      <div className=" flex flex-col items-center mt-5 gap-3">
        <h2 className=" font-semibold text-xl">{props.title}</h2>

        <h3 className=" font-semibold text-lg">{props.price}</h3>
        <div>
        </div>
        <Button title="Add To Card" />
        <div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
