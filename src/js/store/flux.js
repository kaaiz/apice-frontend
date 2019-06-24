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
			password: ""
		},
		actions: {
			setTemp(data) {
				setStore({
					temp: data
				});
			},
			getElement(val) {
				fetch(`${ROOT}${val}/`)
					.then(res => res.json())
					.then(data => {
						setStore({
							[val]: data
						});
					});
			},
			addElement(val, item) {
				fetch(`${ROOT}${val}/`, {
					method: "POST",
					body: JSON.stringify(item)
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
			login: (username, password) => {
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
			}
		}
	};
};

export default getState;
