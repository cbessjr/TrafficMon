import React, { Component } from "react";
import Navigation from "../components/Navigation";
import NewUserForm from "../components/NewUserForm";
import ContainerDiv from "../components/ContainerDiv";
import Footer from "../components/Footer";
import API from "../utils/API";
import "../index.css";

class NewUser extends Component {
  state = {
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { userName, password } = this.state;
    this.setState({ userName: "", password: "" }, () => {
      API.users
        .createUser({ userName, password })
        .then(res => {
          if (res.data) {
            this.props.history.push("/login");
          }
          alert("Thank you for creating an account, please log in");
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <ContainerDiv>
          <NewUserForm
            values={this.state}
            onChange={this.handleInputChange}
            onClick={this.handleFormSubmit}
          />
        </ContainerDiv>
        <Footer />
      </div>
    );
  }
}

export default NewUser;
