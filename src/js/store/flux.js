const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			coord: { lat: 40.416729, long: -3.703339 }
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadCoord: coord => {
				return setStore({ coord: coord });
			},
			setCoord: () => {
				navigator.geolocation.getCurrentPosition(
					function(position) {
						let latitude = position.coords.latitude;
						let longitude = position.coords.longitude;
						let coord = { lat: latitude, long: longitude };
						setStore({ coord: coord });
					},
					function(error) {
						console.log(error);
					},
					{ enableHighAccuracy: true }
				);
			}
		}
	};
};

export default getState;
