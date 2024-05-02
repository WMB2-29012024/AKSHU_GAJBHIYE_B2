import React from "react";

const Formcomponent = ({ setTextValue }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.txt.value);
          setTextValue(e.target.txt.value)
        }}
      >
        <input id="txt" type="text" />
      </form>
    </div>
  );
};

export default Formcomponent;
