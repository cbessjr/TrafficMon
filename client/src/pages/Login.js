import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation";
import API from "../utils/API";
import AppContext from '../AppContext';
import ContainerDiv from "../components/ContainerDiv";
import Footer from '../components/Footer';

class Login extends Component {
	static contextType = AppContext

	state = {
		username: "",
		password: ""
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.users.login(this.state)
			.then(res => {
				console.log(res.data)
				if (res.data.userName) {
					this.getUser();
					this.props.history.push("/");
				}
			})
			.catch(err => console.log(err));
	}

	getUser = () => {
		API.users.getUser()
			.then(
				res => {
					if (res.data.username && res.data.id) {
						this.context.setUser(res.data);
					}
				}
			).catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<Navigation />
				<ContainerDiv>
					<LoginForm
						onChange={this.handleInputChange}
						onClick={this.handleFormSubmit}
					/>
				</ContainerDiv>
				<Footer />
			</div>
		)
	}
}

export default Login;