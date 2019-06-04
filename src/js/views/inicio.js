import React, { Component } from "react";
import Login from "../component/cuenta/Login";

export default class Inicio extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Iniciar sesión</h2>
					</div>
				</div>
				<Login />
			</div>
		);
	}
}
