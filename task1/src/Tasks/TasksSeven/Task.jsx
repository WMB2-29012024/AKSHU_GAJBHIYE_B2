import React from "react";
import Button from "./components/Button";

const Task = () => {
  const onclikckk = () => {
    alert("first click");
  };

  return (
    <div>
      <Button handleClick={onclikckk} />
      <Button handleClick={()=>{
        alert('second click')
      }} />
    </div>
  );
};

export default Task;
