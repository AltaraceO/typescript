import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";

export const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};
