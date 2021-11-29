import Place from "../interfaces/Place";

export default interface Path {
  _id: string;
  to: Place;
  from: Place;
  images: string[];
  busPrice: number;
  ladaPrice: number;
  approved: boolean;
  minBusPrice: number;
}
