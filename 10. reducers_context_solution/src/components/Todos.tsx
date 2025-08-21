import { useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import { TodoActionTypes } from "../reducers/TodoReducer";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={todo.done ? "done" : ""}>{todo.text}</span>
          <button
            onClick={() =>
              dispatch({
                type: TodoActionTypes.REMOVED,
                payload: todo.id.toString(),
              })
            }
          >
            Ta bort
          </button>
          <button
            onClick={() =>
              dispatch({
                type: TodoActionTypes.TOGGLED,
                payload: todo.id.toString(),
              })
            }
          >
            Ändra
          </button>
        </li>
      ))}
    </ul>
  );
};
