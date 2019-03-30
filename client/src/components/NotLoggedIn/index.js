import React from "react";
import './style.css';


function NotLoggedIn(props) {
	return (
		<div className="container notloggedin">
			<div className="row">
				<h1 className="display-4">Not Logged In</h1>
				<p className="lead">Sorry! You have to be logged in in order to use this feature</p>
				<hr className="text-center my-4" />
				<p>Please login to submit reports</p>
				<div className="lead button">
					<a className="btn btn-primary btn-lg ml-2" href="/login" role="button">Login</a>
					<div className="divider" />
					<a className="btn btn-primary btn-lg" href="/new-user" role="button">Create an Account</a>
				</div>
			</div>
		</div>
	)
}

export default NotLoggedIn;