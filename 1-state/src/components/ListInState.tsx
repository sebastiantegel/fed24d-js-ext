import { useState } from "react";
import { Person } from "../models/Person";

export const ListInState = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 45, true),
    new Person("Hanna", 45, true),
    new Person("Astrid", 14, false),
  ]);

  // Lägg till i listan
  const addPerson = () => {
    setPersons([...persons, new Person("Alvar", 14, false)]);
  };

  // Ta bort ur listan
  const removePerson = (name: string) => {
    console.log("Innan filter:", persons);
    console.log(
      "Efer filter:",
      persons.filter((p) => p.name !== name),
    );

    setPersons(persons.filter((p) => p.name !== name));
  };

  // Ändra objekt i listan
  const changePerson = (name: string) => {
    setPersons(
      persons.map((p) => {
        if (p.name === name) {
          return { ...p, age: p.age + 1 };
        }
        return p;
      }),
    );
  };

  return (
    <>
      <div>
        <button onClick={addPerson}>Lägg till</button>
        {persons.map((p) => (
          <div key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.age}</p>
            <button onClick={() => removePerson(p.name)}>Ta bort</button>
            <button onClick={() => changePerson(p.name)}>Ändra</button>
          </div>
        ))}
      </div>
    </>
  );
};
