import React, { Component } from "react";
import "../../styles/blog.scss";
import paper from "../../img/cuaderno.jpg";

export const Post = () => {
	return (
		<div className="card paper">
			<div className="card-body paper">
				<h5 className="card-title">Card title</h5>
				<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of...
				</p>
			</div>
		</div>
	);
};
