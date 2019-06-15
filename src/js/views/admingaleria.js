import React, { Component } from "react";
import AdminNav from "../component/admin/AdminNav";
import CategoryList from "../component/admin/CategoryList";

/* 
 2.- Implementar vista
 3.- Agregar Categoría
 4.- Eliminar Categoría
 5.- Editar Categoría
*/

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
