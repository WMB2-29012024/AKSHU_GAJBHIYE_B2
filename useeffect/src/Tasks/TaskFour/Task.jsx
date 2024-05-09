import React, { useState } from "react";
import Form from "./componenet/Form";
import Box from "./componenet/Box";

const Task = () => {
  const [Count, setCount] = useState([]);

  return (
    <div>
      <Form set={setCount} />
      <Box count={Count} />
    </div>
  );
};

export default Task;
