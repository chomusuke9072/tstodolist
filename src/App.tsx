import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

const App = () => {
  return (
    <main>
      <TodoForm />
      <TodoList todoTitle="In Progress" todos={[]} />
      <TodoList todoTitle="Done" todos={[]} />
    </main>
  );
};

export default App;
