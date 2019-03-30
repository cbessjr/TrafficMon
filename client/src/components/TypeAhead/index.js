import React from "react";
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
const cityList = require("../../resources/index");

function TypeAhead(props) {
	return (
		<div>
			<Form.Group controlId="searchForm.CitySelect">
				<Form.Label><h2>Enter City to search by City</h2></Form.Label>
				<Typeahead
					labelKey="city"
					name="city"
					options={cityList}
					placeholder="Choose a city..."
					onInputChange={props.onChange}
					onChange={props.onChange}
				/>
			</Form.Group>
		</div>
	);
}

export default TypeAhead;