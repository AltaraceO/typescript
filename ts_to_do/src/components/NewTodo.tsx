import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

export const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={onHandleSubmit} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
