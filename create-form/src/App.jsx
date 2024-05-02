import React from "react";
import Formcomponent from "./Component/Formcomponent";
import TextComponent from "./Component/TextComponent";
import { useState } from "react";

const App = () => {
  let [TextValue, setTextValue] = useState("second");
  return (
    <div>
      <Formcomponent setTextValue={setTextValue} />
      <TextComponent TextValue={TextValue} />
    </div>
  );
};

export default App;
