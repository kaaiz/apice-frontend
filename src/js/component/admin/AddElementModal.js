import React from "react";
import { Context } from "../../store/appContext";
import Select from "react-select";
import { isNullOrUndefined } from "util";
import PropTypes from "prop-types";

export default class AddElementModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: "",
			image: null,
			display: false,
			user: this.props.store.user
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
		let formData = new FormData();

		formData.append("title", this.state.title);
		formData.append("text", this.state.text);
		formData.append("image", this.state.image);
		formData.append("display", this.state.display);
		formData.append("category", 1);

		fetch("http://localhost:8000/api/element/", {
			method: "POST",
			body: formData,
			header: {
				"Content-Type": "multipart/form-data",
				//'Authorization': 'Token ' + user.token,
				Authorization: "Token " + this.state.user.token
			}
		})
			.then(resp => resp.json())
			.then(resp => {
				console.log(resp);
			});
	}

	fileSelectedHandler = e => {
		this.setState({
			image: event.target.files[0]
		});
	};

	render() {
		return (
			<div
				className="modal fade"
				id="modalElementAdd"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<form onSubmit={this.handleSubmit}>
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Agregar Elementos
								</h5>
							</div>
							<div className="modal-body">
								<p>Título</p>
								<input
									type="text"
									name="title"
									className="input"
									onChange={this.handleTitleChange}
									value={this.state.title}
								/>
								<p>Texto</p>
								<input
									type="text"
									name="text"
									className="input"
									onChange={this.handleTextChange}
									value={this.state.text}
								/>
								<select className="form-control" id="exampleFormControlSelect2">
									<Context.Consumer>
										{({ store, actions }) => {
											if (store.category.length === 0) {
												return <option>No hay categorías</option>;
											}
											return store.category.map(category => {
												return (
													<option key={category.id} value={category.id}>
														{category.title}
													</option>
												);
											});
										}}
									</Context.Consumer>
								</select>
								<input type="file" onChange={this.fileSelectedHandler} />
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button type="submit" value="Submit" className="btn btn-primary">
									Agregar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

AddElementModal.propTypes = {
	store: PropTypes.object
};
