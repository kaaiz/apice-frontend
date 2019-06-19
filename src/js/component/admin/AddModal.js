import React from "react";
import { Context } from "../../store/appContext";

export default class AddModal extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			description: ""
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleDescriptionChange(e) {
		this.setState({ description: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.title.length) {
			return;
		}
		const newItem = {
			title: this.state.title,
			description: this.state.description
		};
		this.setState(state => ({
			items: state.items.concat(newItem),
			text: ""
		}));
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const item = store.item;
					return (
						<div
							className="modal fade"
							id="modalAdd"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<form onSubmit={this.handleSubmit(e)}>
										<div className="modal-header">
											<h5 className="modal-title" id="exampleModalLabel">
												Agregar
											</h5>
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body">Nombre</div>
										<input
											type="text"
											className="form-control"
											onChange={this.handleTitleChange}
											value={this.state.title}
										/>
										<div className="modal-body">Descripción</div>
										<textarea
											className="form-control"
											rows="3"
											onChange={this.handleDescriptionChange}
											value={this.state.description}
										/>
										<div className="modal-body">Imagen</div>
										<input type="file" className="form-control-file" id="exampleFormControlFile1" />
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-dismiss="modal">
												Cerrar
											</button>
											<button type="button" className="btn btn-primary">
												Confirmar
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
