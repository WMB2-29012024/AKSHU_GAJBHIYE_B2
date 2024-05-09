import React, { useContext } from "react";
import { Contexxtt } from "../../App";

const Task = () => {
  const content = useContext(Contexxtt);
  return (
    <div>
      {content.Data.map((e) => {
        return <li>{e.email} </li>;
      })}
    </div>
  );
};

export default Task;
