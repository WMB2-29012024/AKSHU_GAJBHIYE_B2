import React from "react";

const Box = ({ count }) => {
  return (
    <div>
      {
        count.title? <div><p> {count.id} </p>
        <p> {count.title} </p>
        <p> {count.userId} </p>
        <p> {String(count.completed)} </p></div>: <div>
            no data found
        </div>
      }
    </div>
  );
};

export default Box;
