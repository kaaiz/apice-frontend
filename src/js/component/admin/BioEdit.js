import React, { Component } from "react";

export default class BioEdit extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-body">
						<form>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text">Titulo Biografía</span>
								</div>
								<input
									type="text"
									className="form-control"
									aria-label="Sizing example input"
									aria-describedby="inputGroup-sizing-default"
								/>
							</div>
							<div className="form-group">
								<label>Selecciona La Imagen:</label>
								<input type="file" className="form-control-file" />
							</div>
							<div className="form-group">
								<label>Descripción</label>
								<textarea className="form-control" rows="3" />
							</div>
							<button className="btn btn-primary">Actualizar</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
