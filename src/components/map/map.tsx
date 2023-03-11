import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import { AddPolylineAdapter } from '../add-polyline';



export const Map = () => {
  return (

    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={styles.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddPolylineAdapter />

    </MapContainer>

  );
};
