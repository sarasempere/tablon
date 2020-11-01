import React, { Component } from "react";
import "../../styles/home.scss";

export const Card = src => (
	<div className="card">
		<img src={src.src} className="card-img-top" />
		<div className="card-body">
			<p className="card-text">Some quick example text</p>
		</div>
	</div>
);
