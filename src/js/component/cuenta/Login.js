import React, { Component } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Login extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-body">
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<form>
										<div className="form-group">
											<label htmlFor="username">Username</label>
											<input
												type="text"
												className="form-control input"
												id="username"
												aria-describedby="emailHelp"
												placeholder="Username"
												value={store.username}
												onChange={e => actions.onChange(e)}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="password">Password</label>
											<input
												type="password"
												className="form-control input"
												id="password"
												placeholder="Password"
												value={store.password}
												onChange={e => actions.onChange(e)}
											/>
										</div>
										<button
											type="button"
											className="btn btn-primary"
											onClick={() =>
												actions.login(store.username, store.password, this.props.history)
											}>
											Iniciar
										</button>
										<button className="btn btn-warning">Recuperar contraseña</button>
									</form>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	history: PropTypes.object
};

export default withRouter(Login);
