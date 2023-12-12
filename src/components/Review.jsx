import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-normal lg:px-32 px-5  bg-backgroundColor ">
      <div className="mt-12">
      </div>
      <h1 className=" font-semibold text-center text-4xl lg:mt-16    ">
        Customer's Reviews
      </h1>


      

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img={img1} title="Ryan Cooper" rating={4.5} />
        <ReviewCard img={img2} title="Jane Hanley" rating={4.0} />
        <ReviewCard img={img3} title="Angeline Lyu" rating={5.0} />

      </div>
      

      
    </div>
    
  );
};

export default Review;
