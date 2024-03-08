import { useState } from "react";
import { Todo } from "../types/todo-type";
import { sampleTodo } from "../assets/sampleTodo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([sampleTodo]);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    deleteTodo,
  };
};
