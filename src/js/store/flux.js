const ROOT = "http://127.0.0.1:8000/api/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			category: [],
			element: [],
			type: [],
			product: [],
			temp: {} // Objeto temporal para PUT & POST & DIPLAY
		},
		actions: {
			setTemp(items) {
				setStore({
					temp: items
				});
			},
			getElement(end) {
				fetch(`${ROOT}${end}/`)
					.then(res => res.json())
					.then(data => {
						setStore({
							[end]: data
						});
					});
			},
			deleteElement(num, end) {
				fetch(URL + "/" + num, {
					method: "delete"
				}).then(response => response.json());
			}
		}
	};
};

export default getState;
