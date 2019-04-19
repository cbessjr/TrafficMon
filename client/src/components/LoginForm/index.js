import React from "react";
import { Col, Row } from "react-bootstrap";

function LoginForm(props) {
  return (
    <div className="text-center mb-4">
      <h2>
        Log in to Traffic<span className="text-danger">Mon</span>!
      </h2>
      <h5 className="text-center">
        Please log in to create reports and view or edit your
        reports.
      </h5>
      <form className="text-center mt-4" onSubmit={props.handleSubmit}>
        <label>
          <strong>User Name:</strong>
          <input
            type="text"
            name="username"
            value={props.value}
            onChange={props.onChange}
          />
        </label>

        <label>
          <strong className="ml-2">Password:</strong>
          <input
            type="password"
            name="password"
            value={props.value}
            onChange={props.onChange}
          />
        </label>
        <Row>
          <Col lg={10}>
            <button
              className="btn btn-primary ml-2 float-right"
              onClick={props.onClick}
              variant="primary"
              size="sm"
            >
              Submit
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default LoginForm;
