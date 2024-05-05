import React, { useRef } from "react";

const Task = () => {
  const countRef = useRef();

  const handleButton = () => {
    const currentNum = countRef.current.innerText;
    countRef.current.innerText = Number(currentNum) + 1;
  };

  return (
    <div>
      <h1 ref={countRef}>0</h1>
      <button onClick={handleButton}>Increse</button>
    </div>
  );
};

export default Task;
