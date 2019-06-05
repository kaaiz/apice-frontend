import React, { Component } from "react";
import BioImg from "../../../img/tech.jpg";

export default class BioMain extends Component {
	render() {
		return (
			<div className="container">
				<div className="card header-seccion text-center border border-dark">
					<h2>Sobre Mí</h2>
				</div>
				<div className="card">
					<div className="row no-gutters">
						<div className="col-md-6">
							<div className="card-header">Titulo Biografia</div>
							<div className="text-center">
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tempora
									accusantium ad quaerat autem, libero eveniet dolor, repellat nobis sapiente rem
									facere expedita magnam id explicabo cum, blanditiis ut obcaecati.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<img src={BioImg} className="img-fluid card-img about-us-img" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
