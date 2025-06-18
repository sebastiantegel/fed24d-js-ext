import { useContext } from "react";
import { BasicContext } from "../contexts/BasicContext";
import { Button } from "./Button";

export const Child = () => {
  const value = useContext(BasicContext);

  return (
    <>
      Child: {value}
      <Button>Test</Button>
    </>
  );
};
