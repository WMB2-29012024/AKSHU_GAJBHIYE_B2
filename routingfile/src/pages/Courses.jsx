import React from "react";
import { useParams } from "react-router-dom";

const Courses = () => {
  const param = useParams();
  return <div>Courses {param.coursename} </div>;
};

export default Courses;
