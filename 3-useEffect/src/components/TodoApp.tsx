import { useTodos } from "../hooks/useTodos";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { todos, add, remove, toggle } = useTodos();

  return (
    <>
      <AddTodo add={add} />
      <TodoList todos={todos} remove={remove} toggle={toggle} />
    </>
  );
};
