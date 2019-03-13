import React from "react";
import { Form, Button } from "react-bootstrap";

function NewReportForm(props) {
	return (
		<Form>
			<Form.Group controlId="trafficReport.ControlSelect1">
				<Form.Label>Report Type</Form.Label>
				<Form.Control as="select">
					<option>Traffic</option>
					<option>Minor Accident</option>
					<option>Major Accident</option>
					<option>Road Work</option>
					<option>Police</option>
				</Form.Control>
			</Form.Group>

			<Form.Group controlId="trafficReport.ControlInput1">
				<Form.Label>Description</Form.Label>
				<Form.Control type="text" placeholder="Description" />
			</Form.Group>

			<Form.Group controlId="trafficReport.ControlInput2">
				<Form.Label>Location Description</Form.Label>
				<Form.Control type="text" placeholder="Location (Describe location)" />
			</Form.Group>

			<Form.Group controlId="trafficReport.ControlInput3">
				<Form.Label>City</Form.Label>
				<Form.Control type="text" placeholder="City" />
			</Form.Group>

			<Form.Group controlId="trafficReport.ControlSelect2">
				<Form.Label>State</Form.Label>
				<Form.Control as="select">
					<option>Alabama</option>
					<option>Alaska</option>
					<option>Arizona</option>
					<option>Arkansas</option>
					<option>California</option>
					<option>Colorado</option>
					<option>Connecticut</option>
					<option>Delaware</option>
					<option>Florida</option>
					<option>Georgia</option>
					<option>Hawaii</option>
					<option>Idaho</option>
					<option>Illinois</option>
					<option>Indiana</option>
					<option>Iowa</option>
					<option>Kansas</option>
					<option>Kentucky</option>
					<option>Louisiana</option>
					<option>Maine</option>
					<option>Maryland</option>
					<option>Massachusetts</option>
					<option>Michigan</option>
					<option>Minnesota</option>
					<option>Missouri</option>
					<option>Montana</option>
					<option>Nebraska</option>
					<option>Nevada</option>
					<option>New Hampshire</option>
					<option>New Jersey</option>
					<option>New Mexico</option>
					<option>New York</option>
					<option>North Carolina</option>
					<option>North Dakota</option>
					<option>Ohio</option>
					<option>Oklahoma</option>
					<option>Oregon</option>
					<option>Pennsylvania</option>
					<option>Rhode Island</option>
					<option>South Carolina</option>
					<option>South Dakota</option>
					<option>Tennessee</option>
					<option>Texas</option>
					<option>Utah</option>
					<option>Vermont</option>
					<option>Virginia</option>
					<option>Washington</option>
					<option>Washington DC</option>
					<option>West Virginia</option>
					<option>Wisconsin</option>
					<option>Wyoming</option>
				</Form.Control>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	)
}

export default NewReportForm;