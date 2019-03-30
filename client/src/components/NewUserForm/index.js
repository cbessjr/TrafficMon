import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./style.css";

function NewUserForm(props) {
  return (
    <div className="container">
      <div className="container background-color">
        <div className="backgroundColor">
          <h2 className="text-center">
            Welcome to Traffic<span className="text-danger">Mon</span>!
          </h2>
          <form
            className="d-flex justify-content-center"
            onSubmit={props.handleSubmit}
          >
            <Row>
              <Col lg={5} xs={12}>
                <label>
                  User Name:
                  <input
                    type="text"
                    name="userName"
                    value={props.values.userName}
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
                    value={props.values.password}
                    onChange={props.onChange}
                  />
                </label>
              </Col>

              <Button onClick={props.onClick} variant="primary" size="lg">
                Submit
              </Button>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
