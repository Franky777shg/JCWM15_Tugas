import React from "react";
import { TableHead, TableBody } from "../components";
import { Container, Table as TableRoot } from "react-bootstrap";

function Table() {
  return (
    <Container className="pt-5">
      <TableRoot striped bordered hover>
        <TableHead />
        <TableBody />
      </TableRoot>
    </Container>
  );
}

export default Table;
