import { useContext } from "react";
import { BasicContext } from "../contexts/BasicContext";
import { Child } from "./Child";

export const BasicComponent = () => {
  const valueFromContext = useContext(BasicContext);

  return (
    <>
      <h2>{valueFromContext} - Hej hej</h2>
      <Child />
    </>
  );
};
