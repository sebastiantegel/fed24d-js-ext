import { useState, type ChangeEvent, type FormEvent } from "react";
import { Person } from "../models/Person";

type AddPersonProps = {
  addPerson: (p: Person) => void;
};

export const AddPerson = ({ addPerson }: AddPersonProps) => {
  const [person, setPerson] = useState<Person>(new Person("", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      //   setPerson({ ...person, [e.target.id]: +e.target.value });
      //   setPerson({ ...person, [e.target.id]: e.target.valueAsNumber });
      //   setPerson({ ...person, [e.target.id]: parseInt(e.target.value) });
      setPerson({ ...person, [e.target.id]: Number(e.target.value) });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.id]: e.target.checked });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addPerson(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        value={person.name}
        onChange={handleChange}
      />
      <input
        id="age"
        type="number"
        value={person.age}
        onChange={handleChange}
      />
      <input
        id="isMarried"
        type="checkbox"
        checked={person.isMarried}
        onChange={handleChange}
      />
      <button>Spara</button>
    </form>
  );
};
