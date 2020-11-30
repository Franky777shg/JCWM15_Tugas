import React, { useState, useRef } from "react";
import { Row, Col, Overlay, Popover, Button } from "react-bootstrap";

export default function TodoList({ todos, deletingTodo }) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const popUp = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const deleteTodo = () => {
    deletingTodo(Number(target.id));
  };

  return (
    <>
      {todos.map((todo, i) => (
        <Row key={i}>
          <Col>
            <h3 ref={ref} id={i}>
              {todo.name}
            </h3>
          </Col>
          <Col>
            <i
              style={{ cursor: "pointer", marginLeft: "50px" }}
              className="far fa-edit"
            ></i>
            <i
              id={i}
              style={{ cursor: "pointer", marginLeft: "10px" }}
              className="far fa-times-circle"
              onClick={popUp}
            ></i>
            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref.current}
              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Title as="h3">Delete {todo.name}</Popover.Title>
                <Popover.Content>Are your sure?</Popover.Content>
                <Popover.Content>
                  <Button onClick={deleteTodo}>Yes</Button>
                </Popover.Content>
              </Popover>
            </Overlay>
          </Col>
        </Row>
      ))}
    </>
  );
}
