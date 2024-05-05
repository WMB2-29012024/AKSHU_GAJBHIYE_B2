import React from "react";
import { useRef } from "react";

const MyButton = () => {
  const Count = useRef(0);

  const handleCount = () => {
    const value = Count.current.innerText;
    Count.current.innerText = Number(value) + 1;
  };

  return (
    <div>
      <button onClick={handleCount}>
        
        click me <span ref={Count}>0</span>
      </button>
    </div>
  );
};

export default MyButton;
