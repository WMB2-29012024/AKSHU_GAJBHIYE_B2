import React, { useRef, useState } from "react";
import MyBtn from "./component/MyBtn";
import info from "./assets/info.png";

const App = () => {
  const [Count, setCount] = useState(1);
  const first = useRef("");
  let imgurl = "";

  const fetchedData = async () => {
    let url = `https://jsonplaceholder.typicode.com/albums/${Count}/photos`;
    let data = await fetch(url);
    let res = await data.json();
    console.log(res);
    first.current.innerText = res[0]["title"];
    imgurl = res[0]["url"];

    setCount(Count + 1);
  };
  const fetchePredData = async () => {
    let url = `https://jsonplaceholder.typicode.com/albums/${Count}/photos`;
    let data = await fetch(url);
    let res = await data.json();
    console.log(res);
    first.current.innerText = res[0]["title"];
    imgurl = res[0]["url"];
    setCount(Count - 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <MyBtn name={"Pre"} click={fetchePredData} />
      <div className="box">
        <div className="box-inner">
          <div className="box-inner-cir"></div>
          <h4 className="cart-h4">Rani Park {Count} </h4>
          <h4 className="cart-h4">Host</h4>
        </div>
        <p className="cart-con" ref={first}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nemo
          ratione culpa!
        </p>
        <img src={imgurl} alt="" />
      </div>
      <MyBtn name={"Next"} click={fetchedData} />
    </div>
  );
};

export default App;
