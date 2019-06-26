import React from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export default class AddProductModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: "",
			image: null,
			display: false,
			user: this.props.store.user,
			price: "",
			stock: ""
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleStockChange = this.handleStockChange.bind(this);
	}

	handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	handleDisplayChange(e) {
		this.setState({ display: e.target.value });
	}

	handlePriceChange(e) {
		this.setState({ price: e.target.value });
	}

	handleStockChange(e) {
		this.setState({ stock: e.target.value });
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
		formData.append("price", this.state.price);
		formData.append("stock", this.state.stock);

		fetch("http://localhost:8000/api/product/", {
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
				id="modalProductAdd"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<form onSubmit={this.handleSubmit}>
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Agregar Productos
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
								<p>Display</p>
								<input
									type="checkbox"
									aria-label="Checkbox for following text input"
									className="input"
									onChange={this.handleDisplayChange}
									value={this.state.display}
								/>
								<p>Precio</p>
								<input
									type="text"
									name="price"
									className="input"
									onChange={this.handlePriceChange}
									value={this.state.price}
								/>
								<p>Stock</p>
								<input
									type="text"
									name="stock"
									className="input"
									onChange={this.handleStockChange}
									value={this.state.stock}
								/>
								<select className="form-control" id="exampleFormControlSelect2">
									<Context.Consumer>
										{({ store, actions }) => {
											if (store.type.length === 0) {
												return <option>No hay categorías</option>;
											}
											return store.category.map(type => {
												return (
													<option key={type.id} value={type.id}>
														{type.title}
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

AddProductModal.propTypes = {
	store: PropTypes.object
};
