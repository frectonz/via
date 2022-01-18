import { FunctionComponent, useEffect } from "react";

import { useMap } from "react-leaflet";

import PlaceMarker from "./PlaceMarker";
import Place from "../../interfaces/Place";

interface PlacesProps {
  places: Place[];
}

const Places: FunctionComponent<PlacesProps> = ({ places }) => {
  const map = useMap();

  useEffect(() => {
    const lat = places[0]?.lat || 8.9806;
    const lon = places[0]?.lon || 38.7578;

    map.setView([lat, lon], 12, {
      animate: true,
      duration: 1,
    });
  }, [places]);

  return (
    <>
      {places.map((place, i) => (
        <PlaceMarker key={i} place={place} />
      ))}
    </>
  );
};

export default Places;
