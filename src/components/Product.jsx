import React from "react";
import img1 from "../assets/img/product1.jpg";
import img2 from "../assets/img/product2.jpg";
import img3 from "../assets/img/product3.jpg";
import Button from "../layouts/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 mb bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-12">
        Our Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        <ProductCard img={img1} title="TranquiliTea Picks" price="IDR 14.000" />
        <div className="flex flex-col">
          
          <div className="flex">
          </div>
        </div>

        <ProductCard img={img2} title="SereniTea Selections" price="IDR 21.000" />
        <div className="flex flex-col">
          <div className="flex">
          </div>
        </div>

        <ProductCard img={img3} title="RoyalTea Collections" price="IDR 32.000" />
        <div className="flex flex-col">
          <div className="flex">
          </div>
        </div>
      </div>
    </div>


  );
};

export default Product;
