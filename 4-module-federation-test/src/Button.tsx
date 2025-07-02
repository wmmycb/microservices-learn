import React, { useState } from "react";
const Button = () => {
  const [i] = useState(0);
  return <button>Hello from remote - 4.{i}</button>;
};
export default Button;
