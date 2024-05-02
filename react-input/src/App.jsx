import React from "react";
import Inputcomponent from "./Inputcomponent";
import TextComponent from "./TextComponent";
import { useState } from "react";

const App = () => {

const [Textvalue, setTextvalue] = useState('hello')

  return (
    <div>
      <Inputcomponent setTextvalue={setTextvalue} />
      <TextComponent Textvalue={Textvalue} />
    </div>
  );
};

export default App;
