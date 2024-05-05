import React from "react";
import Card from "./Card";

const CardList = ({ name }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {name.map((e) => {
        return <Card name={e} />;
      })}
    </div>
  );
};

export default CardList;
