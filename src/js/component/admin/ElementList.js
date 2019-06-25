import React from "react";
import { Context } from "../../store/appContext";
import AddElementModal from "./AddElementModal";

export default class ElementList extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="d-flex justify-content-around">Elementos</div>
					</div>
					<div className="card-body">
						<table className="table">
							<tbody>
								<Context.Consumer>
									{({ store, actions }) => {
										if (store.element.length === 0) {
											return (
												<tr>
													<td>No hay elementos</td>
												</tr>
											);
										}
										return store.element.map(element => {
											return (
												<tr key={element.id}>
													<td>{element.title}</td>
													<td>
														<button type="button" className="btn btn-warning">
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
						<button
							type="button"
							className="btn btn-primary btn-block"
							data-toggle="modal"
							data-target="#modalElementAdd">
							Nuevo elemento
						</button>
					</div>
				</div>
				<AddElementModal />
			</div>
		);
	}
}
