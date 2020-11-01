import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Background } from "../component/homeBackground";
import { CardContainer } from "../component/cardContainer";
import MapView from "../component/react-map";
import { Map } from "leaflet";
import { Blog } from "../component/blog";
import { AddButton } from "../component/addButton";

export const Home = () => {
	return (
		<div className="container-fluid">
			<Background />
			<div className="row">
				<div className="col-8">
					<CardContainer />
					<br />
					<CardContainer />
					<AddButton />
					<br />
					<br />
					<Blog />
					<AddButton />
				</div>
				<div className="col-4">
					<MapView />
				</div>
			</div>
		</div>
	);
};
