import React, { Component } from "react";
import CompraItem from "./CompraItem";

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
										<CompraItem />
									</tbody>
								</table>
							</div>
							<div className="text-center">
								<p>
									Total:
									<span>$</span>
								</p>
							</div>
							<button className="btn btn-warning btn-block">Confirmar Compra</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
