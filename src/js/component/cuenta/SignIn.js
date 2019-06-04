import React, { Component } from "react";

export default class Registro extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-body">
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Nombre de usuario</label>
								<input
									type="name"
									className="form-control input"
									id="exampleInputEmail1"
									placeholder="Elegir nombre"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email</label>
								<input
									type="email"
									className="form-control input"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Ingresar email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Password</label>
								<input
									type="password"
									className="form-control input"
									id="exampleInputPassword1"
									placeholder="Ingresar password"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control input"
									id="exampleInputPassword1"
									placeholder="Reingresar password"
								/>
							</div>
							<button className="btn btn-primary">Crear</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
