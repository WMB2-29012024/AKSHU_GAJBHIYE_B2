import React from "react";
import MyRowBox from "./MyRowBox";
import Loading from "./Loading";
import MyRowBox2 from "./MyRowBox2";


const MyRow = ({imgname}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "512px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "25px 0px",
        borderBottom: "2px solid whitesmoke",
      }}
    >
      <MyRowBox img={imgname} />
      <Loading load={"60%"} />
      <MyRowBox2 />
    </div>
  );
};

export default MyRow;
