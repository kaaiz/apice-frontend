import React, { Component } from "react";
import BioMain from "../component/inicio/BioMain";

import Producto from "../component/tienda/Producto";
import ListarElementos from "../component/inicio/ListarElementos";
import ListarProductos from "../component/inicio/ListarProductos";

export default class Home extends Component {
	render() {
		return (
			<div>
				<ListarElementos />
				<ListarProductos />
				<BioMain />
			</div>
		);
	}
}
