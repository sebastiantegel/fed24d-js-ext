import { useContext, useState, type FormEvent } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(userInput);
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
