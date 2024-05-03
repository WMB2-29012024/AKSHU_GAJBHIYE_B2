import React from "react";
import Card from "./components/Card";

const Task = () => {
  const componentArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {componentArray.map((e, idx) => {
        return <Card count={componentArray[idx]} />;
      })}
    </div>
  );
};

export default Task;
