import React from "react";
import { Context } from "../../store/appContext";
import Producto from "../tienda/Producto";

export default class ListarProductos extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const diplayProducts = store.product.filter(product => product.display);
					if (diplayProducts.length === 0) {
						return (
							<div className="card header-seccion text-center border border-dark">
								<h2>Producto Destacado</h2>
							</div>
						);
					}
					return diplayProducts.map(product => {
						return <Producto key={product.id} />;
					});
				}}
			</Context.Consumer>
		);
	}
}
