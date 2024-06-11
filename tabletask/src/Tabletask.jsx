import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import Header from "./component/Header";
import Bottom from "./component/Bottom";

const Tabletask = ({Data,setData}) => {
 

  return (
    <>
    <Header data={Data} setData={setData} />
      <table style={{ width: "100%", textAlign: "center" }}>
        <TableRow data={Data} />
        <TableBody data={Data} setdata={setData} />
      </table>
      <Bottom/>
    </>
  );
};

export default Tabletask;
