import { useState } from "react";
import { Person } from "../models/Person";

export const ObjectInState = () => {
  const [me, setMe] = useState<Person>(new Person("Sebastian", 45, true));

  // me = { name: "Sebastian", age: 45, isMarried: true}

  const changeAge = () => {
    // { name: "Sebastian", age: 46, isMarried: true}
    setMe({ ...me, age: me.age + 1 });
  };

  return (
    <div>
      <h3>{me.name}</h3>
      <p>{me.age}</p>
      <button onClick={changeAge}>Happy birthday!</button>
    </div>
  );
};
