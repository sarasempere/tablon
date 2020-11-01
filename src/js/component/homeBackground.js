import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import board from "../../img/board-photo.jpg";
import "../../styles/home.scss";

export const Background = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="colorButtonTxt" className="jumbotron jumbotron-fluid imagen">
			<div className="container">
				<div className="text-center mt-5">
					<button
						type="button"
						id="principalButton"
						className="btn btn-info"
						onClick={() => {
							actions.setCoord();
							//console.log(state);
						}}>
						FIND ME!
					</button>
				</div>
			</div>
		</div>
	);
};
