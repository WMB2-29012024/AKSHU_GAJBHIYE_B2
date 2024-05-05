import React, { useRef } from "react";

const Task = () => {
  const first = useRef();
  let second = useRef("Hide");

  let flag = true;

  const handleInput = (e) => {
    if (flag == true) {
      first.current.style.display = "none";
      second.current.innerText = "Unhide";
      flag = false;
    } else {
      first.current.style.display = "block";
      second.current.innerText = "Hide";
      flag = true;
    }
  };

  return (
    <div>
      <div
        ref={first}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <button style={{padding:'20px 30px'}} onClick={handleInput} ref={second}>
       Hide
      </button>
    </div>
  );
};

export default Task;
