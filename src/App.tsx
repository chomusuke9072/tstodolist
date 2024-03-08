import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodos } from "./hooks/useRodos";

const App = () => {
  const { addTodo, todos } = useTodos();
  return (
    <main>
      <TodoForm addTodo={addTodo} />
      <TodoList todoTitle="In Progress" todos={todos} />
      <TodoList todoTitle="Done" todos={todos} />
    </main>
  );
};

export default App;
