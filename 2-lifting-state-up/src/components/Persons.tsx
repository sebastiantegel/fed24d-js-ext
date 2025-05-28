import type { Person } from "../models/Person";
import { PersonPresentation } from "./PersonPresentation";

type PersonsProps = {
  persons: Person[];
  editPerson: (id: number) => void;
};

export const Persons = ({ persons, editPerson }: PersonsProps) => {
  return (
    <div className="persons">
      {persons.map((p) => (
        <PersonPresentation key={p.id} person={p} editPerson={editPerson} />
      ))}
    </div>
  );
};
