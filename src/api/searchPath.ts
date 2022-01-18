import Path from "./Path";
import { URL } from "../config";

export default async function searchPath(
  fromId: string,
  toId: string
): Promise<Path[]> {
  if (fromId === "" || toId === "") {
    return [];
  }

  const res = await fetch(`${URL}/api/path/search/${fromId}/${toId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("session")}`,
    },
  });
  const data = await res.json();

  return data?.data || [];
}
