import { Child } from "./Child";

export const Parent = () => {
  const name = "Zeb";

  return (
    <>
      <h3>Parent</h3>

      {/* props = {} */}
      {/* <Child /> */}

      {/* props = { name: "Zeb" } */}
      <Child name={name} />
    </>
  );
};
