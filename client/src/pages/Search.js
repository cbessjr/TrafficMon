import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ReportSearchForm from "../components/ReportSearchForm";
import { SearchTable, THead, TBody, TRow } from "../components/SearchResults";
import API from "../utils/API";
import Footer from '../components/Footer';
import SearchResultsNo from "../components/SearchResults_No";

class Search extends Component {
	state = {
		city: "",
		state: "",
		results: []
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleTypeahead = event => {
		console.log(event);
		let selection = event;
		if (typeof event === "object") {
			selection = event[0];
		} 
		this.setState({
			city: selection
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.city !== "") {
			API.reports.searchCity(this.state.city)
				.then(res => this.setState({
					results: res
				}))
				.catch(err => console.log(err));
		} else if (this.state.state !== "") {
			API.reports.searchState(this.state.state)
				.then(res => this.setState({
					results: res.data
				}))
				.catch(err => console.log(err))
		}
	}

	render() {
		let Container;

		if (this.state.results.length) {
			console.log(this.state.results);
			Container = <SearchTable>
				<THead />
				<TBody>
					{this.state.results.map(report => (
						<TRow
							key={report.id}
							type={report.type}
							description={report.description}
							location={report.location}
							city={report.city}
							state={report.state}
						/>
					))}
				</TBody>
			</SearchTable>
		} else {
			Container = (
				<SearchResultsNo />
			)
		}

		return (
			<div>
				<Navigation />
				<ReportSearchForm
					onClick={this.handleFormSubmit}
					onTypeaheadChange={this.handleTypeahead}
					onChange={this.handleInputChange}
				/>
				{Container}
				<Footer />
			</div>
		)
	}
}

export default Search;