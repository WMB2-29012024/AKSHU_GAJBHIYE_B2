import React from "react";
import TableTitleRow from "./TableTitleRow";
import TableBodyData from "./TableBodyData";
import Frame from "../Assets/Frame.png";

const Body = () => {
  const data = [
    {
      userid: "#262626",
      product: {
        productimg:
          "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww",
        productname: "Hat",
      },
      customer: "Matt Dickerson",
      date: "13/05/2022",
      prize: "$4.95",
      bank: "Transfer Bank",
      deliver: {
        style: "don",
        status: "Done",
      },
      edit: Frame,
    },
    {
      userid: "#181818",
      product: {
        productimg:
          "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww",
        productname: "Pizza",
      },
      customer: "Suraj mohe",
      date: "6/05/2001",
      prize: "$10.95",
      bank: "Case on Delevery",
      deliver: {
        style: "del",
        status: "Cancle",
      },
      edit: Frame,
    },
    {
      userid: "#181818",
      product: {
        productimg:
          "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww",
        productname: "Pizza",
      },
      customer: "Suraj mohe",
      date: "6/05/2001",
      prize: "$10.95",
      bank: "Case on Delevery",
      deliver: {
        style: "can",
        status: "Deleverd",
      },
      edit: Frame,
    },
  ];

  return (
    <div className="main-body">
      <table style={{ width: "100%" }}>
        <TableTitleRow />
        {data.map((e, i) => {
          return (
            <TableBodyData
              id={data[i]["userid"]}
              product={data[i]["product"]["productname"]}
              productImg={data[i]["product"]["productimg"]}
              customer={data[i]["customer"]}
              date={data[i]["date"]}
              prize={data[i]["prize"]}
              bank={data[i]["bank"]}
              delever={data[i]["deliver"]["status"]}
              deleverstyle={data[i]["deliver"]["style"]}
              edit={data[i]["edit"]}
            />
          );
        })}
      </table>
    </div>
  );
};

export default Body;
