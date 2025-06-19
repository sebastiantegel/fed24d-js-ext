import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const Todos = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={() => removeTodo(t.id)}>Ta bort</button>
          <button onClick={() => toggleTodo(t.id)}>Ändra</button>
        </li>
      ))}
    </ul>
  );
};
