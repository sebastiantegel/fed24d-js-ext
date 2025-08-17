import { Todo } from "../models/Todo";

type TodoAction = {
  type: string;
  payload: string;
};

export const TodoReducer = (todos: Todo[], action: TodoAction) => {
  if (action.type === "ADDED") {
    return [...todos, new Todo(action.payload)];
  }

  if (action.type === "REMOVED") {
    return todos.filter((t) => t.id !== +action.payload);
  }

  if (action.type === "TOGGLED") {
    return todos.map((t) => {
      if (t.id === +action.payload) return { ...t, done: !t.done };
      return t;
    });
  }

  return todos;
};
