import React, { useState } from "react";
import MyButton from "./MyButton";

const App = () => {
  const [Count, setCount] = useState(0)
  return (
    <div>
      <MyButton count={Count} set={setCount} />
    </div>
  );
};

export default App;
