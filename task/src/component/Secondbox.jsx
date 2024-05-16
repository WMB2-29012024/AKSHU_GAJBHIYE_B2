import React from "react";

import Secondbox2 from "./Secondbox2";
import MyRowBox from "./MyRowBox";
import facebook from "../assets/facebook.svg";

const Secondbox = () => {
  return (
    <div style={{ display: "flex",justifyContent:'space-between',padding:'20px 0px' }}>
      <MyRowBox img={facebook} />
      <Secondbox2 />
    </div>
  );
};

export default Secondbox;
