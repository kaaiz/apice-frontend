import React, { Component } from "react";
import Otra from "../../../img/otra.jpg";

export default class Elemento extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="d-flex justify-content-around">
							<button
								type="button"
								className="btn btn-outline-primary"
								data-toggle="collapse"
								data-target="#collapseProduct1"
								aria-expanded="false"
								aria-controls="collapseExample">
								Cosas destruidas
							</button>
						</div>
						<div className="collapse" id="collapseProduct1">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
								squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
								sapiente ea proident.
							</div>
						</div>
					</div>
					<img src={Otra} className="card-img-top" alt="otra" />
				</div>
			</div>
		);
	}
}
