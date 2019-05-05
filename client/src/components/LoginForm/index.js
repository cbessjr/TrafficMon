import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const formStyle = {
  justifyContent: "center",
  marginBottom: "2rem"
};

const formMargin = {
  justifyContent: "center",
  marginBottom: "2rem",
  marginTop: "3rem"
};


function LoginForm(props) {
  return (
    <div className="text-center mb-4">
      <h2>
        Log in to Traffic<span className="text-danger">Mon</span>!
      </h2>
      <h5 className="text-center">
        Please log in to create reports and view or edit your reports.
      </h5>
      <Form className="text-center mt-4" onSubmit={props.handleSubmit}>
        <Form.Group as={Row} style={formMargin}>
          <strong>User Name:</strong>
          <Col xs={true} lg={6}>
            <Form.Control
              type="text"
              name="username"
              value={props.value}
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={formStyle}>
          <strong className="ml-2">Password:</strong>
          <Col xs={true}lg={6}>
          <Form.Control
            type="password"
            name="password"
            value={props.value}
            onChange={props.onChange}
          />
          </Col>
        </Form.Group>
        <Row>
          <Col lg={10}>
            <button
              className="btn btn-primary ml-2 mt-4 float-right"
              onClick={props.onClick}
              variant="primary"
              size="sm"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </div>
    // </div>
  );
}

export default LoginForm;
