import React, { Component } from "react";
import AdminNav from "../component/admin/AdminNav";
import CategoryList from "../component/admin/CategoryList";
import ElementList from "../component/admin/ElementList";

export default class AdminGaleria extends Component {
	render() {
		return (
			<div>
				<AdminNav />
				<CategoryList />
				<ElementList />
			</div>
		);
	}
}
