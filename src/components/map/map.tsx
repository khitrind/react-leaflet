import {memo} from 'react';
import {LatLngExpression} from 'leaflet';
import {MapContainer, TileLayer} from 'react-leaflet';
import {AddPolylineAdapter} from 'src/components/add-polyline';
import {MapItems} from 'src/components/map-items';

import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';

const DEFAULE_MAP_CFG = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  center: [51.505, -0.09] as LatLngExpression,
  zoom: 13,
  scrollWheelZoom: true,
};

type Props = {
  mapConfig?: typeof DEFAULE_MAP_CFG;
};

export const Map = memo(({mapConfig = DEFAULE_MAP_CFG}: Props) => {
  return (
    <MapContainer
      center={mapConfig.center}
      zoom={mapConfig.zoom}
      scrollWheelZoom={mapConfig.scrollWheelZoom}
      className={styles.mapContainer}
    >
      <TileLayer attribution={mapConfig.attribution} url={mapConfig.url} />
      <AddPolylineAdapter />
      <MapItems />
    </MapContainer>
  );
});
