import { useQuery } from "react-query";

import searchPath from "../api/searchPath";

export default function usePaths(fromStr: string, toStr: string) {
  return useQuery(["paths", fromStr, toStr], () => searchPath(fromStr, toStr));
}
