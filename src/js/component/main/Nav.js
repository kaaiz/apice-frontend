import React, { Component } from "react";

export class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">
						Ápice
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Galería
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Tienda
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Carrito
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Iniciar
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Registrarse
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
