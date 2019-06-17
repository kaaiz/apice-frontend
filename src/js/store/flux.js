const ROOT = "http://127.0.0.1:8000/api/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			category: [],
			element: [],
			type: [],
			product: [],
			temp: {}, // Objeto temporal para PUT & POST & DIPLAY
			title: "",
			description: ""
		},
		actions: {
			setTemp(items) {
				setStore({
					temp: items
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
			deleteElement(id, val) {
				fetch(`${ROOT}${val}/${id}`, {
					method: "delete"
				}).then(res => {
					setState(previousState => {
						[val]: previousState.movies.filter(m => m.id !== movie.id)
					};
				});
			}
		}
	};
};

export default getState;
