import React, { Component } from "react";
import Navigation from "../components/Navigation";
import LogoutPage from "../components/LogoutPage";
import Footer from '../components/Footer'

class Logout extends Component {

	render() {
		return(
			<div>
				<Navigation />
				<LogoutPage />
				<Footer />
			</div>
		);
	};
};

export default Logout;