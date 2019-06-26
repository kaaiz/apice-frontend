import React from "react";
import { Context } from "../../store/appContext";
import AddTypeModal from "./AddTypeModal";

export default class TypeList extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="d-flex justify-content-around">Categorias de productos</div>
					</div>

					<div className="card-body">
						<table className="table">
							<tbody>
								<Context.Consumer>
									{({ store, actions }) => {
										if (store.type.length === 0) {
											return (
												<tr>
													<td>No hay categorías</td>
												</tr>
											);
										}
										return store.type.map(type => {
											return (
												<tr key={type.id}>
													<td>{type.title}</td>
													<td>
														<button
															type="button"
															className="btn btn-warning"
															data-toggle="modal"
															data-target="#modalCatEdit"
															onClick={() => actions.setTemp(type)}>
															E
														</button>
													</td>
													<td>
														<button
															type="button"
															className="btn btn-danger"
															onClick={() => actions.deleteElement(type.id, "category")}>
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
				<AddTypeModal />
			</div>
		);
	}
}
