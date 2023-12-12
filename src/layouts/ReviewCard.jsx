import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

const ReviewCard = (props) => {
  // Function to generate stars based on the rating
  const renderStars = (rating) => {
    // Cap the rating at 5
    const cappedRating = Math.min(5, rating);

    const stars = [];
    const fullStars = Math.floor(cappedRating);
    const hasHalfStar = cappedRating % 1 !== 0;
  
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className="text-brightColor" />);
    }
  
    // Half star
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className="text-brightColor" />);
    }
  
    // Remaining empty stars
    const remainingStars = 5 - Math.ceil(cappedRating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<BsStar key={`empty-${i}`} className="text-brightColor" />);
    }
  
    return stars;
  };

  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className="rounded-full" src={props.img} alt="img" />
        </div>
        <div className="mx-3">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex">{renderStars(props.rating)}</div>
        </div>
        <span className="ml-16">
          <FaQuoteRight className="text-backgroundColor" size={42} />
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
        aperiam distinctio fuga ipsam rerum rem.
      </p>
    </div>
  );
};

export default ReviewCard;
