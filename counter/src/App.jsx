import React from "react";
import Count from "./component/Count";
import Button from "./component/Button";
import { useState } from "react";

const App = () => {
  let [countvalue, setcountvalue] = useState(0);

  return (
    <div>
      <h1>Counter Example</h1>
      <Count countvalue={countvalue} />
      <Button setcountvalue={setcountvalue} />
    </div>
  );
};

export default App;
