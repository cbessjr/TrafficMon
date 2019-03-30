import React, { Component } from "react";
import NewReportForm from "../components/NewReportForm";
import Navbar from "../components/Navigation";
import API from "../utils/API";
import AppContext from "../AppContext";
import Footer from "../components/Footer";
import NotLoggedIn from "../components/NotLoggedIn";

let reportPage;

class NewReport extends Component {
  static contextType = AppContext;

  state = {
    type: "",
    description: "",
    location: "",
    city: "",
    state: "",
    UserId: this.context.user.id
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.reports
      .createReport(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  checkLoggedIn = () => {
    if (this.context.user.anonymous !== true) {
      reportPage = (
        <div>
          <NewReportForm
            onChange={this.handleInputChange}
            onClick={this.handleFormSubmit}
          />
        </div>
      );
    } else {
      reportPage = (
        <div>
          <NotLoggedIn />
        </div>
      );
    }
  };

  render() {
    this.checkLoggedIn();
    return (
      <div>
        <Navbar />
        {reportPage}
        <Footer />
      </div>
    );
  }
}

export default NewReport;
