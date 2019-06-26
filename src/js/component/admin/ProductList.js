import React from "react";
import { Context } from "../../store/appContext";
import AddProductModal from "./AddProductModal";

export default class ProductList extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="d-flex justify-content-around">Productos</div>
					</div>
					<div className="card-body">
						<table className="table">
							<tbody>
								<Context.Consumer>
									{({ store, actions }) => {
										if (store.product.length === 0) {
											return (
												<tr>
													<td>No hay productos</td>
												</tr>
											);
										}
										return store.product.map(product => {
											return (
												<tr key={product.id}>
													<td>{product.title}</td>
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
							data-target="#modalProductAdd">
							Nuevo producto
						</button>
					</div>
				</div>
				<Context.Consumer>
					{({ store }) => {
						return <AddProductModal store={store} />;
					}}
				</Context.Consumer>
			</div>
		);
	}
}
