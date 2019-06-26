import React, { Component } from "react";
import Producto from "../component/tienda/Producto";

export default class Tienda extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Secciones de Tienda</h2>
					</div>
				</div>
				<Producto addToCart={actions.addToCart()} product={product} />
			</div>
		);
	}
}
