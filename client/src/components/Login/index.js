import React from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <button variant="login">
          <Link to={"/"}>
            <strong>Submit</strong>
          </Link>
        </button>
      </Form>
      <button variant="register">
        <Link to={"/NewUser"}>
          <strong>register</strong>
        </Link>
      </button>
    </div>
  );
}
export default Login;
