import React, { Component } from "react";
import { Context } from "../store/appContext";
import Producto from "../component/tienda/Producto";

export default class TiendaSeccion extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Nombre de sección</h2>
					</div>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.product.map(product => {
							return <Producto key={product.id} addToCart={actions.addToCart} product={product} />;
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
