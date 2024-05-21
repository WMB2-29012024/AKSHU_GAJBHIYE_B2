import React from "react";

const HeaderEntri = () => {
  return (
    <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
      <h4 className="header-h4">Show</h4>
      <select className="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <h4 className="header-h4">entries</h4>
    </div>
  );
};

export default HeaderEntri;