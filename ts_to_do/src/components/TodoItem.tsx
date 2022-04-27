import React from "react";
import classes from "./TodoItem.module.css";

export const TodoItem: React.FC<{
  onRemoveTodo: () => void;
  text: string;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};
