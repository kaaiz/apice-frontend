import React from "react";
import { Context } from "../../store/appContext";

export default class AddCatModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: ""
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.title.length) {
			return;
		}
		const newItem = {
			title: this.state.title,
			text: this.state.text
		};
		<Context.Consumer>{({ store, actions }) => actions.addElement("category", newItem)}</Context.Consumer>;
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const item = store.item;
					return (
						<div
							className="modal fade"
							id="modalCatAdd"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<form onSubmit={this.handleSubmit}>
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
										<div className="modal-body">Titulo</div>
										<input
											type="text"
											className="form-control"
											onChange={this.handleTitleChange}
											value={this.state.title}
										/>
										<div className="modal-body">Texto</div>
										<textarea
											className="form-control"
											rows="3"
											onChange={this.handleTextChange}
											value={this.state.text}
										/>
										<div className="modal-body">Imagen</div>
										<input type="file" className="form-control-file" id="exampleFormControlFile1" />
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-dismiss="modal">
												Cerrar
											</button>
											<input
												type="submit"
												className="btn btn-secondary"
												data-dismiss="modal"
												value="Submit"
											/>
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
