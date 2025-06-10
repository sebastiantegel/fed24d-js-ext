import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Car } from "./State";

export const Form = () => {
  const [car, setCar] = useState<Car>({
    id: Date.now(),
    brand: "",
    model: "",
    color: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Spara till databas...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="brand"
        value={car.brand}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        value={car.model}
        onChange={handleChange}
      />
      <input
        type="color"
        name="color"
        value={car.color}
        onChange={handleChange}
      />
      <button>Spara</button>
    </form>
  );
};
