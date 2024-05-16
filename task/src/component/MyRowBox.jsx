import React from "react";
import Heading from "./Heading";
import { TextHeading } from "./TextHeading";

const MyRowBox = ({img}) => {
  return (
    <div style={{display:'flex',gap:'10px'}}>
      <img src={img} alt="" />
      <div className="innerbox">
        <Heading texxt={"Klarna"} size={"sm"} />
        <TextHeading texxt={"Email Campian"} size={"md2"} />
      </div>
    </div>
  );
};

export default MyRowBox;
