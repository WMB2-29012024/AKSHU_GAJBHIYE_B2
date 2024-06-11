import React, { useEffect, useState } from "react";
import Tabletask from "./Tabletask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";

const App = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => {
        console.log(Object.keys(res[0]));
        console.log(res);
        setData(res);
      })
      .catch((e) => console.log("error"));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Tabletask Data={Data} setData={setData} />}
          />
          <Route path="/user" element={<UserForm Data={Data} setData={setData}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
