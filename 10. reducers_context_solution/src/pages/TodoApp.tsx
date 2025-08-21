import { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import { TodoContext } from "../contexts/TodosContext";
import { AddTodo } from "./../components/AddTodo";
import { Todos } from "./../components/Todos";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <AddTodo />

      <Todos />
    </TodoContext.Provider>
  );
};
