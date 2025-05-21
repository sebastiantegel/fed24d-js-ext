import { useState } from "react";

export const SimpleState = () => {
  // let x = 10;
  const [x, setX] = useState(10);

  const changeX = () => {
    // x++;
    setX(x + 1);
  };

  console.log("X:", x);

  return (
    <>
      <button onClick={changeX}>Ändra</button>
      {x}
    </>
  );
};
