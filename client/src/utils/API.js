import axios from "axios";

export default {
	//Gets all reports
	reports: {
		getReports: function () {
			return axios.get("/api/reports");
		},
		getReportById: function (id) {
			return axios.get("/api/reports/" + id);
		},
		searchState: function (state) {
			return axios.get("/api/reports/state-search/" + state);
		},
		searchCity: function (city) {
			return axios.get("/api/reports/city-search/" + city);
		},
		createReport: function (reportData) {
			return axios.post("/api/reports", reportData);
		}
	},
	users: {
		createUser: function (userData) {
			return axios.post("/api/users", userData);
		},
		login: function (userData) {
			return axios.post("/api/users/login", userData);
		},
		logout: function () {
			return axios.get("/api/users/logout")
		},
		getUser: function () {
			return axios.get("/api/users/current-user");
		}
	}

}