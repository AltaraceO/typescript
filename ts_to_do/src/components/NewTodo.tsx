import React, { useRef } from "react";

export const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
