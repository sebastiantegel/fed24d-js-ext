import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodosContext, type ITodosContext } from "../contexts/TodosContext";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [state, setState] = useState<ITodosContext>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo: () => {},
  });

  state.addTodo = (text: string) => {
    setState({ ...state, todos: [...state.todos, new Todo(text)] });
  };

  state.removeTodo = (id: number) => {
    setState({ ...state, todos: state.todos.filter((t) => t.id !== id) });
  };

  state.toggleTodo = (id: number) => {
    setState({
      ...state,
      todos: state.todos.map((t) => {
        if (t.id === id) return { ...t, done: !t.done };
        return t;
      }),
    });
  };

  return (
    <TodosContext.Provider value={state}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>
  );
};
