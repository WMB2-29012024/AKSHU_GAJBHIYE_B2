import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [count, setCount] = useState([]);

  const handleCount = () => {
    const ab = [...count, 1];
    setCount(ab);
  };

  return (
    <div>
      <button onClick={handleCount}> click </button>
      <h1>Hello</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {count.map((e, i) => {
          return <List key={i} idx={i} count={count} set={setCount} />;
        })}
      </div>
    </div>
  );
};

export default App;
