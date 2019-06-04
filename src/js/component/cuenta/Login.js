import React, { Component } from "react";

export default class Login extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-body">
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email</label>
								<input
									type="email"
									className="form-control input"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input
									type="password"
									className="form-control input"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<button className="btn btn-primary">Iniciar</button>
							<button className="btn btn-warning">Recuperar contraseña</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
