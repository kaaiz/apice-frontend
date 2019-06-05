import React from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
	return (
		<div className="container">
			<div className="card header-seccion text-center border border-dark">
				<h2>Panel Administrador</h2>
				<div className="menu-admin d-flex">
					<Link to="/admin" className="flex-fill">
						<button type="button" className="btn btn-secondary btn-block">
							Biografía
						</button>
					</Link>
					<Link to="/admingaleria" className="flex-fill">
						<button type="button" className="btn btn-secondary btn-block">
							Galería
						</button>
					</Link>
					<Link to="/admintienda" className="flex-fill">
						<button type="button" className="btn btn-secondary btn-block">
							Tienda
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
