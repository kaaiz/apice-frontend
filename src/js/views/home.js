import React from "react";
// Imagen de Biografía temporal
import Bio from "../../img/placeimg_640_480_grayscale_people.jpg";

export class Home extends React.Component {
	render() {
		return (
			// Aquí Mostrar Titulo de Elementos de Galería destacados si los hay
			// Mostrar Elementos de Galería destacados si los hay
			// Aquí Mostrar Título de "Producto destacado" si hay uno
			// Aquí Mostrar Título de "Producto en descuento" si hay uno

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
							<img src={Bio} className="img-fluid card-img about-us-img" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
