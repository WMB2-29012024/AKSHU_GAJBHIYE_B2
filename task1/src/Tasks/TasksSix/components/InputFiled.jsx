import React from "react";

const InputFiled = () => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
        console.log(e.target.value);
        }}
      />
      <h1></h1>
    </div>
  );
};

export default InputFiled;
