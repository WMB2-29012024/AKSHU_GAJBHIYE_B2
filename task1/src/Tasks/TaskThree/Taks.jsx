import React from "react";
import Input from "./component/Input";

const Taks = () => {
  return (
    <div>
      <Input name={"Username"} placeholder={"Enter your name "} type={"text"} />
      <Input
        name={"Contact"}
        placeholder={"Enter your Contact "}
        type={"number"}
      />
      <Input
        name={"Address"}
        placeholder={"Enter your Address "}
        type={"text"}
      />
    </div>
  );
};

export default Taks;
