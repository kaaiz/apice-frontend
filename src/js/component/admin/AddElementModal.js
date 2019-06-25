import React from "react";
import Select from "react-select";
import { Context } from "../../store/appContext";

export default class AddElementModal extends React.Component {
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
		const newElement = {
			title: this.state.title,
			text: this.state.text
		};
		this.setState({
			title: "",
			text: ""
		});
		<Context.Consumer>{({ store, actions }) => actions.addElement("element", newElement)}</Context.Consumer>;
	}

	render() {
		return (
			<Context.Consumer>
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

								<Select options={({ store, actions }) => store.} />
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
			</Context.Consumer>
		);
	}
}
