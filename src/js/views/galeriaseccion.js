import React, { Component } from "react";
import Elemento from "../component/galeria/Elemento";

export default class GaleriaSeccion extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Título de Galería</h2>
					</div>
				</div>
				<Elemento />
			</div>
		);
	}
}
