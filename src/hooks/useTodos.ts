import { useState } from "react";
import { DoneTodo, InProgressTodo, Todo } from "../types/todo-type";
import { sampleTodo } from "../assets/sampleTodo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([sampleTodo]);

  const inProgressTodos = todos.filter(
    (todo) => !todo.isDone
  ) as InProgressTodo[];
  const doneTodos = todos.filter((todo) => todo.isDone) as DoneTodo[];

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoDone = (id: string) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodoDone,
    inProgressTodos,
    doneTodos,
  };
};
