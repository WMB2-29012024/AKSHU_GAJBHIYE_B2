import React from "react";
import CardList from "./component/CardList";

const App = () => {
  const names = [
    "Rohan",
    "Sanjay",
    "Rohit",
    "Suman",
    "Darshit",
    "Sony",
    "Rahul",
  ];
  return (
    <div>
      <CardList name={names} />
    </div>
  );
};

export default App;
