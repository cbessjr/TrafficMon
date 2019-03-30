import React from "react";
import "./style.css";
import { Nav, ButtonGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import AppContext from '../../AppContext';

var moment = require("moment");

let dateAndTime;

export default class Navigation extends React.Component {
  static contextType = AppContext

  logoutClick = event => {
    event.preventDefault();
    API.users.logout().then(res => {
      //this.props.history.push("/logout");
      this.context.setUser({
        anonymous: true
      });
    });
  };
  getDateTime = () => {
    dateAndTime = moment().format("MMMM Do YYYY, h:mm a");
  };

  render() {
    this.getDateTime();
    return (
      <Navbar expand="lg" bg="dark">
        <Navbar.Brand>

          <span className="text-warning">Traffic</span>
          <span className="text-danger">Mon</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link as="strong">
            <Link to={"/"}>
              <strong>Home</strong>
            </Link>
          </Nav.Link>
          <Nav.Link as="strong">
            <Link to={"/new-user"}>
              <strong>New User</strong>
            </Link>
          </Nav.Link>
          <Nav.Link as="strong">
            <Link to={"/search"}>
              <strong>Search</strong>
            </Link>
          </Nav.Link>
          <Nav.Link as="strong">
            <Link to={"/new-report"}>
              <strong>New Report</strong>
            </Link>
          </Nav.Link>
          <Nav>
            {this.checkUserLogged}
            <ButtonGroup
              className="right btn btn-primary"
              size="small"
              variant="Login"
            >
              <Link to={"/login"}>
                <strong className="text-white">Login</strong>
              </Link>
            </ButtonGroup>
            <div className="divider" />
            <ButtonGroup
              className="right btn btn-danger"
              variant="Logout"
              onClick={this.logoutClick}
            >

              <strong>Logout</strong>
            </ButtonGroup>

            <Navbar.Text className="text-primary ml-2" as="strong">
              <strong>{dateAndTime}</strong>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
