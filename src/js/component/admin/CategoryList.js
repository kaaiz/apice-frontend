import React from "react";
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function CategoryList() {
	return (
		<div className="container">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-around">Categorias</div>
				</div>
				<ul className="list-group list-group-flush">
					<Context.Consumer>
						{({ store, actions }) => {
							if (store.categories.length === 0) {
								return (
									<li key="0" className="list-group-item">
										No hay categorías
									</li>
								);
							}
							return store.categories.map(category => (
								<li key={category.id} className="list-group-item">
									{category.title}
									<FontAwesomeIcon
										className="float-right"
										icon={faCoffee}
										onClick={() =>
											actions.DeleteCategory(category.id, "http://127.0.0.1:8000/api/category")
										}
									/>
								</li>
							));
						}}
					</Context.Consumer>
				</ul>
				<div className="input-group flex-nowrap">
					<div className="input-group-prepend">
						<span className="input-group-text" id="addon-wrapping">
							Agregar:
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Nueva categoría"
						aria-label="Nueva categoría"
						aria-describedby="addon-wrapping"
					/>
				</div>
			</div>
		</div>
	);
}
