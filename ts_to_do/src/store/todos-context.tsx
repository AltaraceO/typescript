import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

interface MyProps {
  children?: React.ReactNode;
}

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<MyProps> = (props) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todo,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
