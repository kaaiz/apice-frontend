import React, { Component } from "react";
import Categoria from "../component/tienda/Categoria";

export default class Tienda extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Secciones de Tienda</h2>
					</div>
				</div>
				<Categoria />
			</div>
		);
	}
}
