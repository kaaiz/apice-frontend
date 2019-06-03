import React from "react";

export class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="footer-header text-center">
						<h4>Encuéntranos</h4>
					</div>
					<div className="footer-content row">
						<div className="col-md-6 text-center">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div className="col-md-6 text-center">
							<i className="fab fa-github-square" />
							<i className="fab fa-twitter-square ml-1" />
							<i className="fab fa-facebook-square ml-1" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
