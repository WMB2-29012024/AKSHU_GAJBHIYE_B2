import React from "react";

const Card = ({ name }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "black",
        color: "white",
        padding:'2rem',
        border:'1px solid purple'
      }}
    >
      <h2> Name : {name} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
        impedit eum voluptas totam, repellendus laborum id magnam beatae atque!
      </p>
    </div>
  );
};

export default Card;
