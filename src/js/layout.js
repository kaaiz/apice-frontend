import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Galeria from "./views/galeria";
import GaleriaSeccion from "./views/galeriaseccion";
import Tienda from "./views/tienda";
import TiendaSeccion from "./views/tiendaseccion";
import Carrito from "./views/carrito";
import Inicio from "./views/inicio";
import Registro from "./views/registro";
import injectContext from "./store/appContext";

import { Nav } from "./component/main/Nav";
import { Footer } from "./component/main/Footer";

export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/galeria" component={Galeria} />
							<Route exact path="/galeria/elemento" component={GaleriaSeccion} />
							<Route exact path="/tienda" component={Tienda} />
							<Route exact path="/tienda/seccion" component={TiendaSeccion} />
							<Route exact path="/carrito" component={Carrito} />
							<Route exact path="/inicio" component={Inicio} />
							<Route exact path="/registro" component={Registro} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
