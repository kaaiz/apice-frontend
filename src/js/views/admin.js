import React, { Component } from "react";
import BioMain from "../component/inicio/BioMain";
import BioEdit from "../component/admin/BioEdit";
import AdminNav from "../component/admin/AdminNav";

export default class AdminMain extends Component {
	render() {
		return (
			<div className="container">
				<AdminNav />
				<BioEdit />
				<BioMain />
			</div>
		);
	}
}
