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

				<form>
					<div className="form-group">
						<h3>Agregar nueva categoría</h3>
						<input
							type="text"
							className="form-control"
							placeholder="Título"
							aria-label="Nueva categoría"
							aria-describedby="addon-wrapping"
						/>
						<textarea className="form-control" rows="2" placeholder="Descripción" />
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
