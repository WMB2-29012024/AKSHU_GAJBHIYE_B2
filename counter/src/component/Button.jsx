import React from "react";

const Button = ({ setcountvalue }) => {
  const handleincrimentcount = () => {
    setcountvalue((prev) => prev + 1);
  };
  const handledecrimentcount = () => {
    setcountvalue((prev) => (prev !== 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <button onClick={handledecrimentcount}>Decrese</button>
      <button onClick={handleincrimentcount}>Increase</button>
    </div>
  );
};

export default Button;
