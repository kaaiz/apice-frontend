const getState = ({ getStore, setStore }) => {
	return {
		store: {
			categories: [],
			elements: [],
			types: [],
			products: []
		},
		actions: {
			getCategories(URL) {
				fetch(URL)
					.then(res => res.json())
					.then(data => {
						setStore({
							categories: data
						});
					});
			},
			DeleteCategory(num, URL) {
				fetch(URL + "/" + num, {
					method: "delete"
				}).then(response => response.json());
			},
			getElements(URL) {
				fetch(URL)
					.then(res => res.json())
					.then(data => {
						setStore({
							elements: data
						});
					});
			},
			getTypes(URL) {
				fetch(URL)
					.then(res => res.json())
					.then(data => {
						setStore({
							types: data
						});
					});
			},
			getProducts(URL) {
				fetch(URL)
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
