import React, { Component } from "react";
import Galeria from "../component/galeria/Seccion";

export default class Seccion extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Galería de trabajos</h2>
					</div>
				</div>
				<Galeria />
			</div>
		);
	}
}
