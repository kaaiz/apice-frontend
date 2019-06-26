import React, { Component } from "react";
import AdminNav from "../component/admin/AdminNav";
import TypeList from "../component/admin/TypeList";
import ProductList from "../component/admin/ProductList";

export default class AdminTienda extends Component {
	render() {
		return (
			<div>
				<AdminNav />
				<TypeList />
				<ProductList />
			</div>
		);
	}
}
