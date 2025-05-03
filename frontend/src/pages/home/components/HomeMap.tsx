import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useContext } from "react";
import { HomeContext } from "../Home";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
    iconSize: [14, 14] // size of the icon
});

const largeIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2642/2642502.png",
    iconSize: [58, 58] // size of the icon
});

export function HomeMap() {
    const { hoveredElementId, data } = useContext(HomeContext)

    return (
        <MapContainer center={[37.7556370098, -122.4051019304]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.jpg"
            />

            {data.map((marker) => (
                <Marker key={marker.locationid} position={[marker.Latitude, marker.Longitude]} icon={marker.locationid === hoveredElementId ? largeIcon : customIcon}>
                    <Popup>{marker.Applicant}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

