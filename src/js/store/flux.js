const ROOT = "http://127.0.0.1:8000/api/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			categories: [],
			elements: [],
			types: [],
			products: [],
			temp: {} // Objeto temporal PUT & POST
		},
		actions: {
			setTemp(items) {
				setStore({
					temp: items
				});
			},
			resetTemp() {
				setStore({
					temp: {}
				});
			},
			getCategories(end) {
				fetch(`${ROOT}${end}`)
					.then(res => res.json())
					.then(data => {
						setStore({
							categories: data
						});
					});
			} /*,
			DeleteCategory(num, URL) {
				fetch(URL + "/" + num, {
					method: "delete"
				}).then(response => response.json());
			}*/,
			getElements(end) {
				fetch(`${ROOT}${end}`)
					.then(res => res.json())
					.then(data => {
						setStore({
							elements: data
						});
					});
			},
			getTypes(end) {
				fetch(`${ROOT}${end}`)
					.then(res => res.json())
					.then(data => {
						setStore({
							types: data
						});
					});
			},
			getProducts(end) {
				fetch(`${ROOT}${end}`)
					.then(res => res.json())
					.then(data => {
						setStore({
							products: data
						});
					});
			}
		}
	};
};

export default getState;
