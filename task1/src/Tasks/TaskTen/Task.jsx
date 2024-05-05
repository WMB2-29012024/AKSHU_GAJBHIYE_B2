import React from "react";
import MyButton from "./component/MyButton";
import { useState } from "react";
import Mycount from "./component/Mycount";

const Task = () => {
  const [count, setcount] = useState(0);

  const incre = () => {
    setcount(count + 1);
  };

  const Decre = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <Mycount countNum={count} />
      <MyButton incre={incre} decre={Decre} />
    </div>
  );
};

export default Task;
