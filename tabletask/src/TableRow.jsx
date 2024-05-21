import React from "react";

const TableRow = ({ data }) => {
  console.log(data[0]);
  // console.log(Object.keys(data[0]));

  return (
    <tr>
      <th>id</th>
      <th>name</th>
      <th>username</th>
      <th>email</th>
      <th>Suits</th>
      <th>phone</th>
      <th>website</th>
      <th>company</th>
    </tr>
  );
};

export default TableRow;
