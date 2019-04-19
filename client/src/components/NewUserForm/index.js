import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";

function NewUserForm(props) {
  return (
    <div className="container">
      <div className="container background-color">
        <div className="backgroundColor">
          <h2 className="text-center">
            Welcome to Traffic<span className="text-danger">Mon</span>!
          </h2>
          <h5 className="text-center">In order to create a report, you must create an account and log in.</h5>
          <form className="text-center mt-4 mb-4" onSubmit={props.handleSubmit}>
        
            <label>
              <strong>User Name:</strong>
              <input
                type="text"
                name="userName"
                value={props.values.userName}
                onChange={props.onChange}
              />
            </label>
           
            <label>
              <strong className="ml-2">Password:</strong>
              <input
                type="password"
                name="password"
                value={props.values.password}
                onChange={props.onChange}
              />
            </label>
            
            <Row>
              <Col lg={10}>
                <button
                  onClick={props.onClick}
                  className="btn btn-primary ml-2 float-right"
                >
                  Submit
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
