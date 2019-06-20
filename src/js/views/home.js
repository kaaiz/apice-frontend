import React, { Component } from "react";
import BioMain from "../component/inicio/BioMain";
import Elemento from "../component/galeria/Elemento";
import Producto from "../component/tienda/Producto";

export default class Home extends Component {
	render() {
		return (
			<div>
				<Elemento />
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Producto Destacado</h2>
					</div>
					<Producto />
				</div>
				<BioMain />
			</div>
		);
	}
}
