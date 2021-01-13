const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			coord: { lat: 40.416729, long: -3.703339 },
			img: ""
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			//Este action no se usa. Directamente subimos imagen desde componente Form.
			upload: async file => {
				console.log(file, "esto es la imagen");
				const url = "https://3000-d1e0b60d-866e-4306-b25d-f7037163ff1c.ws-eu03.gitpod.io/userphoto";
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: { img: file, prueba: "hola" },
					/*body: JSON.stringify({
						//pasar el body con la img y verificar cómo enviarla desde form.js
						img: file,
						user_id: 1
					}),*/
					redirect: "follow"
				};
				try {
					let res = await fetch(url, requestOptions);
					let result = await res;

					console.log(result, "respuesta");
				} catch (error) {}
			},

			photos: async () => {
				const url = "https://3000-d1e0b60d-866e-4306-b25d-f7037163ff1c.ws-eu03.gitpod.io/imagen";
				let response = await fetch(url);
				let respJson = await response.json();
				let photos = respJson.data;
				//console.log(response);
				//console.log(respJson);
				console.log(photos);
				//let Image_Base64 = btoa(photos);
				//console.log(Image_Base64);
				setStore({ img: photos });
				//return Image_Base64;
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
