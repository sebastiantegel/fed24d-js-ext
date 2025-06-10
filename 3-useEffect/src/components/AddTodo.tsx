import { useState, type FormEvent } from "react";

type AddTodoProps = {
  add: (text: string) => void;
};

export const AddTodo = ({ add }: AddTodoProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    add(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button>Spara</button>
    </form>
  );
};
