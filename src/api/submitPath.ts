import Path from "./Path";
import { URL } from "../config";
import { Path as IPath } from "../hooks/useNewPathForm";

export default async function submitPath(path: IPath): Promise<Path> {
  const res = await fetch(`${URL}/api/path/new`, {
    body: JSON.stringify(path),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("session")}`,
    },
  });
  const data = await res.json();

  return data.data as Path;
}
