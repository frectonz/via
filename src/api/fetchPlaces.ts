import Place from "../interfaces/Place";

import { API_KEY } from "../config";

export default async function fetchPlaces(str: string): Promise<Place[]> {
  if (str === "") {
    return [];
  }

  const url = `https://api.geocode.earth/v1/autocomplete?api_key=${API_KEY}&text=${str}&boundary.country=et`;

  const res = await fetch(url);
  const data = await res.json();

  return data?.features?.map((feature: any) => {
    return {
      id: feature?.properties?.id,
      name: feature?.properties?.name,
      lat: feature?.geometry?.coordinates[1],
      lon: feature?.geometry?.coordinates[0],
      displayName: feature?.properties?.label,
    };
  });
}
