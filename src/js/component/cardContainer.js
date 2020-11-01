import React, { Component } from "react";
import "../../styles/home.scss";
import { Card } from "./card";

export const CardContainer = () => (
	<div className="container">
		<div className="row">
			<div className="col-3">
				<Card src="https://i.pinimg.com/originals/f3/fe/ea/f3feea254243c033741574d589a01800.webp" />
			</div>
			<div className="col-3">
				<Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4CEvGpd6SSpgKdx8_aWrn-tlLw0m42oDMdA&usqp=CAU" />
			</div>
			<div className="col-3">
				<Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9dXoXV6ZqQDpezanuxudxmEJNOBOpPaS0Uw&usqp=CAU" />
			</div>
			<div className="col-3">
				<Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbm0KcFr7pjiom19KZNWSKw3pByiX10SygXw&usqp=CAU" />
			</div>
		</div>
	</div>
);
