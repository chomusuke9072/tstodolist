import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodos } from "./hooks/useRodos";

const App = () => {
  const { addTodo, todos, deleteTodo } = useTodos();
  return (
    <main>
      <TodoForm addTodo={addTodo} />
      <TodoList todoTitle="In Progress" todos={todos} deleteTodo={deleteTodo} />
      <TodoList todoTitle="Done" todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
};

export default App;
