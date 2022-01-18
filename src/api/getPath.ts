import Path from "./Path";

import { URL } from "../config";

export default async function getPath(id: string): Promise<Path> {
  const res = await fetch(`${URL}/api/path/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("session")}`,
    },
  });
  const data = await res.json();

  return data?.data || {};
}
