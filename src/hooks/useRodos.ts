import { useState } from "react";
import { Todo } from "../types/todo-type";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  return {
    todos,
    addTodo,
  };
};
