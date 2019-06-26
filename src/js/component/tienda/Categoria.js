import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export default function Categoria(props) {
	return (
		<div className="container">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-around">
						<button
							type="button"
							className="btn btn-outline-primary"
							data-toggle="collapse"
							data-target="#collapseProduct1"
							aria-expanded="false"
							aria-controls="collapseExample">
							{props.title}
						</button>
						<Link to={"/tienda/seccion/" + props.id} className={"btn btn-outline-success"}>
							Ir a sección
						</Link>
						;
					</div>
					<div className="collapse" id="collapseProduct1">
						<div className="card card-body">{props.text}</div>
					</div>
				</div>
				{!!props.image && <img src={props.image} className="card-img-top" alt="..." />}
			</div>
		</div>
	);
}

Categoria.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	text: PropTypes.string,
	id: PropTypes.number
};
