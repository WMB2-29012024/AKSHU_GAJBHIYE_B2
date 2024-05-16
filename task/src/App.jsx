import React from "react";
import Logo from "./component/Logo";
import Heading from "./component/Heading";
import { TextHeading } from "./component/TextHeading";
import MyRow from "./component/MyRow";
import kla from "./assets/klarna.svg";
import facebook from "./assets/facebook.svg";
import Secondbox from "./component/Secondbox";

const App = () => {
  return (
    <div className="main">
      <Logo />
      <Heading size={"xl"} texxt={"See what your team has been up to"} />
      <TextHeading size={"xl2"} texxt={"suraj"} />
      <Heading size={"md"} texxt={"Projects"} />
      <MyRow imgname={kla} />
      <MyRow imgname={facebook} />
      <Heading size={"md"} texxt={"Team member activities"} />

      <Secondbox />
      <Secondbox />
      <Secondbox />
      <button>
        View full report
      </button>
    </div>
  );
};

export default App;
