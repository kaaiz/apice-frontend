import React, { Component } from "react";
import Galeria from "../component/galeria/Seccion";
import { Context } from "../store/appContext";

export default class Seccion extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card header-seccion text-center border border-dark">
						<h2>Galerías</h2>
					</div>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.category.length === 0) {
							return (
								<div className="card header-seccion text-center border border-dark">
									<h2>No hay galerías</h2>
								</div>
							);
						}
						return store.category.map(category => {
							return (
								<Galeria
									key={category.id}
									id={category.id}
									title={category.title}
									text={category.text}
									image={category.image}
								/>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
