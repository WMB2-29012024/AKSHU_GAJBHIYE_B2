import React from "react";
import BottomBox from "./BottomBox";

const Bottom = () => {
  return (
    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center',gap:'10px',margin:'10px 0px'}}>
      <h4>Previous</h4>
      <BottomBox />
      <h4>Next</h4>
    </div>
  );
};

export default Bottom;