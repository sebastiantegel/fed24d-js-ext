import type { Person } from "../models/Person";

type PersonPresentationProps = {
  person: Person;
  editPerson: (id: number) => void;
};

export const PersonPresentation = ({
  person,
  editPerson,
}: PersonPresentationProps) => {
  if (person.inEdit) {
    return (
      <div className="person">
        <input value={person.name} />
        <input value={person.age} />
      </div>
    );
  }

  return (
    <div className="person">
      <h4>{person.name}</h4>
      <p>{person.age}</p>
      <button onClick={() => editPerson(person.id)}>Edit</button>
      <button>Remove</button>
    </div>
  );
};
