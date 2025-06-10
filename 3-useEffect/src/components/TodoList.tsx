import type { Todo } from "../models/Todo";

type TodoListProps = {
  todos: Todo[];
  remove: (id: number) => void;
  toggle: (id: number) => void;
};

export const TodoList = ({ todos, remove, toggle }: TodoListProps) => {
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <span className={t.done ? "done" : ""}>{t.text}</span>
          <button onClick={() => toggle(t.id)}>Ändra</button>
          <button onClick={() => remove(t.id)}>Ta bort</button>
        </li>
      ))}
    </ul>
  );
};
