import React from "react";
import PropTypes from "prop-types";

export default function Elemento(props) {
	return (
		<div className="container">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-around card-header">{props.title}</div>
					<div className="card card-body">{props.text}</div>
				</div>
				<img src={props.image} className="card-img-top" alt="..." />
			</div>
		</div>
	);
}

Elemento.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	text: PropTypes.string
};
