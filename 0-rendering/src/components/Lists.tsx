type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};

export const Lists = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8]; // -> [<li>1</li>, <li>1</li>, ...]
  const persons: Person[] = [
    { name: "Sebastian", age: 45, isMarried: true },
    { name: "Hanna", age: 45, isMarried: true },
    { name: "Astrid", age: 14, isMarried: false },
    { name: "Alvar", age: 14, isMarried: false },
  ];

  //   const lis = numbers.map((n) => {
  //     return <li>{n}</li>;
  //   });

  //   return <ul>{lis}</ul>;

  return (
    <>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <div className="persons">
        {persons.map((person) => (
          <div key={person.name} className="person">
            <h3>{person.name}</h3>
            <p>{person.age}</p>
            <input type="checkbox" checked={person.isMarried} />
          </div>
        ))}
      </div>
    </>
  );
};
