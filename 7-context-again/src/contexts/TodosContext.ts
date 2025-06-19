import { createContext } from "react";
import type { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});
