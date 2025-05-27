import { useState, type ChangeEvent, type FormEvent } from "react";
import { Person } from "../models/Person";
import { PersonsList } from "./PersonsList";
import { Button } from "./Button";

export const PersonsApp = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person(1, "Sebastian", 45, true),
  ]);
  const [person, setPerson] = useState<Person>(new Person(0, "", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.id]: +e.target.value });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.id]: e.target.checked });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setPersons([...persons, person]);
    setPerson(new Person(0, "", 0, false));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            id="id"
            value={person.id}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            value={person.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="age">Ålder:</label>
          <input
            type="number"
            id="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="isMarried">Gift:</label>
          <input
            type="checkbox"
            id="isMarried"
            checked={person.isMarried}
            onChange={handleChange}
          />
        </div>
        <Button>Spara</Button>
      </form>

      {/* PersonsList({ persons: [{ name: "Sebastian" }]}) */}
      <PersonsList persons={persons} />
    </>
  );
};
