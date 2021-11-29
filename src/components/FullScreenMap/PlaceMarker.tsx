import { FunctionComponent, useEffect } from "react";

import { Popup, Marker, useMap } from "react-leaflet";

import Place from "../../interfaces/Place";

interface MarkedLocationProps {
  place: Place;
}

const PlaceMarker: FunctionComponent<MarkedLocationProps> = ({ place }) => {
  return (
    <Marker position={[place.lat, place.lon]}>
      <Popup>{place.displayName}</Popup>
    </Marker>
  );
};

export default PlaceMarker;
