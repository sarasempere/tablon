import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Form = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<form
				action="https://3000-d1e0b60d-866e-4306-b25d-f7037163ff1c.ws-eu03.gitpod.io/userphoto"
				method="POST"
				encType="multipart/form-data">
				<input type="file" name="archivo" />
				<input type="hidden" name="lat" value={store.coord.lat} />
				<input type="hidden" name="long" value={store.coord.long} />
				<input type="submit" />
			</form>
		</div>
	);
};
