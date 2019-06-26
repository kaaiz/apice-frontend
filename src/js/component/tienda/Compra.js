import React, { Component } from "react";
import CompraItem from "./CompraItem";
import { Context } from "../../store/appContext";

export default class Compra extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-body">
						<form>
							<div>
								<table className="table">
									<thead className="thead-dark">
										<tr>
											<th scope="col">Nombre</th>
											<th scope="col">Precio</th>
											<th scope="col">Cantidad</th>
											<th scope="col">Opciones</th>
										</tr>
									</thead>
									<tbody>
										<Context.Consumer>
											{({ store, actions }) => {
												return store.carrito.length == 0 ? (
													<tr>
														<td colSpan={4}>
															<div className="card header-seccion text-center border border-dark">
																<h4>No hay Productos en el Carrito</h4>
															</div>
														</td>
													</tr>
												) : (
													store.carrito.map(item => {
														return <CompraItem key={item.id} item={item} />;
													})
												);
											}}
										</Context.Consumer>
									</tbody>
								</table>
							</div>
							<div className="text-center">
								<Context.Consumer>
									{({ store }) => {
										let cantidad = 0;
										store.carrito.map(item => {
											return (cantidad += parseFloat(item.price));
										});
										return (
											<p>
												Total:
												<span>${cantidad}</span>
											</p>
										);
									}}
								</Context.Consumer>
							</div>
							<button className="btn btn-warning btn-block">Confirmar Compra</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
