import React from "react";

const TableBodyData = ({
  id,
  product,
  productImg,
  customer,
  date,
  prize,
  bank,
  delever,
  edit,
  deleverstyle,
}) => {
  return (
    <tbody style={{ textAlign: "center" }}>
      <tr>
        <td>{id}</td>
        <td style={{display:'flex',gap:'10px',justifyContent:'center'}}>
          <img
            src={productImg}
            style={{ width: "30px", height: "30px" }}
            alt=""
          />
          {product}
        </td>
        <td>{customer} </td>
        <td>{date} </td>
        <td>{prize} </td>
        <td>{bank} </td>
        <td>
          <h6 className={deleverstyle}>{delever}</h6>
        </td>
        <td>
          <img src={edit} alt="" />
        </td>
      </tr>
    </tbody>
  );
};

export default TableBodyData;
