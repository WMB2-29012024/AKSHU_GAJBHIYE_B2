import React from "react";

const Card = () => {
  const ransom = Math.floor(Math.random() * 100);

  return (
    <div
      style={{
        width: "25rem",
        height: "auto",
        backgroundColor: `${ransom % 2 ? "red" : "green"}`,
        color: "white",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <h1>
        {ransom % 2
          ? `this is odd number ${ransom} `
          : `this is Even number ${ransom}`}
      </h1>
      {!!(ransom % 2) && <h3>This is Odd card</h3>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam
        quidem ab perspiciatis sequi repellat tempora delectus, quibusdam
        tempore eaque?
      </p>
    </div>
  );
};

export default Card;
