import React from "react";
import deleticon from "../assets/deleticon.svg";
import cancleicon from "../assets/closeicon.svg";
import delet from "../assets/Button.png";
import canle from "../assets/btn2.png";

const DeletePop = ({
  check,
  handler,
  selectedIndex,
  main,
  setmain,
  setChecked,
}) => {
  function removeElementAtIndex(arr, index) {
    if (index < 0 || index >= arr.length) {
      return arr;
    }
    return arr.slice(0, index).concat(arr.slice(index + 1));
  }

  const deleeHandler = () => {
    const newData = removeElementAtIndex(main, selectedIndex);
    setmain(newData);
    setChecked("none");
  };

  return (
    <div
      className="deletepopup"
      style={{ display: `${check}`, padding: "20px" }}
    >
      <div
        className="delete-row"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <img src={deleticon} alt="" />
        <img onClick={handler} src={cancleicon} alt="" />
      </div>
      <div className="delete-content">
        <h4>Delete User?</h4>
        <p>
          Are you sure you want to delete this user? This action cannot be
          undone.
        </p>
        <img onClick={deleeHandler} src={delet} alt="" />
        <img onClick={handler} src={canle} alt="" />
      </div>
    </div>
  );
};

export default DeletePop;
