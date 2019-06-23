import React from "react";
import { Context } from "../../store/appContext";

export default class EditCatModal extends React.Component {
	render() {
		return (
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
									<input type="text" className="form-control" />
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
		);
	}
}
