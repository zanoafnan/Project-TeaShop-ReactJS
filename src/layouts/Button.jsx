import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1   bg-brightColor text-[#28331f] hover:text-[#577a3a] transition-all rounded-3xl">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
