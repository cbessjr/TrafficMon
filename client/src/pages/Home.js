import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";
// import TrafficMonMap from '../components/Map';
import Footer from '../components/Footer'
import API from "../utils/API";
import AppContext from '../AppContext';
import CustomPage from "../components/CustomPage";
// import { Table, THead, TBody, TRow } from "../components/SearchResults";

let customPage;
let customTable;

class Home extends Component {
	static contextType = AppContext

	state = {
		user: {},
		userReports: []
	}

	componentDidMount() {
		this.getUser();
	}

	getUser = () => {
		API.users.getUser()
			.then(
				res => {
					//console.log(res.data);
					if (res.data.username && res.data.id) {
						//this.context.setUser(res.data);
						this.setState({
							user: {
								username: res.data.username,
								id: res.data.id
							}
						})
						console.log(this.context.user.username);
						this.getUserReports();
					}
				}
			).catch(err => console.log(err));
	}

	checkUserLogged = () => {
		if (this.context.user.anonymous !== true) {
			
			customPage = (
				<div>
					<CustomPage
						username={this.context.user.username}
						reports={this.state.userReports}
					/>
					{customTable}
				</div>
			);
		} else {
			customPage = (
				<Welcome />
			)
		};
	};

	getUserReports = () => {
		let userId = this.state.user.id
		API.reports.getReportById(userId)
			.then(res => {
				if (res.data) {
					console.log(res.data);
					this.setState({
						userReports: res.data
					});
				} else {
					console.log("No reports");
				}
			})
	}


	render() {
		this.checkUserLogged();

		return (
			<div>
				<Navigation />
				{customPage}
				<Footer />
			</div>
		)
	}
}

export default Home;