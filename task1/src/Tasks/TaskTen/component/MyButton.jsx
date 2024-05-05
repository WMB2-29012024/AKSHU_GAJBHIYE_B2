import React from "react";

const MyButton = ({ incre, decre }) => {
  return (
    <div>
      <button onClick={incre}>Increse</button>
      <button onClick={decre}>Decrese</button>
    </div>
  );
};

export default MyButton;
