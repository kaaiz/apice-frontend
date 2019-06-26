import React, { Component } from "react";
import Producto from "../component/tienda/Producto";

export default class TiendaSeccion extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Nombre de sección</h2>
					</div>
				</div>
				<Producto />
				<Producto addToCart={actions.addToCart()} product={product} />
			</div>
		);
	}
}
