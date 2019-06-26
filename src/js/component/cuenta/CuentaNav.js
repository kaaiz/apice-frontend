import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class CuentaNav extends Component {
	render() {
		return (
			<div className="container">
				<div className="card header-seccion text-center border border-dark">
					<h2>Mi Cuenta</h2>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="menu-admin">
									<ul className="nav nav-tabs">
										<li className="nav-item flex-fill">
											<a className="active" href="#biography" data-toggle="tab">
												<button type="button" className="btn btn-secondary btn-block">
													Información Personal
												</button>
											</a>
										</li>
										<li className="nav-item flex-fill">
											<a className="" href="#galery" data-toggle="tab">
												<button type="button" className="btn btn-secondary btn-block">
													Contacto
												</button>
											</a>
										</li>
										<li className="nav-item flex-fill">
											<a className="" href="#tienda" data-toggle="tab">
												<button type="button" className="btn btn-secondary btn-block">
													Historial
												</button>
											</a>
										</li>
									</ul>
									<div className="tab-content">
										<div id="biography" className="tab-pane fade in active show">
											<h3>Datos Personales</h3>
											<div className="accordion" id="accordionExample">
												<div className="card mt-0">
													<div className="card-header mt-0 acordeon" id="headingOne">
														<h2 className="mb-0">
															<button
																className="btn btn-link acordeon-title"
																type="button"
																data-toggle="collapse"
																data-target="#collapseOne"
																aria-expanded="true"
																aria-controls="collapseOne">
																Nombre de Usuario
															</button>
														</h2>
													</div>
													<div
														id="collapseOne"
														className="collapse"
														aria-labelledby="headingOne"
														data-parent="#accordionExample">
														<div className="card-body">
															<div className="col-sm-6 offset-sm-3">
																<div className="form-group">
																	<input
																		type="email"
																		className="form-control input"
																		id="username"
																		placeholder="Modificar Nombre"
																		value={store.username}
																		onChange={e => actions.onChange(e)}
																	/>
																</div>
																<button
																	type="button"
																	className="btn btn-secondary btn-lg btn-block">
																	Cambiar
																</button>
															</div>
														</div>
													</div>
												</div>
												<div className="card mt-0">
													<div className="card-header mt-0 acordeon" id="headingTwo">
														<h2 className="mb-0">
															<button
																className="btn btn-link collapsed acordeon-title"
																type="button"
																data-toggle="collapse"
																data-target="#collapseTwo"
																aria-expanded="false"
																aria-controls="collapseTwo">
																Contraseña
															</button>
														</h2>
													</div>
													<div
														id="collapseTwo"
														className="collapse"
														aria-labelledby="headingTwo"
														data-parent="#accordionExample">
														<div className="card-body">
															<div className="col-sm-6 offset-sm-3">
																<div className="form-group">
																	<input
																		type="password"
																		className="form-control input"
																		id="password"
																		placeholder="Modificar Contraseña"
																		value={store.password}
																		onChange={e => actions.onChange(e)}
																	/>
																</div>
																<button
																	type="button"
																	className="btn btn-secondary btn-lg btn-block">
																	Cambiar
																</button>
															</div>
														</div>
													</div>
												</div>
												<div className="card mt-0">
													<div className="card-header acordeon" id="headingThree">
														<h2 className="mb-0">
															<button
																className="btn btn-link collapsed acordeon-title"
																type="button"
																data-toggle="collapse"
																data-target="#collapseThree"
																aria-expanded="false"
																aria-controls="collapseThree">
																Email
															</button>
														</h2>
													</div>
													<div
														id="collapseThree"
														className="collapse"
														aria-labelledby="headingThree"
														data-parent="#accordionExample">
														<div className="card-body">
															<div className="col-sm-6 offset-sm-3">
																<div className="form-group">
																	<input
																		type="email"
																		className="form-control input"
																		id="email"
																		placeholder="Modificar Email"
																		value={store.email}
																		onChange={e => actions.onChange(e)}
																	/>
																</div>
																<button
																	type="button"
																	className="btn btn-secondary btn-lg btn-block">
																	Cambiar
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="galery" className="tab-pane fade">
											<h3>Envíanos un email</h3>
											<form className="col-sm-10 offset-sm-1">
												<div className="form-group">
													<input
														type="email"
														className="form-control"
														id="exampleInputEmail1"
														aria-describedby="emailHelp"
														placeholder="Ingresa un asunto"
													/>
												</div>
												<div className="form-group">
													<div className="form-group">
														<textarea
															className="form-control"
															id="exampleFormControlTextarea1"
															rows="3"
															placeholder="Ingresa un mensaje"
														/>
													</div>
												</div>
												<button type="submit" className="btn btn-primary mb-4">
													Enviar
												</button>
											</form>
										</div>
										<div id="tienda" className="tab-pane fade">
											<h3>Historial de Compras</h3>
											<table className="table table-striped">
												<thead>
													<tr>
														<th scope="col">#Id Compra</th>
														<th scope="col">Fecha</th>
														<th scope="col">Monto</th>
														<th scope="col">Nombre</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row">1</th>
														<td>19/06/19</td>
														<td>$2900</td>
														<td>Mark</td>
													</tr>
													<tr>
														<th scope="row">2</th>
														<td>19/06/19</td>
														<td>$2900</td>
														<td>Jacob</td>
													</tr>
													<tr>
														<th scope="row">3</th>
														<td>19/06/19</td>
														<td>$2900</td>
														<td>Larry</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

CuentaNav.propTypes = {
	history: PropTypes.object
};

export default withRouter(CuentaNav);
