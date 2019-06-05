import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
				<div className="container">
					<Link to="/">
						<a className="navbar-brand" href="#">
							Ápice
						</a>
					</Link>
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
							<Link to="/galeria">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Galería
									</a>
								</li>
							</Link>
							<Link to="/tienda">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Tienda
									</a>
								</li>
							</Link>
							<Link to="/carrito">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Carrito
									</a>
								</li>
							</Link>
							<Link to="/inicio">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Iniciar
									</a>
								</li>
							</Link>
							<Link to="/registro">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Registrarse
									</a>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
