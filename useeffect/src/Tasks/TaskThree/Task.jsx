import React, { useState } from "react";

const Task = () => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    setData(res);
  };

  return (
    <div>
      {Data.map((e) => {
        return <li>{e.title} </li>;
      })}
      <button onClick={fetchData}>Get Data</button>
    </div>
  );
};

export default Task;
