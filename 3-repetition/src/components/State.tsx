import { useState } from "react";

export type Car = {
  id: number;
  brand: string;
  model: string;
  color: string;
};

export const State = () => {
  const [name, setName] = useState("");
  const [cars, setCars] = useState<Car[]>([
    { id: 1, brand: "Saab", model: "95", color: "Pink" },
  ]);

  const handleClick = () => {
    setName("Hanna"); // name = "Hanna"
  };

  // Lista i state
  // Lägg till -> spread [...cars]
  // Ta bort -> filter cars.filter()
  // Ändra objekt i listan -> map cars.map()

  const addCar = (car: Car) => {
    setCars([...cars, car]);
  };

  const removeCar = (id: number) => {
    setCars(cars.filter((c) => c.id !== id));
  };

  const rePaint = (id: number, color: string) => {
    setCars(
      cars.map((c) => {
        if (c.id === id) {
          return { ...c, color: color };
        }
        return c;
      })
    );
  };

  console.log(name); // name = "Hanna" (Efter handleClick)

  return <>State: {name}</>;
};
