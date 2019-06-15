import React from "react";
import { Context } from "../../store/appContext";

function CategoryList() {
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
														data-target="#modalEdit"
														onClick={() => actions.setTemp(category)}>
														E
													</button>
												</td>
												<td>
													<button type="button" className="btn btn-danger">
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
					<button type="submit" className="btn btn-primary btn-block">
						Nueva categoría
					</button>
				</div>
			</div>
			<Context.Consumer>
				{({ store, actions }) => {
					const item = store.item;
					return (
						<div
							className="modal fade"
							id="modalEdit"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											Editar
										</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">Nombre</div>
									<input
										type="text"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-sm"
										value=""
									/>
									<div className="modal-body">Descripción</div>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
									<div className="modal-body">Imagen</div>
									<input type="file" className="form-control-file" id="exampleFormControlFile1" />
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Cerrar
										</button>
										<button type="button" className="btn btn-primary">
											Guardar Cambios
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
}

export default CategoryList;
