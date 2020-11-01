import React, { Component } from "react";
import { Post } from "./post";

export const Blog = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-3">
					<Post />
				</div>
				<div className="col-3">
					<Post />
				</div>
				<div className="col-3">
					<Post />
				</div>
				<div className="col-3">
					<Post />
				</div>
			</div>
		</div>
	);
};
