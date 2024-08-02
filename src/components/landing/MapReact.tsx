import type { LatLngExpression } from "leaflet";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";

export default function MapReact() {
	const center: LatLngExpression = [43.61962, 3.86878];
	const rayon = 10000;
	const zoom = 11;
	const mapHeight = "600px";
	return (
		<MapContainer
			center={center}
			zoom={zoom}
			scrollWheelZoom={true}
			attributionControl={false}
			style={{ height: mapHeight }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Circle center={center} radius={rayon}>
				<Popup>Ma zone d'intervention</Popup>
			</Circle>
		</MapContainer>
	);
}
