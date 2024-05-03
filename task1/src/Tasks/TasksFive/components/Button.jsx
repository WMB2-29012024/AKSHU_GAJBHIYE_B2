import React from "react";

const Button = () => {
  return (
    <div>
      <button
        style={{
          padding: "15px 30px",
          backgroundColor: "black",
          color: "white",
        }}
        onContextMenu={() => {
          alert("right btn click");
        }}
        onClick={() => {
          alert("you click me");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
