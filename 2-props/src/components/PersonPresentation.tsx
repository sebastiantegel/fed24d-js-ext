import type { Person } from "../models/Person";

type PersonPresentationProps = {
  person: Person;
};

export const PersonPresentation = ({ person }: PersonPresentationProps) => {
  return (
    <>
      <h2>{person.name}</h2>
      <p>{person.age}</p>
      <input type="checkbox" checked={person.isMarried} />
    </>
  );
};
