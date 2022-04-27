import "./App.css";
import { Todos } from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todo = [new Todo("Learn TypeScript"), new Todo("Another Thing")];
  return (
    <div>
      <Todos items={todo} />
    </div>
  );
}

export default App;
