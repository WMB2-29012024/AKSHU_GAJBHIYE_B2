import React from "react";

const MyButton = ({ set, count }) => {
  const handleCount = () => {
    set(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Count {count} </button>
    </div>
  );
};

export default MyButton;
