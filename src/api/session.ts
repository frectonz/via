import { URL } from "../config";

async function getNewSession(): Promise<string> {
  const res = await fetch(`${URL}/api/session/new`);
  const data = await res.json();

  return data?.data?.token || "";
}

export default async function getSession() {
  let token = localStorage.getItem("session");

  if (!token) {
    token = await getNewSession();
    localStorage.setItem("session", token);
  }
}
