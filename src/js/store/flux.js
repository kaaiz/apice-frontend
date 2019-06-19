const ROOT = "http://127.0.0.1:8000/api/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			category: [],
			element: [],
			type: [],
			product: [],
			temp: {}
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
				fetch(`${ROOT}${val}`, {
					method: "post",
					body: JSON.stringify(item)
				}).then(res => res.json());
			},
			deleteElement(id, val) {
				fetch(`${ROOT}${val}/${id}`, {
					method: "delete"
				}).then(res => res.json());
				// Aquí falta agregar que si la response es OK entonces
				// Actualizar el array localmente (setState) con un filter
			}
		}
	};
};

export default getState;
