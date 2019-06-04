import React, { Component } from "react";
import SignIn from "../component/cuenta/SignIn";

export default class Registro extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Registrarse</h2>
					</div>
				</div>
				<SignIn />
			</div>
		);
	}
}
