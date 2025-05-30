import { useState } from "react";
import { Child } from "./Child";
import type { Car } from "./State";

export const Parent = () => {
  const [cars, setCars] = useState<Car[]>([
    { id: 1, brand: "Saab", model: "95", color: "Pink" },
  ]);

  const rePaint = (id: number, newColor: string): void => {
    setCars(
      cars.map((c) => {
        if (c.id === id) {
          return { ...c, color: newColor };
        }
        return c;
      })
    );
  };

  return (
    <>
      <Child cars={cars} paintTheCar={rePaint} />
    </>
  );
};
