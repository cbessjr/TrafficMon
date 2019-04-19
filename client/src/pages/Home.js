import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";
import Footer from '../components/Footer'
import API from "../utils/API";
import AppContext from '../AppContext';
import CustomPage from "../components/CustomPage";

let customPage;
let customTable;
let userId;
let reportId;

class Home extends Component {
	static contextType = AppContext

	state = {
		user: {},
		userReports: []
	};

	componentDidMount() {
		this.getUser();
	};

	getUser = () => {
		API.users.getUser()
			.then(
				res => {
					if (res.data.username && res.data.id) {
						this.setState({
							user: {
								username: res.data.username,
								id: res.data.id
							}
						})
						//console.log(this.context.user.username);
						this.getUserReports();
					};
				}
			).catch(err => console.log(err));
	};

	checkUserLogged = () => {
		if (this.context.user.anonymous !== true) {
			customPage = (
				<div>
					<CustomPage
						username={this.context.user.username}
						reports={this.state.userReports}
						onClick={this.deleteUserReport}
					/>
					{customTable}
				</div>
			);
		} else {
			customPage = (
				<Welcome />
			);
		};
	};

	getUserReports = () => {
		userId = this.state.user.id;
		API.reports.getReportById(userId)
			.then(res => {
				if (res.data) {
					//console.log(res.data);
					this.setState({
						userReports: res.data
					});
				} else {
					console.log("No reports");
				};
			});
	};

	deleteUserReport = (event) => {
		reportId = event.target.id;
		userId = this.state.user.id;
		API.reports.deleteReport(reportId)
			.then(() => {
				this.getUserReports();
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		this.checkUserLogged();

		return (
			<div>
				<Navigation />
				{customPage}
				<Footer />
			</div>
		);
	};
};

export default Home;