import React from "react";
import "./style.css";
import ContainerDiv from "../ContainerDiv";
import { Row, Col } from "react-bootstrap";

function NotLoggedIn(props) {
  return (
    <ContainerDiv>
      <Row>
				<Col className="text-center">
        <h1 className="display-4">Not Logged In</h1>
        <p className="lead">
          Sorry! You have to be logged in in order to use this feature
        </p>
        <p>Please login to submit reports</p>
        <div className="lead">
          <a
            className="btn btn-primary btn-lg ml-2"
            href="/login"
            role="button"
          >
            Login
          </a>

          <div className="divider" />
          <a className="btn btn-primary btn-lg" href="/new-user" role="button">
            Create an Account
          </a>
        </div>
				</Col>
      </Row>
    </ContainerDiv>
  );
}

export default NotLoggedIn;
