import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, toggleCompleted, removeTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
