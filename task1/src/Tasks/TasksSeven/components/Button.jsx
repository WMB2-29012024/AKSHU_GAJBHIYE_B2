import React from "react";

const Button = ({ handleClick }) => {
  return (
    <div>
      <button
        style={{
          padding: "15px 30px",
          backgroundColor: "purple",
          border: "none",
          color: "white",
        }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
