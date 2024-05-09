import React, { createContext, useEffect, useState } from "react";
import Task from "./Tasks/TaskFive/Task";

export const Contexxtt = createContext();

const App = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      const res = await data.json();
      setData(res);
    };
    fetchedData();
  }, []);

  return (
    <div>
      <Contexxtt.Provider value={{ Data }}>
        <Task />
      </Contexxtt.Provider>
    </div>
  );
};

export default App;
