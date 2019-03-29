import React from "react";
import { Table } from 'react-bootstrap';
import "./style.css";

export function SearchTable(props) {
	return (
		<Table responsive className="table table-light">
			{props.children}
		</Table>
	);
};

export function THead({ allowDelete = false }) {
	return (
		<thead className="thead-dark">
			<tr>
				<th scope="col">Type</th>
				<th scope="col">Description</th>
				<th scope="col">Location</th>
				<th scope="col">City</th>
				<th scope="col">State</th>
				{allowDelete && (
					<th scope="col">&nbsp;</th>
				)}
			</tr>
		</thead>
	);
};

export function TBody(props) {
	return (
		<tbody>
			{props.children}
		</tbody>
	);
};

export function TRow({ allowDelete = false, ...props }) {
	return (
		<tr>
			<td>{props.type}</td>
			<td>{props.description}</td>
			<td>{props.location}</td>
			<td>{props.city}</td>
			<td>{props.state}</td>
			{allowDelete && (
					<td>
						<button type="button" class="close" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</td>
				)}
		</tr>
	);
};