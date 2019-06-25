import React from "react";
import Elemento from "../galeria/Elemento";
import { Context } from "../../store/appContext";

export default class ListarElementos extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const diplayElements = store.element.filter(element => element.display);
					if (diplayElements.length === 0) {
						return (
							<div className="card header-seccion text-center border border-dark">
								<h2>Bienvenido</h2>
							</div>
						);
					}
					return diplayElements.map(element => {
						return (
							<Elemento
								key={element.id}
								title={element.title}
								text={element.text}
								image={element.image}
							/>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
