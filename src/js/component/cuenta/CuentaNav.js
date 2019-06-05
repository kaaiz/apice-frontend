import React from "react";
import { Link } from "react-router-dom";

export default function CuentaNav() {
	return (
		<div className="container">
			<div className="card header-seccion text-center border border-dark">
				<h2>Mi Cuenta</h2>
				<div className="menu-admin d-flex">
					<Link to="/micuenta" className="flex-fill">
						<button type="button" className="btn btn-secondary btn-block">
							Biografía
						</button>
					</Link>
					<Link to="/micuentaregistro" className="flex-fill">
						<button type="button" className="btn btn-secondary btn-block">
							Galería
						</button>
					</Link>
					<Link to="/micuentacontacto" className="flex-fill">
						<button type="button" className="btn btn-secondary btn-block">
							Tienda
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
