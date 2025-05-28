import { useState } from "react";
import { AddPerson } from "./AddPerson";
import { Person } from "../models/Person";
import { Persons } from "./Persons";

export const PersonsApp = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const addPerson = (p: Person) => {
    setPersons([...persons, p]);
  };

  const editPerson = (id: number) => {
    setPersons(
      persons.map((p) => {
        if (p.id === id) {
          return { ...p, inEdit: !p.inEdit };
        }
        return p;
      }),
    );
  };

  return (
    <>
      <AddPerson addPerson={addPerson} />
      <Persons persons={persons} editPerson={editPerson} />
    </>
  );
};
