import React, { useEffect } from "react";

const Task = () => {
  useEffect(() => {
    // const fetchedDatad = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // };
    // fetchedDatad();

    //then catch

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((data) => data.json())
    //   .then((data) => console.log(data))
    //   .catch((e) => console.log("no data found"));

    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Task;
