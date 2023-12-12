import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen  flex flex-col  items-center justify-center lg:px-32 px-5 bg-about bg-cover ">
      <h1 className="  font-semibold text-center text-5xl mt-1 mb-10">About Us</h1>
      
      <div className=" flex flex-col lg:flex-row items-center gap-12 mt-10">
        
        <div className=" w-full lg:w-2/4 p-6 space-y-8 lg:mb-16 mb-10">
          <h2 className=" font-semibold text-3xl ">
            What Makes Our Tea Special?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quaerat quia quasi beatae et iste, tempora voluptatum corporis sit
            pariatur eaque exercitationem, doloribus eum optio nobis cum?
            Quidem, dolor atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
            minima perspiciatis doloribus quod repellendus molestiae rerum!
            Enim, vero natus.
          </p>
        

          <Button title="Learn More " />
        </div>
        
      </div>
    </div>
  );
};

export default About;
