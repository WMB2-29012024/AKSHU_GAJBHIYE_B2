import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "lightgreen",
      }}
    >
      <div className="logo">Logo</div>
      <div className="menu" style={{ display: "flex", gap: "1.6rem" }}>
        <Link to="/">Home</Link>
        <button onClick={() => navigate("/contact", { state: "suraj dalal" })}>
          {" "}
          Go to About page{" "}
        </button>
        <Link to="/contact">Contact</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">About</Link>
      </div>
    </div>
  );
};

export default Nav;
