import React, { useState } from "react";
import Card from "./Card";

const List = ({ set, idx, count }) => {
  const [first, setfirst] = useState([]);

  const deletHandler = () => {
    // console.log(count.splice(idx, 1));
    // set([...count]);
    const abc = count.filter((item, indx) => indx !== idx);
    console.log(abc);
    set(abc);
  };

  const addHandler = () => {
    const ab = [...first, []];
    setfirst(ab);
  };

  return (
    <div
      style={{
        width: "15rem",
        height: "30rem",
        backgroundColor: "black",
        margin: "1rem",
        color: "white",
        padding: "5px",
        overflow: "hidden",
      }}
    >
      <button onClick={deletHandler}>delete {idx} </button>
      <button onClick={addHandler}>Add +</button>
      {first.map((e) => {
        return <Card key={e} />;
      })}
    </div>
  );
};

export default List;
