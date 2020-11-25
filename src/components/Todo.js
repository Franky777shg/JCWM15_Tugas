import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleCompleted, removeTodo }) {
  function handleCheckboxClick() {
    toggleCompleted(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox
        checked={todo.completed}
        type="checkbox"
        onClick={handleCheckboxClick}
      />
      <Typography
        variant="body1"
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
