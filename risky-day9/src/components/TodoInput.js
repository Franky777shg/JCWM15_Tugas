import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function TodoList({ todos, updatedTodos }) {
  const [inputTodo, setInputTodo] = useState("");

  const onSubmitTodo = (e) => {
    e.preventDefault();
    updatedTodos(inputTodo);
    setInputTodo("");
  };

  const onChangeData = (e) => {
    const value = e.target.value;
    setInputTodo(value);
  };

  return (
    <Container>
      <Form onSubmit={onSubmitTodo}>
        <Form.Group
          controlId="formBasicEmail"
          style={{ paddingLeft: "300px", paddingRight: "300px" }}
        >
          <Form.Label>Add Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="What are you gonna do today?"
            name="todo"
            // ref={todo}
            value={inputTodo}
            onChange={onChangeData}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default TodoList;
