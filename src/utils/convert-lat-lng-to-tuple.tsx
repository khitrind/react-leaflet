import {LatLng} from 'leaflet';

export const convertLatLngToTuple = (latLng: LatLng) => [latLng.lat, latLng.lng] as [number, number];
