import { GrandChild } from "./GrandChild";
import type { Car } from "./State";

type ChildProps = {
  cars: Car[];
  paintTheCar: (id: number, color: string) => void;
};

export const Child = ({ cars, paintTheCar }: ChildProps) => {
  return (
    <>
      {cars.map((c) => (
        <GrandChild car={c} paintTheCar={paintTheCar} />
      ))}
    </>
  );
};
