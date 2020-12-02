import React from "react";

import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>THIS IS HOME</h1>
        <Link to="/link" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="secondary" size="md">
            To link
          </Button>
        </Link>
      </div>
    );
  }
}
export default Home;
