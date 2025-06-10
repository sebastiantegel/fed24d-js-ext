import { useState } from "react";
import type { Car } from "./State";

type GrandChildProps = {
  car: Car;
  paintTheCar: (id: number, color: string) => void;
};

export const GrandChild = ({ car, paintTheCar }: GrandChildProps) => {
  const [newColor, setNewColor] = useState("");

  return (
    <div key={car.id}>
      {car.brand} - {car.model} - {car.color}
      <input
        type="color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={() => paintTheCar(car.id, newColor)}>Repaint</button>
    </div>
  );
};
