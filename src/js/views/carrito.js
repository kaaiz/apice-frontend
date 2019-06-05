import React, { Component } from "react";
import Compra from "../component/tienda/Compra";

export default class Carrito extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Tu Carrito</h2>
					</div>
				</div>

				<Compra />
			</div>
		);
	}
}
