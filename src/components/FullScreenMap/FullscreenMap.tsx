import { FunctionComponent } from "react";

import { Polyline, TileLayer, MapContainer } from "react-leaflet";

import Places from "./Places";

import { useFullScreenMapStore } from "../../hooks/useFullScreenMap";

const FullScreenMap: FunctionComponent<{}> = () => {
  const { places, lines } = useFullScreenMapStore();

  return (
    <MapContainer
      zoom={12}
      id="fullScreenMap"
      zoomControl={false}
      center={[8.9806, 38.7578]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Places places={places} />

      {lines.map(([from, to], i) => (
        <Polyline
          key={i}
          positions={[
            [from.lat, from.lon],
            [to.lat, to.lon],
          ]}
        />
      ))}
    </MapContainer>
  );
};

export default FullScreenMap;
