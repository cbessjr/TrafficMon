import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./style.css";

function NewUserForm(props) {
  return (
    <div className="container backgroundcolor newuser">
      <h2 className="text-center">
        Welcome to Traffic<span className="text-danger">Mon</span>!
          </h2>
      <form
        className="d-flex justify-content-center"
        onSubmit={props.handleSubmit}
      >
        <Row className="row newuser">
          <Col lg={5} xs={12}>
            <label>
              User Name:
                  <input
                type="text"
                name="userName"
                value={props.value}
                onChange={props.onChange}
              />
            </label>
          </Col>
          <Col lg={5} xs={12}>
            <label>
              Password:
                  <input
                type="password"
                name="password"
                value={props.value}
                onChange={props.onChange}
              />
            </label>
          </Col>

          <Button className="button newuser" onClick={props.onClick} variant="primary" size="lg">
            Submit
              </Button>
        </Row>
      </form>
    </div>
  );
}

export default NewUserForm;
