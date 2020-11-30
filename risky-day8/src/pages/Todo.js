import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function Todo() {
  const [todos, setTodos] = useState([
    {
      name: "makan",
      isCompleted: false,
    },
  ]);

  const updatedTodos = (inputTodo) => {
    setTodos([...todos, { name: inputTodo, isCompleted: false }]);
  };

  const deleteTodo = (index) => {
    console.log(index);
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>This is Todo</h1>
      <TodoInput
        todos={todos}
        updatedTodos={(inputTodo) => updatedTodos(inputTodo)}
      />
      <TodoList todos={todos} deletingTodo={(index) => deleteTodo(index)} />
    </Container>
  );
}

export default Todo;
