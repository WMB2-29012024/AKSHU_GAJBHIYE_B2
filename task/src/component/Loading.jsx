import React from "react";
import { TextHeading } from "./TextHeading";

const Loading = ({ load }) => {
  return (
    <div>
      <TextHeading texxt={`In Progress ${load} `} size={"md2"} />
      <div className="load">
        <div
          className="inner-load"
          style={{ width: load, backgroundColor: "blue", height: "5px",borderRadius:'10px' }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
