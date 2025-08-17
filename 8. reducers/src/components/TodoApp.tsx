import { useReducer, useState } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const TodoApp = () => {
  //   const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [userInput, setUserInput] = useState("");

  const addTodo = (text: string) => {
    // setTodos([...todos, new Todo(text)]);
    dispatch({
      type: "ADDED",
      payload: text,
    });
  };

  const removeTodo = (id: number) => {
    // setTodos(todos.filter((t) => t.id !== id));
    dispatch({
      type: "REMOVED",
      payload: id.toString(),
    });
  };

  const toggleTodo = (id: number) => {
    // setTodos(
    //   todos.map((t) => {
    //     if (t.id === id) return { ...t, done: !t.done };
    //     return t;
    //   }),
    // );
    dispatch({
      type: "TOGGLED",
      payload: id.toString(),
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(userInput);
          setUserInput("");
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.done ? "done" : ""}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
            <button onClick={() => toggleTodo(todo.id)}>Ändra</button>
          </li>
        ))}
      </ul>
    </>
  );
};
