import React, { Component } from "react";
export default class CompraItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cantidad: 0,
			show: true
		};
	}
	IncrementItem = () => {
		this.setState({ cantidad: this.state.cantidad + 1 });
	};
	DecreaseItem = () => {
		if (cantidad < 0) {
			alert("el numero no puede ser menor a 0");
		} else {
			this.setState({ cantidad: this.state.cantidad - 1 });
		}
	};
	ToggleCantidad = () => {
		this.setState({ show: !this.state.show });
	};
	render() {
		return (
			<tr>
				<th scope="row">Sombrero Azul</th>
				<td>$5.500</td>
				<td>
					<div className="text-center">{this.state.cantidad}</div>
				</td>
				<td>
					<i className="fas fa-plus add-icon" onClick={this.IncrementItem} />
					<i className="fas fa-minus minus-icon" onClick={this.DecreaseItem} />
					<i className="fas fa-trash-alt delete-icon" />
				</td>
			</tr>
		);
	}
}
