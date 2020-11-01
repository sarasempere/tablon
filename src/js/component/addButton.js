import React, { Component } from "react";
import "../../styles/home.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";

export const AddButton = () => {
	return (
		<div className="centerbutton">
			<IconButton color="disabled" aria-label="AddCircleOutlineIcon">
				<AddCircleOutlineIcon style={{ fontSize: 50 }} />
			</IconButton>
		</div>
	);
};
