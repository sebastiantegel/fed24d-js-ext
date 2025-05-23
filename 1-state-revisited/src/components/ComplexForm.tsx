import { useState, type ChangeEvent, type FormEvent } from "react";
import { Person } from "../models/Person";

export const ComplexForm = () => {
  const [person, setPerson] = useState<Person>(new Person("", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case "text":
        setPerson({ ...person, [e.target.id]: e.target.value });
        break;

      case "number":
        setPerson({ ...person, [e.target.id]: e.target.valueAsNumber });
        break;

      case "checkbox":
        setPerson({ ...person, [e.target.id]: e.target.checked });
        break;
    }

    // if (e.target.type === "text") {
    //   setPerson({ ...person, [e.target.id]: e.target.value });
    // }

    // if (e.target.type === "number") {
    //   setPerson({ ...person, [e.target.id]: e.target.valueAsNumber });
    // }

    // if (e.target.type === "checkbox") {
    //   setPerson({ ...person, [e.target.id]: e.target.checked });
    // }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log("Person:", person);

    // const response = await fetch("...", {
    //   method: "POST",
    //   body: JSON.stringify(person),
    // });

    // if (!response.ok) {
    //   //Skapa felmeddelande
    // } else {
    //   // Visa att det gick bra
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={person.name}
          onChange={handleChange}
          id="name"
        />
        <input
          type="number"
          value={person.age}
          onChange={handleChange}
          id="age"
        />
        <input
          type="checkbox"
          checked={person.isMarried}
          onChange={handleChange}
          id="isMarried"
        />
        <button>Spara</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </>
  );
};
