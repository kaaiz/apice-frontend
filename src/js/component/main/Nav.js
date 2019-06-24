import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../../store/appContext";

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
							<li className="nav-item">
								<Link to={"/galeria"} className={"nav-link"}>
									Galeria
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/tienda"} className={"nav-link"}>
									Tienda
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/carrito"} className={"nav-link"}>
									Carrito
								</Link>
							</li>
							<Context.Consumer>
								{({ store, actions }) => {
									return !store.isAuthenticated ? (
										<Fragment>
											<li className="nav-item">
												<Link to={"/inicio"} className={"nav-link"}>
													Iniciar
												</Link>
											</li>
											<li className="nav-item">
												<Link to={"/registro"} className={"nav-link"}>
													Registrarse
												</Link>
											</li>
										</Fragment>
									) : (
										<Fragment>
											<li className="nav-item">
												<Link to={"/micuenta"} className={"nav-link"}>
													Mi Cuenta
												</Link>
											</li>
											<li className="nav-item">
												<a href="javascript:void()" onClick={e => actions.logout(e)}>
													<span className={"nav-link"}>Logout</span>
												</a>
											</li>
										</Fragment>
									);
								}}
							</Context.Consumer>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
