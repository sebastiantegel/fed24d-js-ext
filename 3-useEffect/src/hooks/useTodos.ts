import { useState } from "react";
import { Todo } from "../models/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };

  const remove = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggle = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      }),
    );
  };

  return { todos, add, remove, toggle };
};
