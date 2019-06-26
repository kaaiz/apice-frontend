const ROOT = "http://127.0.0.1:8000/api/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			category: [],
			element: [],
			type: [],
			product: [],
			temp: {},
			user: {},
			error: {},
			isAuthenticated: false,
			username: "",
			password: "",
			email: "",
			selectedType: ""
		},
		actions: {
			setTemp(data) {
				setStore({
					temp: data
				});
			},
			setType(id) {
				setStore({
					selectedType: id
				});
			},
			getElement(val) {
				fetch(`${ROOT}${val}/`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({
							[val]: data
						});
					});
			},
			addElement(val, data) {
				fetch(`${ROOT}${val}/`, {
					method: "POST",
					body: JSON.stringify(data)
				}).then(resp => {
					if (!resp.ok) {
						let data = this.store.val.concat([item]);
						setStore({
							[val]: data
						});
					}
					return resp.json();
				});
			},
			deleteElement(id, val) {
				fetch(`${ROOT}${val}/${id}`, {
					method: "delete"
				}).then(res => res.json());
				// Aquí falta agregar que si la response es OK entonces
				// Actualizar el array localmente (setState) con un filter
			},
			login: (username, password, history) => {
				let data = {
					username: username,
					password: password
				};

				fetch(`${ROOT}login/`, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp.token) {
							setStore({
								user: resp,
								isAuthenticated: true,
								username: "",
								password: "",
								error: ""
							});
							history.push("/");
						} else {
							setStore({
								error: resp
							});
						}
					})
					.catch(error => console.log(error));
			},
			register: (username, password, email, history) => {
				let data = {
					username: username,
					password: password,
					email: email
				};

				fetch(`${ROOT}register/`, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp.token) {
							setStore({
								user: resp,
								isAuthenticated: true,
								username: "",
								password: "",
								email: "",
								error: ""
							});
							history.push("/");
						} else {
							setStore({
								error: resp
							});
						}
					})
					.catch(error => console.log(error));
			},
			logout: e => {
				e.preventDefault();
				const store = getStore();
				fetch(`${ROOT}logout/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Token " + store.user.token
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp.detail) {
							setStore({
								user: {},
								isAuthenticated: false,
								username: "",
								password: "",
								error: ""
							});
						} else {
							setStore({
								error: resp
							});
						}
					})
					.catch(error => console.log(error));
			},
			onChange: e => {
				setStore({ [e.target.id]: e.target.value });
			},
			addToCart: product => {
				setStore({
					carrito: carrito.concat(product)
				});
			}
		}
	};
};
export default getState;
