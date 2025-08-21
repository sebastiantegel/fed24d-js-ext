import { Todo } from "../models/Todo";

export enum TodoActionTypes {
  ADDED,
  REMOVED,
  TOGGLED,
}

export type TodoAction = {
  type: TodoActionTypes;
  payload: string;
};

export const TodoReducer = (todos: Todo[], action: TodoAction) => {
  if (action.type === TodoActionTypes.ADDED) {
    return [...todos, new Todo(action.payload)];
  }

  if (action.type === TodoActionTypes.REMOVED) {
    return todos.filter((t) => t.id !== +action.payload);
  }

  if (action.type === TodoActionTypes.TOGGLED) {
    return todos.map((t) => {
      if (t.id === +action.payload) return { ...t, done: !t.done };
      return t;
    });
  }

  return todos;
};
