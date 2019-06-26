import React, { Component } from "react";
import Categoria from "../component/tienda/Categoria";
import { Context } from "../store/appContext";

export default class Tienda extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Tipos de productos</h2>
					</div>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.type.length === 0) {
							return (
								<div className="card header-seccion text-center border border-dark">
									<h2>No hay secciones</h2>
								</div>
							);
						}
						return store.type.map(type => {
							return (
								<Categoria
									key={type.id}
									title={type.title}
									text={type.text}
									image={type.image}
									id={type.id}
								/>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
