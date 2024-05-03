import React from "react";

const Input = (props) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "15px 30px",
        width: "max-content",
        borderRadius: ".4rem",
        margin: "1rem",
      }}
    >
      <label htmlFor={props.name}>{props.name}</label> <br />
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
