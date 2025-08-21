import { createContext, type Dispatch } from "react";
import type { Todo } from "../models/Todo";
import type { TodoAction } from "../reducers/TodoReducer";

type TodoContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});
