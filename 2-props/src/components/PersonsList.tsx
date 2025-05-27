import type { Person } from "../models/Person";
import { PersonPresentation } from "./PersonPresentation";

type PersonsListProps = {
  persons: Person[];
};

export const PersonsList = ({ persons }: PersonsListProps) => {
  return (
    <>
      {persons.map((p) => (
        <PersonPresentation person={p} />
      ))}
    </>
  );
};
