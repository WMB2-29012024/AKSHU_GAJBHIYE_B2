import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Contact Page {location.state} </h1>
    </div>
  );
};

export default Contact;
