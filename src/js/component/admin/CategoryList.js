import React from "react";
import { Context } from "../../store/appContext";
import AddCatModal from "./AddCatModal";
import EditCatModal from "./EditCatModal";

export default class CategoryList extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="d-flex justify-content-around">Categorias</div>
					</div>

					<div className="card-body">
						<table className="table">
							<tbody>
								<Context.Consumer>
									{({ store, actions }) => {
										if (store.category.length === 0) {
											return (
												<tr>
													<td>No hay categorías</td>
												</tr>
											);
										}
										return store.category.map(category => {
											return (
												<tr key={category.id}>
													<td>{category.title}</td>
													<td>
														<button
															type="button"
															className="btn btn-warning"
															data-toggle="modal"
															data-target="#modalCatEdit"
															onClick={() => actions.setTemp(category)}>
															E
														</button>
													</td>
													<td>
														<button
															type="button"
															className="btn btn-danger"
															onClick={() =>
																actions.deleteElement(category.id, "category")
															}>
															X
														</button>
													</td>
												</tr>
											);
										});
									}}
								</Context.Consumer>
							</tbody>
						</table>
						<button
							type="button"
							className="btn btn-primary btn-block"
							data-toggle="modal"
							data-target="#modalCatAdd">
							Nueva categoría
						</button>
					</div>
				</div>
				<EditCatModal />
				<AddCatModal />
			</div>
		);
	}
}
