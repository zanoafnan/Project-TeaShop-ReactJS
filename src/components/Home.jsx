import React from "react";
import img from "../assets/img/hometea.jpg";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-home bg-cover">
      <div class="spacer"></div>
      
      <div className="relative">
       

      </div>
      
      <div className=" w-full lg:w-2/4 space-y- mt-14 lg:mt-0 ">
        <h1 className="font-semibold text-5xl mb-4 text-center lg:text-start leading-tight">
        Unwind in the warmth and savor the essence of tea</h1>
        <p className="ml-1 ">
        Where every cup tells a tale of tranquility
        
        </p>

        <div className=" flex flex-row mt-5 gap-6 ">
          <Button title="Add To Cart" />
          <Button title="More Menu" />
        </div>
      </div>

      
    </div>
  );
};

export default Home;
