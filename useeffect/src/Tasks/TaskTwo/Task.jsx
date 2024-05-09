import React, { useEffect, useState } from "react";

const Task = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await data.json();
      setdata(res);
      console.log(res);
    };
    fetchedData();
  }, []);

  return (
    <div>
      {data.map((e, i) => {
        return (
         
            <li key={i}> {e.body} </li>
         
        );
      })}
    </div>
  );
};

export default Task;
