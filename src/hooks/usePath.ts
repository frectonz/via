import { useQuery } from "react-query";

import getPath from "../api/getPath";

export default function usePath(id: string) {
  return useQuery(["path", id], () => getPath(id));
}
