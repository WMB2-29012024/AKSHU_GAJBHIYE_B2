import React from "react";

const Form = ({ set }) => {
  const fetchedData = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${e.target.inputvalue.value}`
    );
    const res = await data.json();
    set(res);
  };

  return (
    <div>
      <form onSubmit={fetchedData}>
        <input
          type="text"
          id="inputvalue"
          placeholder="Keep your id inside"
          onChange={(e) => {
            set(e.target.value);
          }}
        />
        <button>Click me</button>
      </form>
    </div>
  );
};

export default Form;
