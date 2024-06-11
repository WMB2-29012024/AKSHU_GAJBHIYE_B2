import React from "react";
import HeaderEntri from "./HeaderEntri";
import SearchInput from "./SearchInput";
import HeaderBtn from "./HeaderBtn";

const Header = ({ data, setData }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "4rem",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <HeaderEntri />
        <SearchInput ddata={data} setdata={setData} />
      </div>
      <HeaderBtn />
    </div>
  );
};

export default Header;
