import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function TableBody() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8000/table").then((res) => {
      setData(res.data);
    });
  }, []);

  const onChangeInput = (e) => {
    const key = e.target.attributes.name.value;
    const value = e.target.value;
    setInputData({ ...inputData, [key]: value });
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/table", inputData)
      .then((res) => {
        setData([
          ...data,
          {
            id: data[data.length - 1].id + 1,
            ...inputData,
          },
        ]);
        setInputData({
          firstName: "",
          lastName: "",
          email: "",
        });
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:8000/table/${id}`)
        .then(() => {
          setData(data.filter((el) => el.id != id));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <tbody>
      {data.map((el, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{el.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.email}</td>
          <td className="text-center">
            <Button variant="info" className="mr-3">
              EDIT
            </Button>
            <Button
              variant="danger"
              className="ml-3"
              onClick={() => handleDelete(el.id)}
            >
              DELETE
            </Button>
          </td>
        </tr>
      ))}
      <tr>
        <td>#</td>
        <td>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter First Name..."
              value={inputData.firstName}
              name="firstName"
              onChange={onChangeInput}
            />
          </Form.Group>
        </td>
        <td>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Last Name..."
              value={inputData.lastName}
              name="lastName"
              onChange={onChangeInput}
            />
          </Form.Group>
        </td>
        <td>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter Email..."
              value={inputData.email}
              name="email"
              onChange={onChangeInput}
            />
          </Form.Group>
        </td>
        <td>
          <Button variant="primary" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

export default TableBody;
