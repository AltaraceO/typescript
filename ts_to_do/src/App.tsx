import { useState } from "react";

import "./App.css";
import { Todos } from "./components/Todos";
import Todo from "./models/todo";
import { NewTodo } from "./components/NewTodo";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todo} />
    </div>
  );
}

export default App;
