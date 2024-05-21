import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import TableBody from "./TableBody";

const Tabletask = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => {
        console.log(Object.keys(res[0]));
        console.log(res);
        setData(res);
      })
      .catch((e) => console.log("error"));
  }, []);

  return (
    <table style={{ width: "100%", textAlign: "center" }}>
      <TableRow data={Data} />
      <TableBody data={Data} />
    </table>
  );
};

export default Tabletask;
