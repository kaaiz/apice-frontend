import React, { Component } from "react";
import Persona from "../../../img/persona.jpg";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

export default class Producto extends Component {
	render() {
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
								{this.props.product.title}
							</button>
							<button
								type="button"
								className="btn btn-outline-success"
								onClick={() => this.props.addToCart(this.props.product)}>
								${this.props.product.price}
							</button>
						</div>
						<div className="collapse" id="collapseProduct1">
							<div className="card card-body">{this.props.product.text}</div>
						</div>
					</div>
					<img src={this.props.product.image} className="card-img-top" alt="..." />
				</div>
			</div>
		);
	}
}

Producto.propTypes = {
	addToCart: PropTypes.func,
	product: PropTypes.object
};
