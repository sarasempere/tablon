import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/mapsLeaflet.scss";
import L from "leaflet";
import Locate from "leaflet.locatecontrol";
import { MarkerIcon } from "./react-leaflet-icon.js";

const MapView = () => {
	const { store, actions } = useContext(Context);
	const lat = store.coord.lat;
	const long = store.coord.long;
	console.log(lat, "entra a map");
	return (
		<div>
			<Map center={[lat, long]} zoom={12}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				<Marker position={[lat, long]}>
					<Tooltip direction="top" opacity={1}>
						<span> {"Holi"} </span>
					</Tooltip>
				</Marker>
				);
			</Map>
		</div>
	);
};
export default MapView;
