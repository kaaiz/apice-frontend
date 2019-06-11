import React, { Component } from "react";
import AdminNav from "../component/admin/AdminNav";
import CategoryList from "../component/admin/CategoryList";

export default class AdminGaleria extends Component {
	render() {
		return (
			<div>
				<AdminNav />
				<CategoryList />
			</div>
		);
	}
}
