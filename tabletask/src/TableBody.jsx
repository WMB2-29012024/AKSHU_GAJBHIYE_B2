import React, { useState } from "react";
import edit from "../src/assets/edit.svg";
import delet from "../src/assets/delete.svg";
import DeletePop from "./component/DeletePop";
import { Link, useNavigate } from "react-router-dom";
import UserForm from "./pages/UserForm";

const TableBody = ({ data, setdata }) => {
  const navigate = useNavigate();
  const url = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtvcmVhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  ];

  const [Checked, setChecked] = useState("none");
  let [first, setfirst] = useState(0);

  let flag = false;
  const checkHandler = (idx) => {
    setfirst(idx);
    if (flag === false) {
      setChecked("block");
      flag = true;
    } else {
      setChecked("none");
      flag = false;
    }
  };

  const editHandler = (idx) => {
    setfirst(idx);
    navigate("/user",{state:{idx}});
  };

  return (
    <>
      <DeletePop
        check={Checked}
        handler={checkHandler}
        selectedIndex={first}
        main={data}
        setmain={setdata}
        setChecked={setChecked}
      />
      {data.map((e, idx) => {
        return (
          <tr>
            <td> {e.id} </td>
            <td>
              <div className="name-box">
                <img
                  src={idx % 2 === 0 ? url[0] : url[1]}
                  alt=""
                  style={{ width: "55px", borderRadius: "5px" }}
                />
                {e.name}
              </div>
            </td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td> {e.address["suite"]} </td>
            <td> {e.phone} </td>
            <td> {e.website} </td>
            <td> {e.company["name"]} </td>
            <td style={{ display: "flex", gap: "10px" }}>
              <img onClick={() => editHandler(idx)} src={edit} alt="" />

              <img onClick={() => checkHandler(idx)} src={delet} alt="" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
