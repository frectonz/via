import { useQuery } from "react-query";
import fetchPlaces from "../api/fetchPlaces";

export default function usePlaces(str: string) {
  return useQuery(["places", str], () => fetchPlaces(str));
}
